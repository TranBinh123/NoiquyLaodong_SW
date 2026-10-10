/*
 * Giao diện và điều hướng. Đọc nội dung từ COURSE, logic tiến độ từ Progress,
 * giao tiếp LMS từ ScormAdapter. Mọi lỗi được hiển thị trong banner, không làm trắng trang.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "sg-nqld-bnh-progress";
  var screens = [];   // danh sách phẳng: intro, màn hình nội dung, quiz, final
  var groups = [];    // nhóm hiển thị trong mục lục
  var state = null;
  var mode = "standalone";
  var idx = 0;

  function $(sel) { return document.querySelector(sel); }

  /* ---------- Chuẩn bị dữ liệu ---------- */

  function buildScreens() {
    var list = [];
    groups = [];

    var introGroup = { key: "intro", title: "Giới thiệu", module: null, indices: [] };
    list.push({ id: "INTRO", type: "intro", title: "Giới thiệu khóa học", moduleId: null });
    introGroup.indices.push(0);
    groups.push(introGroup);

    COURSE.modules.forEach(function (m) {
      var g = { key: m.id, title: m.title, module: m, indices: [] };
      m.screens.forEach(function (s) {
        g.indices.push(list.length);
        list.push({
          id: s.id, type: s.type, title: s.title, moduleId: m.id, moduleTitle: "Module " + m.id.slice(1) + " · " + m.title,
          html: s.html, intro: s.intro, tabs: s.tabs, src: s.src, verify: !!s.verify
        });
      });
      g.indices.push(list.length);
      list.push({
        id: m.quiz.id, type: "quiz", title: "Kiểm tra: " + m.title, moduleId: m.id,
        moduleTitle: "Module " + m.id.slice(1) + " · " + m.title, quiz: m.quiz
      });
      groups.push(g);
    });

    var finalGroup = { key: "final", title: "Đánh giá cuối khóa", module: null, indices: [list.length] };
    list.push({ id: COURSE.final.id, type: "final", title: COURSE.final.title, moduleId: null });
    groups.push(finalGroup);
    return list;
  }

  function isComplete(scr) {
    switch (scr.type) {
      case "quiz": return (state.quiz[scr.id] || 0) >= COURSE.passScore;
      case "final": return state.final.p === true;
      default: return Progress.isSeen(state, scr.id);
    }
  }

  function firstIncompleteIndex() {
    for (var i = 0; i < screens.length; i++) {
      if (!isComplete(screens[i])) return i;
    }
    return screens.length - 1;
  }

  function canAccess(i) {
    return i >= 0 && i <= firstIncompleteIndex();
  }

  function indexOfId(id) {
    for (var i = 0; i < screens.length; i++) {
      if (screens[i].id === id) return i;
    }
    return -1;
  }

  /* ---------- Lưu trữ ---------- */

  function loadState() {
    if (mode === "lms") {
      var st = Progress.parse(ScormAdapter.get("cmi.suspend_data"));
      if (!st.last) st.last = ScormAdapter.get("cmi.core.lesson_location") || null;
      return st;
    }
    return Progress.parse(readLocal());
  }

  // Chế độ độc lập: ưu tiên localStorage; nếu trình duyệt chặn thì dùng bộ nhớ tạm trong phiên.
  var memoryStore = null;
  function readLocal() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return memoryStore;
    }
  }
  function writeLocal(raw) {
    try {
      window.localStorage.setItem(STORAGE_KEY, raw);
    } catch (e) {
      memoryStore = raw;
    }
  }

  function persist() {
    try {
      state.last = screens[idx].id;
      var raw = Progress.serialize(state);
      if (mode === "lms") {
        ScormAdapter.set("cmi.core.lesson_location", state.last);
        ScormAdapter.set("cmi.suspend_data", raw);
        ScormAdapter.set("cmi.core.lesson_status", Progress.courseStatus(state, COURSE));
        if (state.final.a > 0) {
          ScormAdapter.set("cmi.core.score.min", "0");
          ScormAdapter.set("cmi.core.score.max", "100");
          ScormAdapter.set("cmi.core.score.raw", String(state.final.b));
        }
        ScormAdapter.commit();
      } else {
        writeLocal(raw);
      }
    } catch (e) {
      showBanner("Không lưu được tiến độ: " + e.message, "bad");
    }
  }

  /* ---------- Thông báo ---------- */

  function showBanner(text, kind) {
    var b = $("#appBanner");
    b.textContent = text;
    b.className = "banner " + (kind || "warn");
    b.hidden = false;
  }

  /* ---------- Điều hướng ---------- */

  function go(i) {
    if (i < 0 || i >= screens.length || !canAccess(i)) return;
    idx = i;
    persist();
    renderScreen();
  }

  function markSeen(id) {
    if (Progress.markSeen(state, id)) {
      persist();
      refreshChrome();
    }
  }

  function refreshChrome() {
    renderMenu();
    renderProgress();
    updateNav();
  }

  function updateNav() {
    var scr = screens[idx];
    var done = isComplete(scr);
    var last = idx === screens.length - 1;
    $("#prevBtn").disabled = idx === 0;
    $("#nextBtn").hidden = last;
    $("#nextBtn").disabled = !done || last;
    $("#navHint").textContent = done ? "" : hintFor(scr);
  }

  function hintFor(scr) {
    if (scr.type === "quiz") return "Đạt tối thiểu " + COURSE.passScore + "% để tiếp tục.";
    if (scr.type === "reveal") return "Mở tất cả các mục để tiếp tục.";
    return "";
  }

  function renderProgress() {
    var total = screens.length;
    var done = screens.filter(isComplete).length;
    var pct = Math.round((done / total) * 100);
    $("#progressFill").style.width = pct + "%";
    $("#progressBar").setAttribute("aria-valuenow", String(pct));
    $("#progressText").textContent = "Đã hoàn thành " + done + "/" + total + " mục";
  }

  function renderMenu() {
    var html = "";
    groups.forEach(function (g) {
      var status = groupStatus(g);
      html += '<li class="menu-group"><div class="group-head"><span>' + g.title + '</span><span class="group-status">' + status + "</span></div><ul>";
      g.indices.forEach(function (i) {
        var s = screens[i];
        var st = itemStatus(i);
        var locked = st[0] === "locked";
        html += '<li><button type="button" class="menu-item is-' + st[0] + '" data-i="' + i + '"' +
          (locked ? " disabled" : "") + (i === idx ? ' aria-current="step"' : "") + ">" +
          '<span class="menu-title">' + s.title + "</span>" +
          '<span class="menu-status">' + st[1] + "</span></button></li>";
      });
      html += "</ul></li>";
    });
    $("#menu").innerHTML = html;
  }

  function groupStatus(g) {
    if (g.module) {
      if (Progress.moduleComplete(state, g.module, COURSE.passScore)) return "Hoàn thành";
      var touched = g.indices.some(function (i) { return isComplete(screens[i]) || i === idx; });
      return touched ? "Đang học" : "Chưa học";
    }
    if (g.key === "intro") return isComplete(screens[0]) ? "Đã học" : "Chưa học";
    return state.final.p ? "Đã đạt" : (state.final.f ? "Chưa đạt" : "Chưa làm");
  }

  function itemStatus(i) {
    if (isComplete(screens[i])) return ["done", "Đã học"];
    if (i === idx) return ["current", "Đang học"];
    if (!canAccess(i)) return ["locked", "Khóa"];
    return ["todo", "Chưa học"];
  }

  /* ---------- Hiển thị màn hình ---------- */

  function srcHtml(scr) {
    var out = "";
    if (scr.src) out += '<p class="src">Căn cứ: ' + scr.src + "</p>";
    if (scr.verify) out += '<p class="verify">Nội dung này cần chuyên gia nghiệp vụ xác nhận trước khi xuất bản.</p>';
    return out;
  }

  function renderScreen() {
    var scr = screens[idx];
    var main = $("#content");
    main.innerHTML =
      '<article class="screen" aria-labelledby="screen-title">' +
      '<p class="eyebrow">' + (scr.moduleTitle || "Khóa học") + "</p>" +
      '<h1 id="screen-title" tabindex="-1">' + scr.title + "</h1>" +
      '<div id="screen-body"></div></article>';
    var body = $("#screen-body");

    switch (scr.type) {
      case "intro":
        body.innerHTML = introHtml();
        markSeen(scr.id);
        break;
      case "text":
        body.innerHTML = scr.html + srcHtml(scr);
        markSeen(scr.id);
        break;
      case "reveal":
        renderReveal(scr, body);
        break;
      case "quiz":
        renderQuiz(scr, body);
        break;
      case "final":
        renderFinal(body);
        break;
    }

    main.scrollTop = 0;
    $("#screen-title").focus({ preventScroll: true });
    refreshChrome();
  }

  function introHtml() {
    return '<p class="lead">Khóa học giúp bạn hiểu đúng các quy định trong Nội quy lao động Sun Group và vận dụng vào tình huống làm việc thường gặp.</p>' +
      "<h2>Mục tiêu học tập</h2><ul>" +
      "<li>Nêu được mục đích, phạm vi và nguyên tắc cơ bản của Nội quy.</li>" +
      "<li>Nhận diện quy định về thời giờ làm việc, ứng xử, tài sản, bảo mật, an toàn.</li>" +
      "<li>Hiểu các nội dung chính về phòng chống quấy rối tình dục và điều chuyển công việc.</li>" +
      "<li>Phân biệt nhóm lỗi, hình thức kỷ luật, thời hiệu và trách nhiệm vật chất.</li></ul>" +
      "<h2>Cách học</h2><ul>" +
      "<li>Học theo thứ tự các mục. Mục tiếp theo mở khi mục trước đã hoàn thành.</li>" +
      "<li>Mỗi module kết thúc bằng bài kiểm tra; cần đạt " + COURSE.passScore + "% để hoàn thành module. Có thể làm lại không giới hạn.</li>" +
      "<li>Bài đánh giá cuối khóa cần đạt " + COURSE.passScore + "%, tối đa " + COURSE.finalMaxAttempts + " lần làm bài.</li>" +
      "<li>Tiến độ được lưu tự động; lần sau mở lại sẽ tiếp tục đúng chỗ đã học.</li></ul>" +
      '<div class="note"><strong>Lưu ý:</strong> khóa học mô tả nội dung văn bản. Việc xác định nhóm lỗi và hình thức kỷ luật trong thực tế phải theo Điều 24–28 Nội quy và do cấp có thẩm quyền quyết định.</div>';
  }

  function renderReveal(scr, body) {
    var opened = {};
    var total = scr.tabs.length;
    var html = '<p class="lead">' + (scr.intro || "") + '</p><div class="tabs" role="tablist">';
    scr.tabs.forEach(function (t, i) {
      html += '<button type="button" role="tab" class="tab" id="tab-' + i + '" data-i="' + i + '">' + t.label + "</button>";
    });
    html += '</div><div id="tab-panel" class="tabpanel" role="tabpanel" tabindex="0"></div>' + srcHtml(scr);
    body.innerHTML = html;

    var panel = $("#tab-panel");
    function show(i) {
      panel.innerHTML = scr.tabs[i].html;
      panel.setAttribute("aria-labelledby", "tab-" + i);
      opened[i] = true;
      body.querySelectorAll(".tab").forEach(function (b, k) {
        var active = k === i;
        b.setAttribute("aria-selected", String(active));
        b.classList.toggle("is-active", active);
        b.classList.toggle("is-opened", !!opened[k]);
      });
      if (Object.keys(opened).length === total) {
        markSeen(scr.id);
        updateNav();
      }
    }
    body.querySelectorAll(".tab").forEach(function (b) {
      b.addEventListener("click", function () { show(Number(b.getAttribute("data-i"))); });
    });
    show(0);
  }

  /* Dựng form trắc nghiệm, chấm điểm và phản hồi. onSubmit(score, answers, resultEl). */
  function renderQuestions(container, questions, onSubmit) {
    var html = '<form class="quiz" novalidate>';
    questions.forEach(function (q, qi) {
      html += '<fieldset class="question"><legend>Câu ' + (qi + 1) + ". " + q.text + "</legend>";
      q.options.forEach(function (o, oi) {
        html += '<label class="option"><input type="radio" name="q' + qi + '" value="' + oi + '"><span>' + o + "</span></label>";
      });
      html += '<p class="feedback" aria-live="polite"></p></fieldset>';
    });
    html += '<div class="quiz-actions"><button type="submit" class="btn btn-primary">Nộp bài</button></div>' +
      '<div class="quiz-result" aria-live="polite"></div></form>';
    container.innerHTML = html;

    var form = container.querySelector("form.quiz");
    var result = container.querySelector(".quiz-result");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var answers = [];
      for (var qi = 0; qi < questions.length; qi++) {
        var checked = form.querySelector('input[name="q' + qi + '"]:checked');
        if (!checked) {
          result.textContent = "Hãy chọn đáp án cho tất cả các câu hỏi.";
          result.className = "quiz-result warn";
          return;
        }
        answers.push(Number(checked.value));
      }

      var score = Progress.scoreOf(questions, answers);
      var fieldsets = form.querySelectorAll("fieldset.question");
      questions.forEach(function (q, qi) {
        var ok = answers[qi] === q.answer;
        var fs = fieldsets[qi];
        fs.querySelectorAll(".option").forEach(function (lab, oi) {
          if (oi === q.answer) lab.classList.add("is-correct");
          else if (oi === answers[qi]) lab.classList.add("is-incorrect");
        });
        var fb = fs.querySelector(".feedback");
        fb.textContent = ok
          ? "Đúng. " + q.ok
          : "Chưa đúng. " + q.no + " Đáp án đúng: " + q.options[q.answer] + ".";
        fb.className = "feedback " + (ok ? "is-ok" : "is-bad");
      });
      form.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
      form.querySelector('button[type="submit"]').hidden = true;
      onSubmit(score, result);
    });
  }

  function renderQuiz(scr, body) {
    renderQuestions(body, scr.quiz.questions, function (score, result) {
      Progress.recordQuiz(state, scr.id, score);
      persist();
      if (score >= COURSE.passScore) {
        result.innerHTML = '<p class="banner ok">Đạt ' + score + "%. Bạn có thể tiếp tục.</p>";
      } else {
        result.innerHTML = '<p class="banner bad">Đạt ' + score + "% (cần tối thiểu " + COURSE.passScore +
          '%). Hãy xem lại phần giải thích ở trên.</p><button type="button" class="btn" id="retryBtn">Làm lại bài kiểm tra</button>';
        $("#retryBtn").addEventListener("click", function () { renderQuiz(scr, body); });
      }
      refreshChrome();
    });
  }

  function renderFinal(body) {
    var F = state.final;
    if (F.p) {
      body.innerHTML = '<p class="banner ok">Bạn đã đạt yêu cầu khóa học. Điểm cao nhất: ' + F.b + "%.</p>";
      return;
    }
    if (F.f) {
      body.innerHTML = '<p class="banner bad">Bạn đã dùng hết ' + COURSE.finalMaxAttempts +
        " lần làm bài đánh giá cuối khóa. Điểm cao nhất: " + F.b + "%. Vui lòng liên hệ đơn vị đào tạo để được hướng dẫn.</p>";
      return;
    }
    if (!Progress.allModulesComplete(state, COURSE)) {
      body.innerHTML = '<p class="banner warn">Hoàn thành tất cả các module và bài kiểm tra để mở bài đánh giá cuối khóa.</p>';
      return;
    }
    var left = COURSE.finalMaxAttempts - F.a;
    body.innerHTML = '<p class="lead">Điều kiện đạt: tối thiểu ' + COURSE.passScore + "%. Số lần làm bài còn lại: " + left + ".</p><div id=\"final-quiz\"></div>";
    renderQuestions($("#final-quiz"), COURSE.final.questions, function (score, result) {
      Progress.submitFinal(state, COURSE, score);
      persist();
      if (state.final.p) {
        result.innerHTML = '<p class="banner ok">Đạt ' + score + "%. Bạn đã hoàn thành và đạt yêu cầu khóa học.</p>";
      } else if (state.final.f) {
        result.innerHTML = '<p class="banner bad">Chưa đạt ' + score + "%. Bạn đã dùng hết số lần làm bài.</p>";
      } else {
        result.innerHTML = '<p class="banner bad">Chưa đạt ' + score + "%. Bạn còn " +
          (COURSE.finalMaxAttempts - state.final.a) + ' lần làm bài.</p><button type="button" class="btn" id="retryFinal">Làm bài lại</button>';
        $("#retryFinal").addEventListener("click", function () { renderFinal(body); });
      }
      refreshChrome();
    });
  }

  /* ---------- Khởi tạo ---------- */

  function bindEvents() {
    $("#prevBtn").addEventListener("click", function () { go(idx - 1); });
    $("#nextBtn").addEventListener("click", function () { go(idx + 1); });
    $("#menu").addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-i]");
      if (!btn) return;
      go(Number(btn.getAttribute("data-i")));
      if (window.matchMedia("(max-width: 860px)").matches) toggleMenu(false);
    });
    $("#menuToggle").addEventListener("click", function () {
      toggleMenu($("#sidebar").className.indexOf("is-open") === -1);
    });
    window.addEventListener("error", function () {
      showBanner("Đã xảy ra lỗi. Hãy tải lại trang; tiến độ đã lưu sẽ được khôi phục.", "bad");
    });
    window.addEventListener("pagehide", function () {
      try {
        persist();
        if (mode === "lms") ScormAdapter.finish();
      } catch (e) { /* bỏ qua khi đóng trang */ }
    });
  }

  function toggleMenu(open) {
    $("#sidebar").classList.toggle("is-open", open);
    $("#menuToggle").setAttribute("aria-expanded", String(open));
  }

  function init() {
    mode = ScormAdapter.init() ? "lms" : "standalone";
    $("#courseTitle").textContent = COURSE.title;
    $("#courseAudience").textContent = COURSE.audience;
    $("#modeBadge").textContent = mode === "lms"
      ? "Đang chạy trong LMS (SCORM 1.2)"
      : "Chế độ độc lập: tiến độ lưu trên trình duyệt này";

    screens = buildScreens();
    state = loadState();
    var saved = indexOfId(state.last);
    idx = saved < 0 ? 0 : Math.min(saved, firstIncompleteIndex());

    bindEvents();
    renderScreen();
  }

  try {
    init();
  } catch (err) {
    var box = document.getElementById("appBanner");
    if (box) {
      box.textContent = "Không khởi động được khóa học: " + err.message;
      box.className = "banner bad";
      box.hidden = false;
    }
    if (window.console) console.error(err);
  }
})();
