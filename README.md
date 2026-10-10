# AI_README: Hướng dẫn cho AI khi chỉnh sửa dự án

Tài liệu này dành cho AI (hoặc người) nhận dự án để chỉnh sửa. Đọc hết mục 1–3 trước khi sửa file nào.

## 1. Dự án là gì

Khóa học eLearning "Nội quy lao động Sun Group" dành cho CBNV Sun World Ba Na Hills. Nội dung lấy từ Nội quy lao động SG-QĐ-G02 (sửa đổi 04) và Phụ lục 01.

- Ngôn ngữ giao diện và nội dung: tiếng Việt.
- Là trang web tĩnh thuần: HTML, CSS, JavaScript thường. Không framework, không bước build cho trình duyệt, không backend, không gọi API bên ngoài.
- Chạy được bằng cách nhấp đúp `index.html` (file://). Vì vậy không dùng ES modules (`import`/`export`) và không dùng `fetch` tới file cục bộ.
- Đóng gói thành gói SCORM 1.2 (ZIP) để tải lên LMS của công ty.

## 2. Cấu trúc file

```
index.html            Điểm vào. Khai báo thứ tự nạp script và toàn bộ khung giao diện.
css/styles.css        Giao diện. Màu thương hiệu khai báo bằng CSS variables ở :root.
js/content.js         NỘI DUNG: module, màn hình, câu hỏi, đáp án. File chính để sửa nội dung.
js/progress.js        Logic tiến độ thuần (không đụng DOM). Tính điểm, trạng thái, serialize.
js/scorm.js           Lớp mỏng giao tiếp SCORM 1.2 (tìm API, LMSGetValue/SetValue/Commit/Finish).
js/app.js             Giao diện và điều hướng: dựng màn hình, form trắc nghiệm, lưu tiến độ.
tests/course.test.js  Kiểm thử logic, cấu trúc nội dung và giao tiếp SCORM.
scripts/build.py      Kiểm tra tham chiếu, kiểm tra cú pháp JS, sinh imsmanifest.xml, đóng gói ZIP.
README.md             Hướng dẫn cho người dùng và người quản lý nội dung.
```

Thứ tự nạp script trong `index.html` là bắt buộc: `content.js` → `progress.js` → `scorm.js` → `app.js`. `app.js` dùng biến toàn cục `COURSE`, `Progress`, `ScormAdapter`.

## 3. Cách hoạt động

### 3.1 Cấu trúc nội dung (`COURSE` trong content.js)

```
COURSE = {
  id, title, audience,
  passScore: 80,            // ngưỡng đạt, đơn vị %
  finalMaxAttempts: 3,      // số lần làm bài cuối
  modules: [                // 8 module
    { id: "M1", title,
      screens: [ ...màn hình... ],   // 2–4 màn hình mỗi module
      quiz: { id: "M1-Q", questions: [ ...2 câu... ] } }
  ],
  final: { id: "FINAL", title, questions: [ ...9 câu... ] }
}
```

Các loại màn hình (`screen.type`):

| type | Mô tả | Trường bắt buộc |
|---|---|---|
| `text` | Đoạn văn, danh sách. Tự đánh dấu "đã học" khi mở. | `id`, `title`, `html`, `src` |
| `reveal` | Các tab, người học phải mở hết tab mới được tính là học xong. | `id`, `title`, `intro`, `tabs: [{label, html}]`, `src` |

Trường tùy chọn cho mọi màn hình:
- `src`: chuỗi ghi điều khoản căn cứ, ví dụ `"Điều 4 khoản 1–2"`. Hiển thị cho người học. Nên luôn có.
- `verify: true`: hiện cảnh báo "cần chuyên gia nghiệp vụ xác nhận". Đặt khi nội dung chưa được duyệt.

Trường `html` cho phép: `<p>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<table>` (có class `table`), `<p class="note">`. Không dùng `<script>`, không dùng `<img>` tới URL ngoài.

Câu hỏi trắc nghiệm (`questions[i]`):

```
{ text: "câu hỏi",
  options: ["A", "B", "C", "D"],   // 2 đến 4+ đáp án
  answer: 1,                       // CHỈ SỐ (bắt đầu từ 0) của đáp án đúng
  ok: "giải thích khi trả lời đúng",
  no: "giải thích khi trả lời sai" }
```

Lưu ý: `answer` là chỉ số, không phải nội dung đáp án. Sau khi đổi thứ tự `options`, phải đổi lại `answer`.

### 3.2 Quy tắc tiến độ (progress.js)

- Một module hoàn thành khi: (a) đã mở hết mọi màn hình của module, và (b) điểm cao nhất của quiz module ≥ `passScore`.
- Quiz module làm lại không giới hạn. Hệ thống giữ điểm cao nhất.
- Bài cuối: mở khi mọi module đã hoàn thành. Đạt → `final.p = true`. Hết `finalMaxAttempts` lần chưa đạt → `final.f = true`.
- Điểm = làm tròn (số câu đúng / tổng số câu × 100). Với 2 câu, phải đúng cả 2 mới đạt 80. Với 9 câu bài cuối, cần đúng ít nhất 8/9.
- Trạng thái SCORM `lesson_status`: `not attempted` → `incomplete` → `completed` (đã hoàn thành mọi module, chưa làm bài cuối) → `passed` hoặc `failed`.

### 3.3 Lưu tiến độ

- Trong LMS (có API SCORM 1.2): trạng thái JSON lưu ở `cmi.suspend_data`, giới hạn 4096 ký tự (code chặn ở 4000). Vị trí hiện tại lưu ở `cmi.core.lesson_location`. Điểm bài cuối lưu ở `cmi.core.score.raw`.
- Chạy độc lập (mở trực tiếp trình duyệt): lưu ở `localStorage`, khóa `sg-nqld-bnh-progress`. Nếu trình duyệt chặn localStorage thì dùng biến trong bộ nhớ (`memoryStore`).
- Định dạng trạng thái: `{ v: 1, last, seen: [screenId...], quiz: {quizId: điểm}, final: {a, b, p, f} }`. Nếu đổi cấu trúc này, tăng `VERSION` trong progress.js để bỏ qua dữ liệu cũ.

## 4. Các việc thường gặp

### 4.1 Sửa nội dung một màn hình
Sửa trường `html` hoặc `tabs` trong `js/content.js`. Giữ nguyên `id`. Không cần sửa `app.js`.

### 4.2 Thêm màn hình mới
1. Thêm object vào `screens` của module, có `id` duy nhất theo mẫu `M{n}-S{nn}`.
2. Chạy kiểm thử. Test kiểm tra id không trùng.
3. Lưu ý: học viên đang học sẽ có thêm một màn hình chưa xem. Điều này không làm mất tiến độ.

### 4.3 Thêm câu hỏi
- Module: giữ đúng 2 câu. Test `"phải có 2 câu"` sẽ báo lỗi nếu khác. Muốn đổi số câu thì sửa test và README cùng lúc.
- Bài cuối: test hiện assert `9`. Sửa cả `content.js` và `tests/course.test.js` (dòng `course.final.questions.length`).

### 4.4 Đổi ngưỡng đạt hoặc số lần làm bài
Sửa `passScore` hoặc `finalMaxAttempts` trong `content.js`. Chạy lại build để cập nhật `masteryscore` trong manifest. Sửa thêm `README.md` mục "Quy tắc hoàn thành" và câu chữ trong `introHtml()` của `app.js` nếu có nhắc số cụ thể.

### 4.5 Thêm một dạng tương tác mới (ví dụ kéo-thả, ghép cặp)
Hiện `app.js` chỉ hỗ trợ `text`, `reveal`, `quiz`, `final`, `intro`. Để thêm dạng mới:
1. Thêm nhánh `case` trong `renderScreen()` của `app.js`.
2. Trong `isComplete()`, quyết định điều kiện hoàn thành cho dạng mới.
3. Trong `buildScreens()`, đưa các trường mới vào object phẳng nếu cần.
4. Nếu là câu hỏi có chấm điểm, tái sử dụng `Progress.scoreOf` và `Progress.recordQuiz` để tương thích với logic hiện có.
5. Thêm test trong `tests/course.test.js`.

### 4.6 Đổi màu hoặc logo
Màu nằm trong `:root` của `css/styles.css`: đỏ `#C8102E`, đỏ đậm `#9E0C24`, vàng `#FFC20E`, vàng nhạt `#FFF4CC`, nền `#FFFCF5`. Logo là SVG inline trong `index.html` (class `logo-sun`, `logo-tulip`). Có thể thay bằng logo chính thức.

## 5. Quy tắc bắt buộc khi sửa

1. **Không đổi `id` của màn hình hoặc quiz đã có** trừ khi thật cần thiết. `id` được dùng để lưu tiến độ của học viên trong LMS. Đổi `id` sẽ làm mất dấu "đã học" của họ.
2. **Không dùng tài nguyên bên ngoài:** không CDN, không `http://` hay `https://` trong `src`/`href`, không đường dẫn tuyệt đối. `scripts/build.py` sẽ từ chối gói nếu vi phạm.
3. **Không dùng ES modules** trong `js/`. Dùng `var`/`function` và cấu trúc IIFE như các file hiện có.
4. **Nội dung pháp lý:** không thêm ngưỡng, số tiền, thời hạn hay quy định nào không có trong Nội quy gốc. Mọi nội dung mới cần có `src` trỏ tới điều khoản. Nếu không chắc, đặt `verify: true`.
5. **Không hiển thị số tiền cụ thể** cho đến khi vùng lương được xác định (xem README.md).
6. **Giữ giới hạn `suspend_data`:** chỉ lưu id và điểm, nên thường không vượt giới hạn. Nếu thêm nhiều trường vào trạng thái, kiểm tra lại `Progress.serialize` (sẽ ném lỗi nếu vượt 4000 ký tự).
7. **Không chỉnh sửa `dist/` hoặc `dist-zip/` bằng tay.** Chạy lại build.

## 6. Kiểm thử và đóng gói

```
node --test tests/course.test.js     # chạy kiểm thử (11 test). Không dùng "node --test tests/" trên Node 22.
python3 scripts/build.py             # kiểm tra, sinh dist/, imsmanifest.xml và dist-zip/sg-nqld-scorm12.zip
```

Sau mỗi thay đổi nội dung hoặc logic, chạy cả hai lệnh. Build thất bại khi:
- `index.html` tham chiếu tới file không tồn tại hoặc dùng URL ngoài;
- có lỗi cú pháp trong `js/`;
- file trong manifest không có trong ZIP.

Kiểm thử hiện **chưa bao gồm** kiểm thử giao diện trên trình duyệt thật và chưa chạy trên LMS thật. Nếu có thời gian, nên mở `index.html` qua `python3 -m http.server 8080` để xem thử.

## 7. Các việc còn mở

- Bài đánh giá cuối khóa hiện có 9 câu. Outline đề xuất 12 câu. Cần ngân hàng câu hỏi đã được duyệt.
- Ba màn hình có `verify: true` (M6-S02, M7-S02, M8-S02) đang chờ chuyên gia nghiệp vụ xác nhận.
- Phụ lục 01 (143 dòng hành vi) mới được phản ánh một phần. Chưa có ánh xạ đầy đủ theo STT.
- Vùng lương tối thiểu chưa được xác định, nên các ngưỡng bồi thường và kỷ luật theo "tháng lương tối thiểu vùng" chưa có số tiền cụ thể.
- Logo là SVG gần đúng, không phải logo chính thức của Sun Group.
- Chưa xác nhận LMS mục tiêu hỗ trợ SCORM 1.2 đầy đủ hay không.
- Mục tiêu học tập và thứ tự nội dung cần được sếp phê duyệt.

## 8. Khi nhận yêu cầu chỉnh sửa

- Đọc file liên quan trước khi sửa. Không viết lại file từ trí nhớ.
- Sửa nội dung thì ưu tiên `content.js`. Sửa hành vi thì ưu tiên `app.js` hoặc `progress.js`.
- Sau khi sửa, chạy kiểm thử. Nếu kiểm thử đỏ, sửa cho đến khi xanh hoặc báo lại rõ lý do.
- Tóm tắt cho người dùng: đã đổi gì, file nào, kiểm thử có qua không, còn việc gì cần người phụ trách nội dung quyết định.
