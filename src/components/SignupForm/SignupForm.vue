<template>
  <div class="container">
    <div class="main">
      <h1>Đăng kí</h1>
      <form action="" class="mt-4">
        <label for="first"> Nhập tên người dùng: </label>
        <input
          type="text"
          id="first"
          name="first"
          placeholder="Nhập tên người dùng"
          required
        />

        <label for="password" class="mt-4"> Nhập mật khẩu: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Nhập mật khẩu"
          required
        />
        <label for="email" class="mt-4">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Nhập email"
          required
        />
        <label for="password" class="mt-4"> Số điện thoại: </label>
        <input
          type="password"
          id="password"
          class="mt-3"
          name="password"
          placeholder="Nhập số điện thoại"
          required
        />

        <div class="wrap">
          <button type="submit" onclick="solve()">Đăng kí</button>
        </div>
      </form>
      <p>
        Quên mật khẩu?
        <router-link to="/loginForm" style="text-decoration: none">
          Đăng nhập
        </router-link>
      </p>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  padding: 10px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
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
  background-color: #4caf50;
  width: 100%;
  font-size: 16px;
}

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
