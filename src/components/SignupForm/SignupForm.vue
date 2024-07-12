<template>
  <div class="container">
    <div class="main">
      <h1>Đăng kí</h1>
      <form   @submit.prevent="userRegister" class="mt-4">
        <label for="first"> Nhập tên người dùng: </label>
        <input
          type="text"
          v-model="model.user_name"
          id="first"
          name="first"
          placeholder="Nhập tên người dùng"
          required
        />

        <label for="password" class="mt-4"> Nhập mật khẩu: </label>
        <input
          type="password"
          id="password"
          v-model="model.password"
          name="password"
          placeholder="Nhập mật khẩu"
          required
        />
        <label for="email" class="mt-4">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="model.email"
          placeholder="Nhập email"
          required
        />
        <label for="password" class="mt-4"> Số điện thoại: </label>
        <input
          type="text"
         v-model="model.phone_number"
          class="mt-3"
          name="phone_number"
          placeholder="Nhập số điện thoại"
          required
        />

        <div class="wrap">
          <button type="submit" >Đăng kí</button>
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
  user_name: "",
  phone_number: "",
  email:"",
  password: ""
});

const userRegister = async () => {
  await store.dispatch("auth/register", model)
   router.push("/loginForm").then(() => {
      toast.success(
        `status: ${'200'}: Tạo tài khoản người dùng thành công !!`
      );
    });
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
</style>
