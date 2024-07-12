<template>
  <profile-layout
    ><div class="container-fluid px-0">
      <div class="title"><h6>Đơn hàng</h6></div>
      <div class="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Giá</th>
              <th scope="col">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class="image">
                <img
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTINL4T_sVLqeIEGWbgXiNLBv6A7ZDOaVdvGEntZGVgTcjMA1a6qntK0bC5aisboKHh9q_v5A4JAT-Jgn3LyvtIZ5a-drNxLvd3TY1FWBqD45BOBv-XBiOZDg&usqp=CAE"
                  alt=""
                />
              </td>
              <td>
                <h6>Iphone 13 ProMax</h6>
                <p>256Gb</p>
              </td>
              <td>1</td>
              <td>12000000</td>
              <td>12000000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </profile-layout>
</template>
<script setup>
import ProfileLayout from "@/layout/ProfileLayout.vue";
</script>

<style scoped>
.title {
  background-color: #fef8f8;
  padding: 20px 20px;
  font-weight: 600;
}
.title h6 {
  font-size: 30px;
  margin-bottom: 0 !important;
}
thead,
tbody {
  text-align: center;
}
.image img {
  width: 100px;
  height: 100px;
}
</style>
