<template>
  <profile-layout
    ><div class="container-fluid px-0">
      <div class="title"><h6>Đơn hàng</h6></div>
      <div class="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Khách hàng</th>
              <th scope="col">Thành tiền</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anh Tú</td>
              <td>15000000</td>
              <td>Đã giao hàng</td>
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
</style>
