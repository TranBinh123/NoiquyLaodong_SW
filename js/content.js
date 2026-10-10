/*
 * Nội dung khóa học, biên soạn từ Nội quy lao động SG-QĐ-G02 (sửa đổi 04) và Phụ lục 01.
 * Mọi mục có trường "src" ghi điều khoản căn cứ. Mục có verify: true cần chuyên gia nghiệp vụ xác nhận.
 * Không đưa ngưỡng, số tiền hay quy định nào ngoài văn bản gốc.
 */
var COURSE = {
  id: "SG-NQLD-BNH",
  title: "Nội quy lao động Sun Group",
  audience: "Dành cho CBNV Sun World Ba Na Hills",
  passScore: 80,
  finalMaxAttempts: 3,

  modules: [
    /* ---------------- MODULE 1 ---------------- */
    {
      id: "M1",
      title: "Hiểu đúng về Nội quy",
      screens: [
        {
          id: "M1-S01", type: "text", title: "Vì sao cần Nội quy?",
          html: "<p>Nội quy lao động quy định các chuẩn mực hành vi và ý thức tác phong tại nơi làm việc. Nắm rõ Nội quy giúp mỗi người biết điều gì cần làm và điều gì cần tránh.</p><p>Nội quy cũng là căn cứ để ghi nhận và xử lý các hành vi vi phạm kỷ luật lao động, góp phần duy trì kỷ cương và trật tự trong công việc.</p>",
          src: "Điều 1"
        },
        {
          id: "M1-S02", type: "reveal", title: "Ai cần tuân thủ?",
          intro: "Chọn từng mục để xem nội dung.",
          tabs: [
            { label: "Phạm vi", html: "<p>Nội quy áp dụng đối với toàn thể người lao động làm việc tại Sun Group, không phân biệt loại hợp đồng.</p>" },
            { label: "Đối tượng khóa học", html: "<p>Khóa học này dành cho CBNV Sun World Ba Na Hills. Nội dung căn cứ vào Nội quy lao động của Sun Group.</p>" },
            { label: "Đơn vị thành viên", html: "<p>Các công ty thành viên có thể xây dựng nội quy riêng, nhưng không được trái với Nội quy này và pháp luật lao động.</p>" }
          ],
          src: "Điều 2, Điều 34 khoản 2"
        },
        {
          id: "M1-S03", type: "reveal", title: "Quyền và trách nhiệm",
          intro: "Quyền luôn đi cùng trách nhiệm tuân thủ. Chọn từng mục để xem.",
          tabs: [
            { label: "Quyền", html: "<ul><li>Yêu cầu bảo đảm điều kiện lao động an toàn, vệ sinh và được huấn luyện về an toàn lao động.</li><li>Từ chối làm việc hoặc rời nơi làm việc khi thấy rõ có nguy cơ tai nạn lao động hoặc đe dọa nghiêm trọng đến tính mạng, sức khỏe; phải báo ngay với người quản lý trực tiếp.</li><li>Khiếu nại hoặc tố cáo đến cơ quan nhà nước có thẩm quyền khi Sun Group vi phạm pháp luật hoặc cam kết về an toàn lao động.</li><li>Tham gia đóng góp ý kiến sửa đổi Nội quy thông qua tổ chức đại diện hợp pháp.</li></ul>" },
            { label: "Trách nhiệm", html: "<ul><li>Tuân thủ các quy định, nội quy, văn bản nội bộ đã ký kết.</li><li>Tuân thủ thời giờ làm việc, đi làm và chấm công đúng quy định.</li><li>Thực hiện nhiệm vụ đúng phạm vi trách nhiệm và thẩm quyền được giao; không tự ý vượt thẩm quyền.</li><li>Chủ động báo cáo tiến độ và các vấn đề phát sinh; bàn giao công việc khi thay đổi vị trí.</li><li>Sử dụng đầy đủ trang thiết bị bảo hộ và tuân thủ quy định an toàn.</li></ul>" }
          ],
          src: "Điều 8, Điều 15, Điều 16"
        }
      ],
      quiz: {
        id: "M1-Q",
        questions: [
          {
            text: "Khi chưa chắc một quy định có áp dụng cho công việc của mình hay không, cách làm nào phù hợp nhất?",
            options: ["Tự suy đoán theo kinh nghiệm cá nhân", "Đối chiếu Nội quy và quy định áp dụng cho đơn vị", "Bỏ qua nếu chưa từng gặp tình huống đó", "Làm theo đồng nghiệp mà không kiểm tra"],
            answer: 1,
            ok: "Kinh nghiệm cá nhân không thay thế được quy định. Hãy đối chiếu văn bản áp dụng.",
            no: "Khi chưa rõ, cần đối chiếu văn bản áp dụng thay vì suy đoán hay làm theo người khác."
          },
          {
            text: "Điều nào của Nội quy quy định đối tượng và phạm vi áp dụng?",
            options: ["Điều 1 – Mục đích", "Điều 2 – Đối tượng và phạm vi áp dụng", "Điều 17 – Khái niệm QRTD", "Điều 33 – Xử lý bồi thường thiệt hại"],
            answer: 1,
            ok: "Đúng, Điều 2 quy định đối tượng và phạm vi áp dụng.",
            no: "Điều 2 là điều quy định đối tượng và phạm vi áp dụng."
          }
        ]
      }
    },

    /* ---------------- MODULE 2 ---------------- */
    {
      id: "M2",
      title: "Thời giờ làm việc và nghỉ ngơi",
      screens: [
        {
          id: "M2-S01", type: "text", title: "Thời giờ làm việc bình thường",
          html: "<p>Thời giờ làm việc bình thường không quá <strong>08 giờ trong 01 ngày</strong> và không quá <strong>48 giờ trong 01 tuần</strong>.</p><p>Thời giờ làm việc ban đêm được tính từ 22:00 đến 06:00 sáng hôm sau.</p><p>Làm thêm giờ chỉ thực hiện theo giới hạn tại Điều 5 và Quy định Quản lý thời giờ làm việc của Sun Group.</p>",
          src: "Điều 4 khoản 1–2; Điều 5"
        },
        {
          id: "M2-S02", type: "reveal", title: "Lịch làm việc theo đặc thù",
          intro: "Lịch làm việc phụ thuộc vào bộ phận. Chọn từng mục để xem.",
          tabs: [
            { label: "Bộ phận văn phòng", html: "<p>Làm việc từ thứ Hai đến thứ Bảy: buổi sáng 08:30–12:00, buổi chiều 13:00–17:30. Đơn vị có thể được cấp có thẩm quyền phê duyệt điều chỉnh và phải thông báo trước cho người lao động.</p>" },
            { label: "Bộ phận vận hành, sản xuất, dịch vụ", html: "<p>Ca làm việc và thời gian làm việc do cấp có thẩm quyền quyết định, linh hoạt điều chỉnh và được báo trước cho người lao động.</p>" },
            { label: "Lưu ý", html: "<p>Khung giờ hành chính không phải lịch chung cho mọi vị trí. Hãy đối chiếu lịch áp dụng cho chính vị trí và đơn vị của mình.</p>" }
          ],
          src: "Điều 4 khoản 1.1–1.3"
        },
        {
          id: "M2-S03", type: "text", title: "Nghỉ ngơi và nghỉ không có lý do chính đáng",
          html: "<ul><li>Nghỉ hằng tuần: bộ phận văn phòng nghỉ Chủ nhật; bộ phận vận hành được nghỉ ít nhất 24 giờ liên tục mỗi tuần.</li><li>Nghỉ phép năm: 12 ngày với người lao động làm việc trong điều kiện bình thường, đủ 12 tháng làm việc.</li><li>Nghỉ việc riêng hưởng lương: bản thân kết hôn 03 ngày làm việc; cha mẹ, vợ chồng, con chết 03 ngày làm việc.</li></ul><p><strong>Nghỉ không có lý do chính đáng</strong> là không có mặt tại nơi làm việc khi chưa có sự đồng ý của người quản lý trực tiếp. Thời gian này không được tính là thời gian làm việc và người lao động phải chịu xử lý kỷ luật theo Nội quy.</p>",
          src: "Điều 6 khoản 1–4, khoản 9"
        }
      ],
      quiz: {
        id: "M2-Q",
        questions: [
          {
            text: "Theo Điều 4, thời giờ làm việc bình thường không quá bao nhiêu trong 01 ngày và 01 tuần?",
            options: ["08 giờ/ngày; 48 giờ/tuần", "10 giờ/ngày; 50 giờ/tuần", "08 giờ/ngày; 44 giờ/tuần", "12 giờ/ngày; 48 giờ/tuần"],
            answer: 0,
            ok: "Đúng, Điều 4 khoản 1 quy định 08 giờ/ngày và 48 giờ/tuần.",
            no: "Điều 4 khoản 1: không quá 08 giờ trong 01 ngày, không quá 48 giờ trong 01 tuần."
          },
          {
            text: "Một nhân viên vận hành cho rằng khung giờ hành chính trong Nội quy là giờ làm việc của mọi vị trí. Nhận định nào phù hợp?",
            options: ["Đúng, áp dụng cho mọi vị trí", "Cần đối chiếu lịch và quy định áp dụng cho vị trí, đơn vị", "Có thể tự chọn lịch phù hợp", "Chỉ áp dụng vào thứ Bảy"],
            answer: 1,
            ok: "Khung giờ hành chính áp dụng cho bộ phận văn phòng. Bộ phận vận hành có ca linh hoạt theo quyết định của cấp có thẩm quyền.",
            no: "Không nên khái quát khung giờ văn phòng thành lịch chung cho mọi vị trí (Điều 4 khoản 1.1–1.2)."
          }
        ]
      }
    },

    /* ---------------- MODULE 3 ---------------- */
    {
      id: "M3",
      title: "Ứng xử và hình ảnh người Sun Group",
      screens: [
        {
          id: "M3-S01", type: "text", title: "Chuẩn mực ứng xử",
          html: "<p>Mỗi CBNV có trách nhiệm ứng xử phù hợp với giá trị và văn hóa của Sun Group, góp phần bảo vệ uy tín và hình ảnh chung.</p><p>Chuẩn mực được chia theo bốn nhóm quan hệ: đồng nghiệp, công việc, Tập đoàn và thương hiệu, khách hàng và đối tác.</p>",
          src: "Chương III, mở đầu"
        },
        {
          id: "M3-S02", type: "reveal", title: "Đồng nghiệp và công việc",
          intro: "Chọn từng mục để xem.",
          tabs: [
            { label: "Với đồng nghiệp", html: "<ul><li>Ứng xử lịch sự, tôn trọng đồng nghiệp trong mọi tình huống công việc.</li><li>Không nói xấu, không lan truyền thông tin chưa được kiểm chứng.</li><li>Không tham gia hành vi gây mất đoàn kết nội bộ.</li><li>Không cản trở hoặc gây khó khăn cho người khác khi thực hiện nhiệm vụ.</li></ul>" },
            { label: "Trong công việc", html: "<ul><li>Thực hiện công việc đúng quy trình, quy định và hướng dẫn nghiệp vụ.</li><li>Không tự ý rời vị trí làm việc hoặc thay đổi ca khi chưa được phép.</li><li>Không đưa ra quyết định hoặc thực hiện công việc vượt thẩm quyền.</li><li>Báo cáo kịp thời các sai sót, sự cố và rủi ro phát sinh.</li></ul>" },
            { label: "Với CBQL", html: "<p>Cán bộ quản lý làm gương trong chấp hành nội quy, phân công công việc rõ ràng, công bằng và hỗ trợ nhân viên hoàn thành nhiệm vụ.</p>" }
          ],
          src: "Điều 7, Điều 8"
        },
        {
          id: "M3-S03", type: "reveal", title: "Tập đoàn, thương hiệu, khách hàng",
          intro: "Chọn từng mục để xem.",
          tabs: [
            { label: "Tập đoàn và thương hiệu", html: "<ul><li>Thận trọng, trung thực và đúng thẩm quyền khi phát ngôn về Sun Group.</li><li>Không lan truyền thông tin sai sự thật về Sun Group hoặc CBNV.</li><li>Không sử dụng tên, thương hiệu, danh nghĩa Sun Group để phục vụ lợi ích cá nhân.</li></ul>" },
            { label: "Khách hàng và đối tác", html: "<ul><li>Giao tiếp chuyên nghiệp, lịch sự; lắng nghe và giải đáp thắc mắc kịp thời, đúng quy định.</li><li>Không tranh cãi, quát nạt hoặc gây khó khăn khi trao đổi với khách hàng, đối tác.</li><li>Không gợi ý, yêu cầu hoặc nhận tiền, quà tặng, lợi ích cá nhân trái quy định của Sun Group.</li><li>Chỉ phát ngôn với cơ quan truyền thông khi được cấp có thẩm quyền cho phép.</li></ul>" }
          ],
          src: "Điều 9, Điều 10; Phụ lục 01 (STT 63–65)"
        }
      ],
      quiz: {
        id: "M3-Q",
        questions: [
          {
            text: "Ai được phép phát ngôn, cung cấp thông tin hoặc làm việc với cơ quan truyền thông?",
            options: ["Bất kỳ nhân viên nào có hiểu biết", "Người được cấp có thẩm quyền cho phép", "Nhân viên có thâm niên trên 5 năm", "Trưởng nhóm khi thấy cần thiết"],
            answer: 1,
            ok: "Đúng, theo Điều 10 khoản 7 phải được cấp có thẩm quyền cho phép.",
            no: "Điều 10 khoản 7: chỉ đại diện phát ngôn khi được cấp có thẩm quyền cho phép."
          },
          {
            text: "Nhân viên trao đổi với khách hàng bằng giọng quát nạt, gây khó khăn khi trao đổi. Hành vi này liên quan đến nội dung nào?",
            options: ["Không liên quan đến Nội quy", "Ứng xử với khách hàng, đối tác (Điều 10 và Phụ lục 01, STT 64)", "Chỉ là vấn đề phong cách giao tiếp", "Tự động bị sa thải"],
            answer: 1,
            ok: "Đúng. Đây là hành vi cần đối chiếu với quy định ứng xử với khách hàng, đối tác.",
            no: "Hành vi này thuộc nhóm ứng xử với khách hàng. Không tự kết luận hình thức kỷ luật từ mô tả ngắn."
          }
        ]
      }
    },

    /* ---------------- MODULE 4 ---------------- */
    {
      id: "M4",
      title: "Tài sản, bảo mật và an toàn",
      screens: [
        {
          id: "M4-S01", type: "reveal", title: "Tài sản, bảo mật, an toàn",
          intro: "Chọn từng nhóm để xem nội dung chính.",
          tabs: [
            { label: "Tài sản và nguồn lực", html: "<ul><li>Sử dụng, bảo quản tài sản đúng mục đích; không tự ý dịch chuyển, tháo dỡ khi chưa được phép.</li><li>Không chiếm dụng, sử dụng trái phép tài sản vì mục đích cá nhân.</li><li>Khi mang tài sản, thiết bị, tài liệu ra khỏi phạm vi quản lý phải được cấp có thẩm quyền cho phép.</li></ul>" },
            { label: "An ninh và bảo mật", html: "<ul><li>Bảo mật thông tin sản xuất, kinh doanh, tài chính, nhân sự, công nghệ.</li><li>Chỉ sử dụng và chia sẻ thông tin trong phạm vi nhiệm vụ được giao.</li><li>Không tự ý cung cấp, phát tán thông tin hoặc hình ảnh của Sun Group ra bên ngoài.</li></ul>" },
            { label: "An toàn lao động", html: "<ul><li>Tuân thủ quy định, quy trình về an toàn lao động, vệ sinh lao động và phòng chống cháy nổ.</li><li>Sử dụng đầy đủ, đúng quy định trang thiết bị bảo hộ.</li><li>Không mang, tàng trữ vũ khí, chất nổ, chất độc, ma túy vào khu vực làm việc.</li></ul>" }
          ],
          src: "Điều 11, Điều 12, Điều 16"
        },
        {
          id: "M4-S02", type: "text", title: "Phát hiện và báo cáo kịp thời",
          html: "<p>Mỗi người có trách nhiệm chủ động phát hiện và báo cáo kịp thời các sự cố, rủi ro có thể gây thất thoát, hư hỏng hoặc mất an toàn đối với tài sản và con người.</p><p>Khi chấm dứt quan hệ lao động, người lao động phải bàn giao đầy đủ hồ sơ, tài liệu và dữ liệu liên quan đến công việc, và tiếp tục thực hiện nghĩa vụ bảo mật đã cam kết.</p>",
          src: "Điều 11 khoản 3; Điều 12 khoản 8; Điều 16 khoản 4"
        }
      ],
      quiz: {
        id: "M4-Q",
        questions: [
          {
            text: "Khi chấm dứt quan hệ lao động, người lao động cần làm gì với hồ sơ, tài liệu và dữ liệu liên quan đến công việc?",
            options: ["Giữ lại để tham khảo", "Bàn giao đầy đủ và không xóa, sao chép hay lưu trữ thông tin của Sun Group trái quy định", "Gửi cho đồng nghiệp để tiếp tục", "Xóa trước khi nghỉ việc"],
            answer: 1,
            ok: "Đúng, theo Điều 12 khoản 8.",
            no: "Điều 12 khoản 8: bàn giao đầy đủ và không xóa, sao chép, lưu trữ hoặc sử dụng thông tin trái quy định."
          },
          {
            text: "Khi phát hiện nguy cơ mất an toàn, người lao động cần làm gì?",
            options: ["Tự xử lý và không báo để tránh phiền người khác", "Chủ động báo cáo kịp thời với người có trách nhiệm", "Chờ đến cuối ca mới báo", "Chỉ báo khi đã xảy ra sự cố"],
            answer: 1,
            ok: "Đúng, Điều 16 khoản 4 yêu cầu chủ động phát hiện và báo cáo kịp thời.",
            no: "Điều 16 khoản 4: phải chủ động phát hiện, kịp thời báo cáo nguy cơ mất an toàn."
          }
        ]
      }
    },

    /* ---------------- MODULE 5 ---------------- */
    {
      id: "M5",
      title: "Phòng chống quấy rối tình dục",
      screens: [
        {
          id: "M5-S01", type: "text", title: "Khái niệm",
          html: "<p>Quấy rối tình dục tại nơi làm việc là hành vi có tính chất tình dục của bất kỳ người nào đối với người khác tại nơi làm việc, mà không được người đó mong muốn hoặc chấp nhận.</p><p>Nội quy không coi là quấy rối tình dục những lời khen hoặc khích lệ thông thường được chấp nhận về mặt văn hóa, xã hội, cũng như các hành vi đồng thuận giữa người lao động theo quy định pháp luật.</p>",
          src: "Điều 17"
        },
        {
          id: "M5-S02", type: "reveal", title: "Các dạng hành vi bị nghiêm cấm",
          intro: "Quấy rối tình dục có thể diễn ra dưới nhiều dạng. Chọn từng dạng để xem.",
          tabs: [
            { label: "Thể chất", html: "<p>Hành động, cử chỉ, tiếp xúc, tác động vào cơ thể mang tính tình dục hoặc gợi ý tình dục.</p>" },
            { label: "Lời nói", html: "<p>Lời nói trực tiếp, qua điện thoại hoặc phương tiện điện tử có nội dung tình dục hoặc có ngụ ý tình dục.</p>" },
            { label: "Phi lời nói", html: "<p>Các hành động không được mong muốn như ngôn ngữ cơ thể, trưng bày, miêu tả tài liệu trực quan về tình dục, kể cả qua phương tiện điện tử.</p>" }
          ],
          src: "Điều 18 khoản 1"
        },
        {
          id: "M5-S03", type: "text", title: "Trách nhiệm và xử lý",
          html: "<p>Người sử dụng lao động có trách nhiệm tổ chức triển khai, giám sát và tuyên truyền, đào tạo về phòng chống quấy rối tình dục. Người lao động có trách nhiệm tuân thủ quy định và kịp thời phản ánh, tố cáo hành vi vi phạm.</p><p>Việc tiếp nhận, xử lý phản ánh phải bảo mật thông tin và bảo vệ danh dự, nhân phẩm của các bên liên quan. Thời hạn, trình tự và thủ tục xử lý theo trình tự xử lý kỷ luật lao động; bồi thường và khắc phục hậu quả theo thỏa thuận và trình tự bồi thường trách nhiệm vật chất (nếu có).</p>",
          src: "Điều 18 khoản 2; Điều 19; Điều 20"
        }
      ],
      quiz: {
        id: "M5-Q",
        questions: [
          {
            text: "Nhận định ‘Quấy rối tình dục chỉ bao gồm hành vi tiếp xúc cơ thể’ là:",
            options: ["Đúng", "Sai"],
            answer: 1,
            ok: "Chính xác. Điều 18 nêu hành vi thể chất, lời nói và phi lời nói.",
            no: "Điều 18 không giới hạn ở tiếp xúc cơ thể. Hành vi bằng lời nói và phi lời nói cũng bị nghiêm cấm."
          },
          {
            text: "Việc xử lý hành vi quấy rối tình dục tại nơi làm việc được thực hiện theo quy định nào?",
            options: ["Trình tự, thủ tục xử lý kỷ luật lao động", "Quy trình do người khiếu nại tự đề xuất", "Không cần xử lý nếu nạn nhân không yêu cầu", "Quy định không thuộc nội dung Nội quy"],
            answer: 0,
            ok: "Đúng, Điều 20 khoản 1 dẫn chiếu đến trình tự xử lý kỷ luật lao động.",
            no: "Điều 20 khoản 1: thời hạn, trình tự, thủ tục xử lý theo trình tự xử lý kỷ luật lao động."
          }
        ]
      }
    },

    /* ---------------- MODULE 6 ---------------- */
    {
      id: "M6",
      title: "Điều chuyển công việc",
      screens: [
        {
          id: "M6-S01", type: "text", title: "Khi nào có thể điều chuyển?",
          html: "<p><strong>Tạm thời điều chuyển</strong> được áp dụng khi gặp khó khăn đột xuất như thiên tai, hỏa hoạn, dịch bệnh nguy hiểm, biện pháp ngăn ngừa hoặc khắc phục tai nạn lao động, sự cố điện, nước, hoặc do nhu cầu sản xuất, kinh doanh.</p><p>Các trường hợp do nhu cầu sản xuất, kinh doanh gồm: chia tách, sáp nhập đơn vị hoặc thay đổi cơ cấu tổ chức; tái cấu trúc; thay đổi điều khoản hợp đồng với khách hàng dẫn đến điều chỉnh nhân sự; thiếu nhân sự tạm thời; và các trường hợp bảo đảm hoạt động liên tục, thông suốt.</p>",
          src: "Điều 21, Điều 22"
        },
        {
          id: "M6-S02", type: "text", title: "Điều kiện áp dụng",
          html: "<ul><li>Thông báo cho người lao động biết trước ít nhất <strong>03 ngày làm việc</strong>, nêu rõ thời hạn làm tạm thời và bố trí công việc phù hợp với sức khỏe, giới tính.</li><li>Thời gian chuyển không quá <strong>60 ngày làm việc cộng dồn trong 01 năm</strong>.</li><li>Quá 60 ngày làm việc cộng dồn chỉ thực hiện khi người lao động <strong>đồng ý bằng văn bản</strong>.</li><li>Tiền lương công việc mới ít nhất bằng 85% công việc cũ và không thấp hơn lương tối thiểu; nếu thấp hơn, được giữ nguyên lương cũ trong 30 ngày làm việc.</li></ul>",
          src: "Điều 23 khoản 1–3",
          verify: true
        }
      ],
      quiz: {
        id: "M6-Q",
        questions: [
          {
            text: "Theo Điều 23, khi chuyển người lao động làm công việc khác theo Điều 21, phải thông báo trước ít nhất bao nhiêu ngày làm việc?",
            options: ["01 ngày", "03 ngày", "07 ngày", "15 ngày"],
            answer: 1,
            ok: "Đúng, Điều 23 khoản 1 quy định ít nhất 03 ngày làm việc.",
            no: "Điều 23 khoản 1: thông báo trước ít nhất 03 ngày làm việc."
          },
          {
            text: "Thời gian chuyển làm công việc khác vượt quá 60 ngày làm việc cộng dồn trong 01 năm cần điều kiện nào?",
            options: ["Chỉ cần quyết định của trưởng đơn vị", "Người lao động đồng ý bằng văn bản", "Chỉ cần thông báo bằng miệng", "Không cần điều kiện nào"],
            answer: 1,
            ok: "Đúng, Điều 23 khoản 2 yêu cầu sự đồng ý bằng văn bản của người lao động.",
            no: "Điều 23 khoản 2b: vượt 60 ngày làm việc cộng dồn chỉ thực hiện khi người lao động đồng ý bằng văn bản."
          }
        ]
      }
    },

    /* ---------------- MODULE 7 ---------------- */
    {
      id: "M7",
      title: "Vi phạm và xử lý kỷ luật lao động",
      screens: [
        {
          id: "M7-S01", type: "text", title: "Hành vi, nhóm lỗi và hình thức",
          html: "<p>Các hành vi vi phạm được liệt kê tại Phụ lục 01 đính kèm Nội quy. Mỗi hành vi được phân vào một nhóm lỗi tiêu chuẩn từ L1 đến L5, mức độ nghiêm trọng tăng dần.</p><table class=\"table\"><thead><tr><th>Nhóm lỗi</th><th>Hình thức xử lý</th></tr></thead><tbody><tr><td>L1</td><td>Không áp dụng xử lý KLLĐ, nhưng bị “Nhắc nhở nội bộ”</td></tr><tr><td>L2</td><td>Khiển trách</td></tr><tr><td>L3</td><td>Kéo dài thời hạn nâng lương không quá 06 tháng</td></tr><tr><td>L4</td><td>Cách chức</td></tr><tr><td>L5</td><td>Sa thải</td></tr></tbody></table>",
          src: "Điều 24 khoản 1; Điều 25 khoản 1–2; Phụ lục 01"
        },
        {
          id: "M7-S02", type: "text", title: "Nguyên tắc phân nhóm lỗi",
          html: "<p>Khi yếu tố thiệt hại chưa được mô tả trong hành vi tại Phụ lục 01, nhóm lỗi được xác định theo mức thiệt hại thực tế:</p><ul><li>Không nghiêm trọng, giá trị quy đổi không quá 02 tháng lương tối thiểu vùng: nhóm L2.</li><li>Không nghiêm trọng, từ 02 đến dưới 10 tháng lương tối thiểu vùng: nhóm L3.</li><li>Nghiêm trọng, từ 10 đến 20 tháng lương tối thiểu vùng: nhóm L4.</li><li>Đặc biệt nghiêm trọng, trên 20 tháng lương tối thiểu vùng: nhóm L5.</li></ul><p>Người có thẩm quyền có thể xem xét tình tiết giảm nhẹ hoặc tăng nặng; tình tiết tăng nặng chỉ được tăng không quá 02 nhóm lỗi so với nhóm tiêu chuẩn.</p>",
          src: "Điều 24 khoản 2.2–2.3",
          verify: true
        },
        {
          id: "M7-S03", type: "text", title: "Thời hiệu, tái phạm và xóa kỷ luật",
          html: "<ul><li>Thời hiệu xử lý kỷ luật là <strong>06 tháng</strong> kể từ ngày xảy ra hành vi; với hành vi liên quan trực tiếp đến tài chính, tài sản, bí mật kinh doanh, bí mật công nghệ là <strong>12 tháng</strong>.</li><li><strong>Tái phạm</strong> là trường hợp người lao động lặp lại hành vi vi phạm đã bị xử lý kỷ luật mà chưa được xóa kỷ luật.</li><li>Khiển trách được xóa sau 03 tháng; kéo dài thời hạn nâng lương được xóa sau 06 tháng; cách chức được xóa sau 03 năm, nếu không tiếp tục vi phạm.</li></ul>",
          src: "Điều 3 khoản 27; Điều 27 khoản 1; Điều 30 khoản 1"
        },
        {
          id: "M7-S04", type: "text", title: "Nguyên tắc và trình tự xử lý",
          html: "<p><strong>Nguyên tắc:</strong> người sử dụng lao động phải chứng minh được lỗi; người lao động phải có mặt và có quyền tự bào chữa hoặc nhờ luật sư, tổ chức đại diện bào chữa; việc xử lý phải được lập thành biên bản; không áp dụng nhiều hình thức cho một hành vi.</p><p><strong>Trình tự cơ bản:</strong> lập biên bản vi phạm khi phát hiện; thông báo cuộc họp ít nhất 05 ngày làm việc trước; tổ chức họp có biên bản và chữ ký; ban hành quyết định xử lý trong thời hiệu.</p><p><strong>Tạm đình chỉ công việc</strong> không quá 15 ngày, trường hợp đặc biệt không quá 90 ngày, trong thời gian đó người lao động được tạm ứng 50% thu nhập cơ bản.</p><p class=\"note\">Khóa học chỉ mô tả nội dung văn bản. Hình thức kỷ luật cụ thể do cấp có thẩm quyền quyết định sau khi xem xét đầy đủ.</p>",
          src: "Điều 26, Điều 28, Điều 29, Điều 31"
        }
      ],
      quiz: {
        id: "M7-Q",
        questions: [
          {
            text: "Theo Điều 25, nhóm lỗi L3 tương ứng với hình thức xử lý nào?",
            options: ["Khiển trách", "Kéo dài thời hạn nâng lương không quá 06 tháng", "Cách chức", "Sa thải"],
            answer: 1,
            ok: "Đúng, Điều 25 khoản 1b.",
            no: "Điều 25 khoản 1b: nhóm lỗi L3 tương ứng với kéo dài thời hạn nâng lương không quá 06 tháng."
          },
          {
            text: "Hành vi thuộc nhóm lỗi L1 được xử lý như thế nào?",
            options: ["Sa thải ngay", "Không áp dụng xử lý KLLĐ theo khoản 1 nhưng bị nhắc nhở nội bộ", "Không ghi nhận gì", "Chỉ khiển trách bằng lời"],
            answer: 1,
            ok: "Đúng, Điều 25 khoản 2 quy định nhắc nhở nội bộ và theo dõi.",
            no: "Điều 25 khoản 2: nhóm L1 không áp dụng xử lý KLLĐ nhưng bị nhắc nhở nội bộ và được theo dõi."
          }
        ]
      }
    },

    /* ---------------- MODULE 8 ---------------- */
    {
      id: "M8",
      title: "Trách nhiệm vật chất và tổng kết",
      screens: [
        {
          id: "M8-S01", type: "text", title: "Trách nhiệm vật chất khác kỷ luật",
          html: "<p>Trách nhiệm vật chất là nội dung riêng với kỷ luật lao động. Khi làm hư hỏng, mất dụng cụ, thiết bị hoặc tài sản của Sun Group, người lao động được yêu cầu tường trình bằng văn bản và việc bồi thường được xử lý theo trình tự riêng.</p><ul><li>Cuộc họp xử lý bồi thường thông báo trước ít nhất 05 ngày làm việc.</li><li>Quyết định xử lý bồi thường phải được ban hành trong thời hiệu 06 tháng.</li><li>Các trường hợp bồi thường khác thực hiện theo Bộ luật Dân sự.</li></ul>",
          src: "Điều 32 khoản 1–2; Điều 33 khoản 1, 4, 5"
        },
        {
          id: "M8-S02", type: "text", title: "Mức và điều kiện bồi thường",
          html: "<ul><li>Thiệt hại không nghiêm trọng do sơ suất, giá trị không quá 10 tháng lương tối thiểu vùng: bồi thường nhiều nhất 03 tháng thu nhập cơ bản; khấu trừ tối đa 30% thu nhập cơ bản hằng tháng.</li><li>Thiệt hại do thiên tai, hỏa hoạn, dịch bệnh nguy hiểm, thảm họa và các sự kiện bất khả kháng không thể lường trước: không phải bồi thường nếu đã áp dụng mọi biện pháp cần thiết.</li><li>Nếu nghỉ việc khi chưa bồi thường xong, phần còn lại được thanh toán trước khi chính thức nghỉ việc.</li></ul>",
          src: "Điều 32 khoản 1, 2c, 3",
          verify: true
        },
        {
          id: "M8-S03", type: "text", title: "5 điều cần nhớ",
          html: "<ol><li>Hiểu phạm vi và đối tượng áp dụng của Nội quy.</li><li>Tuân thủ thời giờ làm việc, quy trình và văn bản nội bộ.</li><li>Nhận diện hành vi ứng xử, tài sản, bảo mật, an toàn và quấy rối tình dục.</li><li>Phân biệt nhóm lỗi, hình thức kỷ luật và trách nhiệm vật chất.</li><li>Không tự kết luận mức kỷ luật; việc xử lý phải theo đúng nguyên tắc và trình tự.</li></ol>",
          src: "Tổng hợp các module 1–8"
        }
      ],
      quiz: {
        id: "M8-Q",
        questions: [
          {
            text: "Nhận định nào phù hợp nhất về kỷ luật lao động và trách nhiệm vật chất?",
            options: ["Hai nội dung giống hệt nhau", "Hai nội dung cần được xem xét theo quy định tương ứng", "Luôn phát sinh đồng thời", "Chỉ áp dụng khi có tài sản bị mất"],
            answer: 1,
            ok: "Đúng. Mỗi nội dung có căn cứ và trình tự riêng trong Nội quy.",
            no: "Nội quy quy định kỷ luật lao động và trách nhiệm vật chất là hai nội dung riêng, xem xét theo quy định tương ứng."
          },
          {
            text: "Thiệt hại không nghiêm trọng do sơ suất, giá trị không quá 10 tháng lương tối thiểu vùng: người lao động phải bồi thường nhiều nhất là bao nhiêu?",
            options: ["01 tháng thu nhập cơ bản", "03 tháng thu nhập cơ bản", "06 tháng thu nhập cơ bản", "Toàn bộ thiệt hại"],
            answer: 1,
            ok: "Đúng, Điều 32 khoản 1 quy định tối đa 03 tháng thu nhập cơ bản.",
            no: "Điều 32 khoản 1: bồi thường nhiều nhất 03 tháng thu nhập cơ bản trong trường hợp này."
          }
        ]
      }
    }
  ],
/* ---------------- MODULE 9 ---------------- */
  {
  "id": "M9",
  "title": "Phụ lục 01: Hành vi vi phạm theo nhóm lỗi",
  "description": "Danh sách đầy đủ 143 hành vi vi phạm kỷ luật lao động phân theo 5 nhóm lỗi (L1-L5). Mỗi nhóm thể hiện mức độ nghiêm trọng khác nhau.",
  "screens": [
    {
      "id": "M9-S01",
      "type": "text",
      "title": "Nhóm lỗi L1: Nhắc nhở nội bộ (23 hành vi)",
      "html": "<p><strong>Mức độ:</strong> Nhẹ nhất</p><p><strong>Xử lý:</strong> Không áp dụng xử lý kỷ luật lao động theo Điều 25 nhưng bị nhắc nhở nội bộ và theo dõi</p><p><strong>Các hành vi L1 bao gồm:</strong></p><ol><li>Không mặc trang phục/đồng phục phù hợp theo quy định</li><li>Đi muộn, về sớm dưới 30 phút/lần (&lt;03 lần/tháng)</li><li>Kéo dài thời gian ăn trưa/nghỉ dưới 30 phút</li><li>Ra ngoài trong giờ làm việc dưới 30 phút</li><li>Không tham gia hoặc muộn các buổi họp nội bộ dưới 30 phút</li><li>Không sắp xếp nơi làm việc (vệ sinh, tài liệu)</li><li>Tụ tập ăn uống, vui chơi trong giờ</li><li>Sai sót bất cẩn trong công việc (chưa gây hậu quả)</li><li>Phát ngôn về Sun Group không chuẩn mực</li><li>Bình luận về vấn đề nội bộ trên mạng xã hội</li><li>Không tuân thủ quy định phát ngôn (chưa gây hậu quả)</li><li>Thiếu trách nhiệm bảo vệ tài sản</li><li>Sử dụng tài sản khi chưa được phép (chưa gây ảnh hưởng)</li><li>Sử dụng máy móc/thiết bị của phòng ban khác</li><li>Làm cản trở hoạt động thiết bị chung (chưa gây hậu quả)</li><li>Tự ý dịch chuyển thiết bị/biển báo</li><li>Bình luận/đùa giỡn về tình dục gây khó chịu</li><li>Nhận xét không phù hợp với ngụ ý tình dục</li><li>Hỏi những câu nhạy cảm về tình dục</li><li>Dùng tiếng động/cử chỉ mời gọi</li><li>Nhìn chằm chằm vào bộ phận tế nhị</li></ol><hr/><p><em>📌 Xem file Phụ lục 01 gốc để danh sách đầy đủ và chi tiết từng hành vi</em></p>",
      "src": "Phụ lục 01, Nhóm lỗi L1 (23 hành vi)"
    },
    {
      "id": "M9-S02",
      "type": "text",
      "title": "Nhóm lỗi L2: Khiển trách (~45 hành vi)",
      "html": "<p><strong>Mức độ:</strong> Vừa phải</p><p><strong>Xử lý:</strong> Khiển trách (kỷ luật mức L2)</p><p><strong>Các hành vi L2 bao gồm:</strong></p><ul><li>Xúc phạm danh dự/nhân phẩm đồng nghiệp</li><li>Gây mất đoàn kết nội bộ (kích động, chia bè phái)</li><li>Lợi dụng chức vụ để gây áp lực, thiên vị</li><li>Đi muộn/về sớm 30-60 phút (L2) hoặc vượt 01-03 lần/tháng</li><li>Kéo dài thời gian ăn/nghỉ từ 30 phút trở lên</li><li>Ra ngoài 30+ phút mà chưa được phép</li><li>Sử dụng thời gian làm việc cho công việc cá nhân</li><li>Không tham gia hoặc muộn các buổi họp (30+ phút)</li><li>Ngủ gật, thiếu tập trung trong giờ</li><li>Uống bia rượu trong giờ làm việc</li><li>Không phối hợp công việc, không báo cao kịp thời</li><li>Phát hiện lỗi nhưng không báo cáo</li><li>Không tuân thủ quy trình/quy định</li><li>Không cung cấp thông tin đầy đủ</li><li>Không phối hợp với đơn vị khác</li><li>Cung cấp thông tin nội bộ trong phạm vi hạn chế</li><li>Đăng tải thông tin tiêu cực (chưa rộng rãi)</li><li>Vi phạm ứng xử với khách hàng</li><li>Không báo cáo xung đột lợi ích</li><li>Không kiểm kê, bàn giao tài sản đầy đủ</li><li>Không kịp thời báo cáo mất an toàn</li><li>Mang tài sản ra khỏi công ty khi chưa được phép</li><li>Sử dụng tài sản Sun Group sai mục đích (chưa gây thiệt hại lớn)</li><li>Tiết lộ thông tin bảo mật (chưa gây thiệt hại)</li><li>Sửa đổi tài liệu không được phép</li><li>Thay đổi góc quay camera, làm che chắn</li><li>Không tuân thủ quy định thư điện tử</li><li>Thực hiện phỏng vấn với cơ quan truyền thông không được phép</li><li>Không tuân thủ quy định phòng chống cháy nổ</li><li>Không sử dụng thiết bị bảo hộ lao động đúng</li><li>Tự ý sử dụng máy móc không được phép</li><li>Để bản thân/người khác vào tình trạng nguy hiểm</li><li>Tố cáo QRTD sai sự thật</li><li>Phô bày tài liệu khiêu dâm</li><li>Vi phạm từ lần thứ 3 trở lên các hành vi L1 trong 30 ngày</li></ul><hr/><p><em>📌 Xem file Phụ lục 01 gốc để danh sách đầy đủ</em></p>",
      "src": "Phụ lục 01, Nhóm lỗi L2 (khoảng 45 hành vi)"
    },
    {
      "id": "M9-S03",
      "type": "text",
      "title": "Nhóm lỗi L3: Kéo dài nâng lương (~35 hành vi)",
      "html": "<p><strong>Mức độ:</strong> Nghiêm trọng</p><p><strong>Xử lý:</strong> Kéo dài thời hạn nâng lương không quá 06 tháng</p><p><strong>Các hành vi L3 bao gồm:</strong></p><ul><li>Đi muộn/về sớm vượt quá 04 lần/tháng</li><li>Tự ý nghỉ việc 03-09 ngày/30 ngày hoặc 10-19 ngày/365 ngày</li><li>Ngủ gục trong giờ làm việc (có nguy cơ)</li><li>Hút thuốc lá/thuốc lào/chất gây nghiện</li><li>Gây gỗ, cãi lộn, chửi tục</li><li>Phát hiện lỗi nghiêm trọng nhưng không báo</li><li>Lạm dụng chức vụ vượt thẩm quyền</li><li>Thái độ chống đối lệnh chỉ đạo</li><li>Quản lý không hoàn thành nhiệm vụ</li><li>Dẫn tới cấp dưới vi phạm L3/L4</li><li>Cung cấp thông tin sai sự thật xuyên tạc về Sun Group</li><li>Công khai thông tin nội bộ trên MXH</li><li>Tranh cãi/quát nạt khách hàng</li><li>Không trung thực về lý lịch/tình trạng sức khỏe</li><li>Không trung thực tự đánh giá công việc</li><li>Dung túng bao che gian lận</li><li>Gợi ý/dọa nạt khách hàng để xin tiền</li><li>Vay mượn tiền khách hàng</li><li>Sử dụng trái phép tài sản gây thiệt hại</li><li>Làm mất/hư hỏng tài sản/dữ liệu</li><li>Làm sai lệch thông tin tài sản</li><li>Làm lộ thông tin bảo mật do bất cẩn</li><li>Không khắc phục/báo cáo kịp thời nguy cơ tai nạn</li><li>Không tham gia cấp cứu tai nạn lao động</li><li>Không báo cáo tai nạn lao động kịp thời</li><li>Bình luận xúc phạm về tình dục</li><li>Yêu cầu người khác gửi hình ảnh nhạy cảm</li><li>Liên tục gửi lời mời mang tính cá nhân</li><li>Vi phạm kỷ luật khiển trách mà tái phạm</li></ul><hr/><p><em>📌 Xem file Phụ lục 01 gốc để danh sách đầy đủ</em></p>",
      "src": "Phụ lục 01, Nhóm lỗi L3 (khoảng 35 hành vi)"
    },
    {
      "id": "M9-S04",
      "type": "text",
      "title": "Nhóm lỗi L4: Cách chức (~25 hành vi)",
      "html": "<p><strong>Mức độ:</strong> Rất nghiêm trọng</p><p><strong>Xử lý:</strong> Cách chức (hạ chức hoặc xóa danh sách cán bộ quản lý)</p><p><strong>Các hành vi L4 bao gồm:</strong></p><ul><li>Tự ý bỏ việc 03-09 ngày/30 ngày hoặc 10-19 ngày/365 ngày</li><li>Tổ chức/tham gia đình công bất hợp pháp</li><li>Truyền bá tài liệu/phim ảnh bị pháp luật nghiêm cấm</li><li>Quản lý không hoàn thành nhiệm vụ → cấp dưới vi phạm L5</li><li>Xúc phạm, vu khống, bịa đặt uy tín Sun Group</li><li>Sử dụng tên/thương hiệu Sun Group trái phép</li><li>Mạo danh đại diện Sun Group</li><li>Xúc phạm giá trị văn hóa Sun Group</li><li>Hăm dọa, đe dọa dùng vũ lực</li><li>Tạo ảnh hưởng để Sun Group hợp tác với công ty liên quan</li><li>Vi phạm quy định quản lý xung đột lợi ích</li><li>Gian lận về thời gian/kết quả làm việc</li><li>Gian lận trong thi cử và tuyển dụng</li><li>Gian lận khen thưởng/đánh giá</li><li>Gian lận thanh quyết toán/giao dịch tài chính</li><li>Giả mạo chữ ký/con dấu/tài liệu</li><li>Cung cấp thông tin sai lệch trong báo cáo</li><li>Nhận khoản tiền khách hàng không báo cáo trong 24h</li><li>Tham gia hoạt động cạnh tranh bất hợp pháp</li><li>Thông đồng với khách hàng gây thiệt hại</li><li>Sử dụng tên Sun Group để trục lợi cá nhân</li><li>Cố ý hủy hoại tài sản</li><li>Lợi dụng quản lý tài sản để trục lợi</li><li>Gây thiệt hại đặc biệt nghiêm trọng cho tài sản</li><li>Xâm nhập vào khu vực cấm/cơ sở dữ liệu</li><li>Mang/chứa chấp vũ khí/vật cấm vào công ty</li><li>Tiếp xúc động chạm gây khó chịu</li><li>Hỗ trợ người khác vi phạm L5</li><li>Trả thù/trù dập người tố cáo</li></ul><hr/><p><em>📌 Xem file Phụ lục 01 gốc để danh sách đầy đủ</em></p>",
      "src": "Phụ lục 01, Nhóm lỗi L4 (khoảng 25 hành vi)"
    },
    {
      "id": "M9-S05",
      "type": "text",
      "title": "Nhóm lỗi L5: Sa thải (10 hành vi)",
      "html": "<p><strong>Mức độ:</strong> Đặc biệt nghiêm trọng</p><p><strong>Xử lý:</strong> Sa thải (chấm dứt hợp đồng lao động)</p><p><strong>Các hành vi L5 bao gồm:</strong></p><ol><li>Tự ý bỏ việc 05+ ngày/30 ngày hoặc 20+ ngày/365 ngày</li><li>Trộm cắp, tham ô, đánh bạc, sử dụng ma túy tại nơi làm việc</li><li>Lợi dụng chức vụ để trộm cắp/tham nhũng tài sản/bí mật kinh doanh</li><li>Gây thiệt hại đặc biệt nghiêm trọng cho Sun Group/khách hàng</li><li>Tiết lộ bí mật kinh doanh/công nghệ gây thiệt hại</li><li>Gạ gẫm quan hệ tình dục với điều kiện công việc/thăng tiến</li><li>Tấn công tình dục/cưỡng dâm/hiếp dâm</li><li>Vi phạm kỷ luật L3 hoặc L4 mà tái phạm</li><li>Các hành vi vi phạm khác gây thiệt hại >20 tháng lương tối thiểu vùng</li></ol><hr/><p><em>📌 Xem file Phụ lục 01 gốc để danh sách đầy đủ chi tiết mỗi hành vi</em></p>",
      "src": "Phụ lục 01, Nhóm lỗi L5 (khoảng 10 hành vi)"
    }
  ],
  "quiz": {
    "id": "M9-Q",
    "questions": [
      {
        "text": "Nhân viên không mặc trang phục đúng quy định. Đây là hành vi L1. Hình thức xử lý là gì?",
        "options": [
          "Không áp dụng xử lý kỷ luật, chỉ nhắc nhở nội bộ",
          "Khiển trách (L2)",
          "Kéo dài nâng lương (L3)",
          "Cách chức (L4)"
        ],
        "answer": 0,
        "ok": "Đúng. L1 không áp dụng xử lý kỷ luật lao động theo Điều 25 nhưng bị nhắc nhở nội bộ.",
        "no": "Nhóm L1 được nhắc nhở nội bộ, không áp dụng xử lý kỷ luật lao động chính thức."
      },
      {
        "text": "Nhân viên đi muộn 45 phút. Nếu chưa vượt quá số lần cho phép, đây là hành vi nào?",
        "options": [
          "L1",
          "L2",
          "L3",
          "L4"
        ],
        "answer": 1,
        "ok": "Đúng. Đi muộn từ 30 phút trở lên (nhưng <60 phút) là L2.",
        "no": "Đi muộn 30-60 phút là hành vi L2 (Khiển trách)."
      },
      {
        "text": "Nhân viên hút thuốc trong giờ làm việc tại khu vực công cộng. Đây là hành vi nào?",
        "options": [
          "L1",
          "L2",
          "L3",
          "L4"
        ],
        "answer": 2,
        "ok": "Đúng. Hút thuốc là hành vi L3 gây ảnh hưởng đến vệ sinh và an toàn.",
        "no": "Hút thuốc là hành vi L3 (Kéo dài nâng lương không quá 6 tháng)."
      },
      {
        "text": "Nhân viên giả mạo chữ ký, con dấu trên tài liệu công ty. Đây là hành vi nào?",
        "options": [
          "L2 - Khiển trách",
          "L3 - Kéo dài nâng lương",
          "L4 - Cách chức",
          "L5 - Sa thải"
        ],
        "answer": 2,
        "ok": "Đúng. Giả mạo chữ ký/con dấu là hành vi L4 (Cách chức).",
        "no": "Giả mạo là hành vi L4 vì đe dọa uy tín công ty và có thể gây hậu quả pháp lý."
      },
      {
        "text": "Nhân viên tiết lộ bí mật kinh doanh cho đối thủ cạnh tranh gây thiệt hại lớn. Hành vi này được xử lý như thế nào?",
        "options": [
          "L3 - Kéo dài nâng lương",
          "L4 - Cách chức",
          "L5 - Sa thải",
          "Phạt tiền"
        ],
        "answer": 2,
        "ok": "Đúng. Tiết lộ bí mật kinh doanh gây thiệt hại lớn là L5 (Sa thải).",
        "no": "Tiết lộ bí mật kinh doanh là hành vi L5 - hình thức xử lý cao nhất là Sa thải."
      }
    ]
  }
}
  /* Bài đánh giá cuối khóa: 9 câu, không trùng với câu trong bài kiểm tra từng module. */
  final: {
    id: "FINAL",
    title: "Bài đánh giá cuối khóa",
    questions: [
      {
        text: "Nội quy lao động áp dụng cho đối tượng nào?",
        options: ["Chỉ cán bộ quản lý", "Toàn thể người lao động làm việc tại Sun Group, không phân biệt loại hợp đồng", "Chỉ người có hợp đồng không xác định thời hạn", "Chỉ người làm việc tại văn phòng"],
        answer: 1,
        ok: "Đúng, theo Điều 2 khoản 1.",
        no: "Điều 2 khoản 1: áp dụng cho toàn thể người lao động, không phân biệt loại hợp đồng."
      },
      {
        text: "Nghỉ không có lý do chính đáng được hiểu là gì?",
        options: ["Nghỉ việc riêng có hưởng lương", "Không có mặt tại nơi làm việc khi chưa có sự đồng ý của người quản lý trực tiếp", "Nghỉ phép năm đã đăng ký", "Nghỉ ốm có xác nhận của cơ sở khám chữa bệnh"],
        answer: 1,
        ok: "Đúng, theo Điều 6 khoản 9a.",
        no: "Điều 6 khoản 9a: không có mặt khi chưa được người quản lý trực tiếp đồng ý là nghỉ không có lý do chính đáng."
      },
      {
        text: "Theo Điều 10 khoản 8, hành vi nào không được thực hiện?",
        options: ["Hỏi đối tác về tiến độ hợp đồng", "Gợi ý, yêu cầu hoặc nhận tiền, quà tặng, lợi ích cá nhân từ khách hàng, đối tác trái quy định", "Tiếp đón khách đúng kế hoạch", "Giải đáp thắc mắc của khách hàng"],
        answer: 1,
        ok: "Đúng, Điều 10 khoản 8 nghiêm cấm hành vi này.",
        no: "Điều 10 khoản 8: không gợi ý, yêu cầu hoặc nhận tiền, quà tặng, lợi ích cá nhân trái quy định."
      },
      {
        text: "Mang tài sản, thiết bị, tài liệu ra khỏi phạm vi quản lý của Sun Group cần điều kiện gì?",
        options: ["Tự quyết định nếu việc đó phục vụ công việc", "Được cấp có thẩm quyền cho phép và thực hiện đầy đủ thủ tục theo quy định", "Chỉ cần báo đồng nghiệp", "Không cần làm gì nếu mang về trong ngày"],
        answer: 1,
        ok: "Đúng, theo Điều 11 khoản 7.",
        no: "Điều 11 khoản 7: phải được cấp có thẩm quyền cho phép và thực hiện đầy đủ thủ tục."
      },
      {
        text: "Theo Điều 18, hành vi quấy rối tình dục có thể được thể hiện dưới dạng nào?",
        options: ["Chỉ bằng hành vi tiếp xúc cơ thể", "Thể chất, lời nói và phi lời nói", "Chỉ bằng tin nhắn", "Chỉ khi có khiếu nại chính thức"],
        answer: 1,
        ok: "Đúng, theo Điều 18 khoản 1.",
        no: "Điều 18 khoản 1 nêu ba nhóm: thể chất, lời nói và phi lời nói."
      },
      {
        text: "Theo Điều 23 khoản 2, chuyển người lao động làm công việc khác quá 60 ngày làm việc cộng dồn trong 01 năm cần điều kiện nào?",
        options: ["Thông báo bằng miệng với tổ trưởng", "Thông báo trước 03 ngày làm việc", "Người lao động đồng ý bằng văn bản", "Không cần điều kiện nào"],
        answer: 2,
        ok: "Đúng, theo Điều 23 khoản 2b.",
        no: "Điều 23 khoản 2b: vượt 60 ngày làm việc cộng dồn chỉ thực hiện khi người lao động đồng ý bằng văn bản."
      },
      {
        text: "Theo Điều 25, nhóm lỗi L4 tương ứng với hình thức xử lý nào?",
        options: ["Khiển trách", "Kéo dài thời hạn nâng lương không quá 06 tháng", "Cách chức", "Sa thải"],
        answer: 2,
        ok: "Đúng, theo Điều 25 khoản 1c.",
        no: "Điều 25 khoản 1c: nhóm lỗi L4 tương ứng với cách chức."
      },
      {
        text: "Theo Điều 27, thời hiệu xử lý kỷ luật thông thường là bao lâu kể từ ngày xảy ra hành vi vi phạm?",
        options: ["03 tháng", "06 tháng", "12 tháng", "24 tháng"],
        answer: 1,
        ok: "Đúng, theo Điều 27 khoản 1.",
        no: "Điều 27 khoản 1: thời hiệu thông thường là 06 tháng; 12 tháng áp dụng cho một số trường hợp liên quan trực tiếp đến tài chính, tài sản, bí mật."
      },
      {
        text: "Theo Điều 26 khoản 1, người sử dụng lao động có trách nhiệm gì khi xử lý kỷ luật?",
        options: ["Chứng minh được lỗi của người lao động", "Yêu cầu người lao động tự chứng minh mình không có lỗi", "Không cần lập biên bản", "Áp dụng đồng thời nhiều hình thức xử lý"],
        answer: 0,
        ok: "Đúng, theo Điều 26 khoản 1a.",
        no: "Điều 26 khoản 1a: người sử dụng lao động phải chứng minh được lỗi; việc xử lý phải được lập thành biên bản."
      }
    ]
  }
};
if (typeof module !== "undefined" && module.exports) {
  module.exports = COURSE;
}
