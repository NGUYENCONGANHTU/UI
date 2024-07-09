<template>
  <div class="container">
    <h3 class="title-contact">Liên hệ</h3>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-wrapper mb-5">
          <label for="name1">Họ tên*</label>
          <span class="wpcf7-form-control-wrap" data-name="text-858"
            ><input
              size="40"
              class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              id="name1"
              aria-required="true"
              aria-invalid="false"
              value=""
              type="text"
              name="text-858"
          /></span>
        </div>
      </div>
      <div class="col-lg-6 mb-5">
        <div class="form-wrapper mb-40">
          <label for="name1">Email*</label>
          <span class="wpcf7-form-control-wrap" data-name="text-858"
            ><input
              size="40"
              class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              id="name1"
              aria-required="true"
              aria-invalid="false"
              value=""
              type="text"
              name="text-858"
          /></span>
        </div>
      </div>
      <div class="col-lg-6 mb-5">
        <div class="form-wrapper mb-40">
          <label for="name1">Số điện thoại*</label>
          <span class="wpcf7-form-control-wrap" data-name="text-858"
            ><input
              size="40"
              class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              id="name1"
              aria-required="true"
              aria-invalid="false"
              value=""
              type="text"
              name="text-858"
          /></span>
        </div>
      </div>
      <div class="col-lg-6 mb-4">
        <div class="form-wrapper mb-4">
          <label for="name1">Chủ đề*</label>
          <span class="wpcf7-form-control-wrap" data-name="text-858"
            ><input
              size="40"
              class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              id="name1"
              aria-required="true"
              aria-invalid="false"
              value=""
              type="text"
              name="text-858"
          /></span>
        </div>
      </div>
      <div class="col-lg-12 mb-4">
        <div class="form-wrapper">
          <label for="Subject1">Nội dung</label>
          <span class="wpcf7-form-control-wrap" data-name="textarea-27">
            <textarea
              cols="40"
              rows="10"
              class="text-area wpcf7-textarea"
              aria-invalid="false"
              name="textarea-27"
            ></textarea>
          </span>
        </div>
      </div>
      <div class="col-lg-12">
        <button class="cta">
          <span>Gửi</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.container {
  margin-top: 20px;
}
.title-contact {
  margin-bottom: 50px;
  color: #234567;
}
.form-wrapper {
  position: relative;
}
.form-wrapper label {
  position: absolute;
  top: -13px;
  left: 15px;
  background-color: white;
  font-size: 18px;
  font-weight: 400;
  color: black;
  text-transform: capitalize;
}
input {
  width: 100%;
  padding: 14px 20px;
  border: 1px solid #bdbaba;
  outline: none;
}
.text-area {
  width: 100%;
  height: 270px;
  outline: none;
  border: 1px solid #bdbaba;
  padding: 14px 20px;
}
.cta {
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #b1dae7;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #234567;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #234567;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: #b1dae7;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active {
  transform: scale(0.95);
}
</style>
