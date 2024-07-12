<template>
  <div class="container">
    <div class="main">
      <h1>Đăng nhập</h1>
      <form @submit.prevent="userLogin" class="mt-4">
        <label for="first">Email:</label>
        <input
          type="text"
          id="first"
          class="mt-3"
          v-model="model.email"
          placeholder="Nhập tên email"
          required
        />

        <label for="password" class="mt-4">Nhập mật khẩu:</label>
        <input
          type="password"
          id="password"
          class="mt-3"
          placeholder="Nhập mật khẩu"
          v-model="model.password"
          required
        />

        <div class="wrap">
          <button type="submit">Đăng nhập</button>
        </div>
      </form>
      <p>
        Quên mật khẩu?
        <router-link to="/signupForm" style="text-decoration: none">
          Tạo tài khoản
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import {
  defineComponent,
  ref,
  reactive,
  watchEffect,
  toRefs,
  onMounted,
  computed,
} from "vue";

import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const route = useRoute();

const model = reactive({
  email:"",
  password: ""
});

const userLogin = async() => {
  try {
    await store.dispatch("auth/login", model)
      router.push("/").then(() => {
        toast.success(
          `status: ${'200'}: Đăng nhập tài khoản thành công !!`
        );
        setTimeout(() => {
          location.reload()
        },3000)
      });
  } catch (error) {
      toast.error(
        `status: ${'500'}: Đăng nhập tài khoản không công !!`
      );
  }
}

</script>

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

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
}
</style>
