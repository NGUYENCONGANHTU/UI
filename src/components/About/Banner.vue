<template>
  <div class="container-fluid d-flex flex-nowrap">
    <div class="row">
      <div class="col-log-6 content">
        <h6 class="subtitle mb-20">Giới thiệu</h6>
        <h2 class="title mt-4">Những thiết bị công nghệ hàng đầu</h2>
        <p class="description mt-3">
          Chúng tôi tự hào giới thiệu đến bạn một trang web bán hàng trực tuyến
          chuyên về các sản phẩm điện tử, nơi bạn có thể tìm thấy những thiết bị
          công nghệ hàng đầu và đáng tin cậy. Với sứ mệnh mang đến cho khách
          hàng những trải nghiệm mua sắm tuyệt vời và sự hài lòng tuyệt đối,
          chúng tôi đã xây dựng một nền tảng mua sắm đáng tin cậy và tiện lợi.
        </p>
        <router-link class="btn btn-success mt-5">
          Xem Sản Phẩm
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              stroke-width="3"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </span>
        </router-link>
      </div>
      <div class="col-log-6 image">
        <img
          src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8169694_pngimg.com_-_iphone-14-PNG14.png"
          alt=""
          class="image-fluid"
          width="600px"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container-fluid {
  background-color: #f5f5f5;
  padding: 100px;
}
.content {
  width: 50%;
}
span {
  margin-left: 10px;
}
.btn {
  padding: 15px 30px;
}
.subtitle {
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 600;
  font-family: "Montserrat";
  line-height: 3rem;
  color: #e74c3c;
}
.title {
  font-family: "Montserrat";
  color: #121111;
  font-weight: bold;
  font-size: 3rem;
  line-height: 3rem;
}
.description {
  font-family: "Montserrat";
  font-weight: normal;
  line-height: 1.8rem;
  font-size: 23px;
}
.image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
