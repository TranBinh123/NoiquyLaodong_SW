/*
 * Lớp giao tiếp SCORM 1.2. Chỉ là lớp mỏng: tìm API, gọi LMS, không chứa logic học tập.
 * Ngoài LMS (mở trực tiếp trên trình duyệt) mọi hàm trả về giá trị trung tính, không báo lỗi giả.
 */
(function (root) {
  "use strict";

  var MAX_DEPTH = 10;
  var api = null;
  var mode = "standalone";
  var initialized = false;
  var finished = false;
  var lastError = "";

  function log(message) {
    if (root.console && root.console.info) {
      root.console.info("[SCORM 1.2] " + message);
    }
  }

  // Tìm window.API trong cửa sổ hiện tại, rồi lần lên các cửa sổ cha.
  function findApi(win) {
    var w = win;
    var depth = 0;
    while (w && depth < MAX_DEPTH) {
      if (w.API && typeof w.API.LMSInitialize === "function") return w.API;
      if (w.parent === w) break;
      w = w.parent;
      depth++;
    }
    return null;
  }

  function locateApi() {
    try {
      return findApi(root) || (root.opener ? findApi(root.opener) : null);
    } catch (e) {
      // Trình duyệt chặn truy cập cửa sổ cha khác origin.
      return null;
    }
  }

  function init() {
    if (initialized) return mode === "lms";
    initialized = true;
    api = locateApi();
    if (!api) {
      mode = "standalone";
      log("Không tìm thấy API. Chạy chế độ độc lập.");
      return false;
    }
    var ok = api.LMSInitialize("") === "true";
    if (!ok) {
      lastError = String(api.LMSGetLastError());
      log("LMSInitialize thất bại, mã lỗi " + lastError + ". Chạy chế độ độc lập.");
      api = null;
      mode = "standalone";
      return false;
    }
    mode = "lms";
    return true;
  }

  function get(key) {
    if (mode !== "lms") return "";
    var value = api.LMSGetValue(key);
    if (value === "" && api.LMSGetLastError() !== "0") {
      log("LMSGetValue(" + key + ") lỗi " + api.LMSGetLastError());
    }
    return value;
  }

  function set(key, value) {
    if (mode !== "lms") return false;
    var ok = api.LMSSetValue(key, String(value)) === "true";
    if (!ok) log("LMSSetValue(" + key + ") lỗi " + api.LMSGetLastError());
    return ok;
  }

  function commit() {
    if (mode !== "lms") return false;
    return api.LMSCommit("") === "true";
  }

  function finish() {
    if (mode !== "lms" || finished) return false;
    finished = true;
    return api.LMSFinish("") === "true";
  }

  function getMode() {
    return mode;
  }

  function getLastError() {
    return lastError;
  }

  root.ScormAdapter = {
    init: init,
    get: get,
    set: set,
    commit: commit,
    finish: finish,
    getMode: getMode,
    getLastError: getLastError
  };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = root.ScormAdapter;
  }
})(typeof window !== "undefined" ? window : globalThis);
