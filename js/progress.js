/*
 * Logic tiến độ học tập. Không phụ thuộc DOM nên có thể kiểm thử trên Node.
 * Quy ước trạng thái (ánh xạ sang lesson_status của SCORM 1.2):
 *   not attempted | incomplete | completed | passed | failed
 *   - completed: đã xem đủ nội dung VÀ đạt kiểm tra của tất cả module (chưa làm bài cuối)
 *   - passed:    đã đạt bài đánh giá cuối khóa
 *   - failed:    đã dùng hết số lần làm bài cuối mà chưa đạt
 */
(function (root) {
  "use strict";

  var VERSION = 1;
  // SCORM 1.2: cmi.suspend_data tối đa 4096 ký tự. Để dư biên an toàn.
  var MAX_SUSPEND_CHARS = 4000;

  function blank() {
    return {
      v: VERSION,
      last: null,          // id màn hình đang học
      seen: [],            // id màn hình đã hoàn thành xem
      quiz: {},            // quizId -> điểm cao nhất (0-100)
      final: { a: 0, b: 0, p: false, f: false } // a: số lần làm, b: điểm cao nhất, p: đạt, f: hết lượt
    };
  }

  function parse(raw) {
    if (!raw) return blank();
    try {
      var o = JSON.parse(raw);
      if (!o || o.v !== VERSION) return blank();
      var b = blank();
      b.last = typeof o.last === "string" ? o.last : null;
      b.seen = Array.isArray(o.seen) ? o.seen.filter(function (x) { return typeof x === "string"; }) : [];
      b.quiz = o.quiz && typeof o.quiz === "object" ? o.quiz : {};
      if (o.final && typeof o.final === "object") {
        b.final = {
          a: Number(o.final.a) || 0,
          b: Number(o.final.b) || 0,
          p: o.final.p === true,
          f: o.final.f === true
        };
      }
      return b;
    } catch (e) {
      return blank();
    }
  }

  function serialize(state) {
    var s = JSON.stringify(state);
    if (s.length > MAX_SUSPEND_CHARS) {
      throw new Error("Dữ liệu tiến độ vượt giới hạn " + MAX_SUSPEND_CHARS + " ký tự");
    }
    return s;
  }

  function markSeen(state, id) {
    if (state.seen.indexOf(id) === -1) {
      state.seen.push(id);
      return true;
    }
    return false;
  }

  function isSeen(state, id) {
    return state.seen.indexOf(id) !== -1;
  }

  function recordQuiz(state, quizId, score) {
    state.quiz[quizId] = Math.max(state.quiz[quizId] || 0, score);
    return state;
  }

  function scoreOf(questions, answers) {
    var correct = 0;
    questions.forEach(function (q, i) {
      if (answers[i] === q.answer) correct++;
    });
    return Math.round((correct / questions.length) * 100);
  }

  function moduleComplete(state, mod, passScore) {
    var allSeen = mod.screens.every(function (s) { return isSeen(state, s.id); });
    return allSeen && (state.quiz[mod.quiz.id] || 0) >= passScore;
  }

  function allModulesComplete(state, course) {
    return course.modules.every(function (m) {
      return moduleComplete(state, m, course.passScore);
    });
  }

  function courseStatus(state, course) {
    if (state.final.p) return "passed";
    if (state.final.f) return "failed";
    if (allModulesComplete(state, course)) return "completed";
    var touched = state.seen.length > 0 || Object.keys(state.quiz).length > 0;
    return touched ? "incomplete" : "not attempted";
  }

  function submitFinal(state, course, score) {
    state.final.a += 1;
    state.final.b = Math.max(state.final.b, score);
    if (score >= course.passScore) {
      state.final.p = true;
    } else if (state.final.a >= course.finalMaxAttempts) {
      state.final.f = true;
    }
    return state;
  }

  var api = {
    VERSION: VERSION,
    MAX_SUSPEND_CHARS: MAX_SUSPEND_CHARS,
    blank: blank,
    parse: parse,
    serialize: serialize,
    markSeen: markSeen,
    isSeen: isSeen,
    recordQuiz: recordQuiz,
    scoreOf: scoreOf,
    moduleComplete: moduleComplete,
    allModulesComplete: allModulesComplete,
    courseStatus: courseStatus,
    submitFinal: submitFinal
  };

  root.Progress = api;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
