<template>
  <div>
    <div
      class="form-conatainer d-flex flex-column flex-shrink-0 p-2"
      style="width: 280px; height: 100vh"
    >
      <div class="profile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCEKLkdCrzfCnIDSBcOdfCMwIkCArWqHlRA&s"
          class="avatar border-2"
          style="width: 70px; height: 70px"
          alt=""
        />
        <h5 class="title">Nguyễn Công Anh Tú</h5>
      </div>

      <hr />
      <ul class="nav nav-pills flex-column">
        <li class="nav-item active">
          <router-link class="nav-link" to="/infoContent">
            <h6>Thông tin người dùng</h6>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/orderContent">
            <h6>Đơn hàng</h6>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/shoppingContent">
            <h6>Giỏ hàng</h6>
          </router-link>
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<style scoped>
.form-conatainer {
  border: 2px solid rgb(199, 198, 198);
  background-color: #fef8f8;
}
.profile {
  text-align: center;
}
.avatar {
  border-radius: 50%;
}
.title {
  margin-top: 10px;
  color: black;
}
.text {
  margin: 0;
  color: black;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: white;
  background-color: #47ba87 !important;
}
.icon1 {
  margin-right: 0.5rem;
}
.nav-pills .nav-link {
  color: black;
}
.nav-item a.router-link-exact-active {
  background-color: #40b27f;
}
.nav-item a {
  display: flex;
  align-items: center;
}
.nav-link h6 {
  margin-bottom: 0;
  padding: 5px;
}
</style>
