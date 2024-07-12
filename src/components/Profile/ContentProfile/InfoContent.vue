<template>
  <profile-layout>
    <div class="container-fluid px-0">
      <div class="title"><h6>Chỉnh sửa thông tin</h6></div>
      <div class="container d-flex justify-content-center">
        <div class="main">
          <form class="mt-4">
            <label for="first">Tên đăng nhập:</label>
            <input
              type="text"
              id="first"
              class="mt-3"
              placeholder="Nhập tên"
              required
            />
            <label for="first">Email:</label>
            <input
              type="email"
              id="first"
              class="mt-3"
              placeholder="Nhập email"
              required
            />
            <label for="password" class="mt-4">Mật khẩu hiện tại:</label>
            <input
              type="password"
              id="password"
              class="mt-3"
              placeholder="Nhập mật khẩu hiện tại"
              required
            />
            <label for="password" class="mt-4">Xác nhận mật khẩu:</label>
            <input
              type="password"
              id="password"
              class="mt-3"
              placeholder="Nhập mật khẩu hiện tại"
              required
            />

            <div class="wrap">
              <button type="submit">Tiếp tục</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </profile-layout>
</template>
<script setup>
import ProfileLayout from "@/layout/ProfileLayout.vue";
</script>
<style scoped>
.container-fluid {
  height: 100vh;
}
.title {
  background-color: #fef8f8;
  padding: 20px 20px;
  font-weight: 600;
}
.title h6 {
  font-size: 30px;
  margin-bottom: 0 !important;
}
.main {
  margin-top: 50px;
  border-radius: 5px;
  margin-left: 100px;
  padding: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 10px 20px;
  transition: transform 0.2s;
  width: 450px;
  text-align: center;
}

h1 {
  color: #4caf50;
}

label {
  display: block;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
  color: #555;
  font-weight: bold;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  padding: 15px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #40b27f;
  width: 100%;
  font-size: 16px;
}

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
}
</style>
