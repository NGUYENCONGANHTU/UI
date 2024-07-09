<template>
  <div class="container">
    <h3 class="title">Thông Tin Liên Hệ</h3>
    <div class="row d-flex flex-column">
      <div class="col d-flex flex-nowrap">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-telephone-inbound-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"
            />
          </svg>
        </div>
        <div class="hotline">
          <h4>Liên hệ</h4>
          <p>
            (+84) 0974181682 <br />
            (+84) 0974181682
          </p>
        </div>
      </div>
      <hr />
      <div class="col d-flex flex-nowrap">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            />
          </svg>
        </div>

        <div class="hotline">
          <h4>Email</h4>
          <p>
            anhtu20020713@gmail.com <br />
            20200619@eaut.edu.vn
          </p>
        </div>
      </div>
      <hr />
      <div class="col d-flex flex-nowrap">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
            />
          </svg>
        </div>
        <div class="hotline">
          <h4>Địa chỉ</h4>
          <p>Di Trạch - Hoài Đức - Hà Nội</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.title {
  text-align: center;
  margin-top: 5px;
  color: #234567;
  margin-bottom: 40px;
}
.container {
  max-width: 400px;
  padding: 15px;
  height: auto;
}
.row {
  padding: 40px 45px 15px 15px;
  max-width: 350px;
  height: auto;
  background-color: #e74c3c;
  margin: auto;
}
.icon {
  max-height: 60px;
  padding: 14px;
  background-color: #ffd612;
}
.hotline {
  padding: 10px;
}
hr {
  width: 80%;
  margin: 20px auto;
}
</style>
