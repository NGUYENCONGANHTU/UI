<template>
  <div class="container-fluid">
    <div class="title">
      <h2>Các câu hỏi và câu trả lời</h2>
    </div>
    <div class="content-title mt-4">
      <h2>Câu hỏi thường gặp</h2>
    </div>
    <!-- --------------------------------------------------------- -->
    <div class="row mt-5">
      <div class="col-lg-6 col-sm-12 d-flex align-content-center">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Cửa Hàng Chúng Tôi Bán Những Sản Phẩm Điện Tử Nào ?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Chúng tôi cung cấp một loạt các sản phẩm smartphone đa dạng, bao
                gồm các thương hiệu xu hướng nhất và thịnh hành. Bạn có thể tìm
                thấy những thiết bị hàng đầu từ các thương hiệu uy tín trên toàn
                thế giới.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Làm Thế Nào Để Tìm Kiếm Sản Phẩm Phù Hợp Với Nhu Cầu?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Chúng tôi cung cấp công cụ tìm kiếm tiên tiến trên trang web của
                chúng tôi. Bạn có thể nhập từ khóa, lọc theo danh mục hoặc sử
                dụng các tiêu chí khác để thu hẹp phạm vi tìm kiếm. Ngoài ra,
                đội ngũ nhân viên chuyên nghiệp của chúng tôi cũng sẽ sẵn lòng
                hỗ trợ bạn trong việc tìm kiếm sản phẩm phù hợp.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Chính Sách Bảo Hành Và Đổi Trả Của Chúng Tôi Như Thế Nào ?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Chúng tôi tuân thủ chính sách bảo hành và đổi trả theo quy định
                của nhà sản xuất và pháp luật hiện hành. Nếu bạn gặp vấn đề với
                sản phẩm, chúng tôi sẽ có hỗ trợ bạn trong việc yêu cầu bảo hành
                hoặc đổi trả theo quy trình chỉ định
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Làm Thế Nào Để Liên Hệ Với Dịch Vụ Khách Hàng Của Chúng Tôi ?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Bạn có thể liên hệ với dịch vụ khách hàng của chúng tôi qua số
                điện thoại, email hoặc qua trang liên hệ trên trang web của
                chúng tôi. Đội ngũ nhân viên chuyên nghiệp và nhiệt tình sẽ sẵn
                sàng giải đáp mọi câu hỏi và hỗ trợ bạn trong quá trình mua sắm
                và sau khi mua hàng.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Có Phương Thức Thanh Toán Và Vận Chuyển Nào Chúng Tôi Hỗ Trợ ?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Chúng tôi hỗ trợ nhiều phương thức thanh toán an toàn và tiện
                lợi, bao gồm thanh toán qua thẻ tín dụng, chuyển khoản ngân hàng
                và các hình thức thanh toán trực tuyến phổ biến khác. Đối với
                vận chuyển, chúng tôi sử dụng các dịch vụ vận chuyển đáng tin
                cậy để đảm bảo sản phẩm được giao đến bạn một cách nhanh chóng
                và an toàn.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <img :src="imageone" class="rounded float-start" alt="..." />
      </div>
    </div>
  </div>
</template>
<script setup>
import imageone from "@/assets/ContentQuestions/imageone.avif";
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
* {
  font-family: "Montserrat";
}
.container-fluid {
  padding: 30px 15px 30px 40px;
  background-color: #f3f4f8;
}
.title {
  text-align: center;
}
.title h2 {
  font-size: 25px;
  color: rgb(183, 44, 44);
}
.content-title h2 {
  font-size: 40px;
  text-align: center;
}
.accordion-button:not(.collapsed) {
  background-color: rgb(248, 203, 211); /* Màu khi mở */
}
.accordion-item {
  margin-bottom: 35px; /* Thay đổi khoảng cách giữa các mục */
}
.accordion-body {
  font-size: 19px;
}
.accordion-button {
  font-size: 20px;
}
.col-lg-6 img {
  margin: 0 auto;
  margin-left: 150px;
}
</style>
