<template>
  <div class="title mt-5">
    <h2>DANH SÁCH SẢN PHẨM</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-3 ">
        <div class="main-item">
          <div class="cart-img">
            <img
              src="https://images.unsplash.com/photo-1663499482384-f9341d990e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lMTRwcm9tYXh8ZW58MHwwfDJ8fHwy"
              class="w-100 h-100 item-img" alt="..." />
          </div>
          <div class="border p-3">
            <h6 class="py-2">Pihone 14 Pro MaxPihone 14 Pro MaxPihone 14 Pro Max</h6>
            <div class="d-flex align-items-center">
              <h5 class="text-decoration-line-through text-danger">200.000đ</h5>
              <h6 class="pt-1 px-2">150.000đ</h6>
            </div>
            <div class="d-flex justify-content-between">
              <div class="item-star">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
              </div>
              <div>
                <p class="mb-0 p-0 m-0">Đã bán:12k</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<script setup>

</script>
<style scoped>
.cart-img {
  height: 280px;
}

.item-img {
  object-fit: cover;
}

.item-star i {
  font-size: 14px;
}

.title {
  text-align: center;
}

.main-item {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.item {
  margin: 0 10px 10px 0;
  width: calc(1 / 5 * 100% - (1 - 1 / 5) * 10px);
  background: #fff;
  box-shadow: 0 4px 6px #00000029;
  border-radius: 8px;
  text-align: center;
  position: relative;
}

.item img {
  width: 150px;
  margin: 30px auto 0 auto;
}

.item .cover {
  position: absolute;
  width: 100%;
  top: 100px;
}

a {
  text-decoration: none;
  color: black;
}

.card-detail {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
