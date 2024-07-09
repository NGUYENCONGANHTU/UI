<template>
  <div class="title mt-5">
    <h2>DANH SÁCH SẢN PHẨM</h2>
  </div>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
        <a href="" class="card-product">
          <div class="card" style="width: 20rem; height: auto">
            <img
              src="https://images.unsplash.com/photo-1663499482384-f9341d990e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lMTRwcm9tYXh8ZW58MHwwfDJ8fHwy"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">Pihone 14 Pro Max</h5>
              <p class="card-price text-center">14.000.000 Vnd</p>
              <p class="card-detail text-center">
                Bản 64G Màu xanh, cấu hình máy khủng do có chi tiết các chip
                hoạt động linh hoạt và sử dụng rất nhiều chi tiết khách
              </p>
              <div class="d-flex justify-content-around align-items-center">
                <a href="#" class="btn btn-success">Thêm giỏ hàng</a>
                <a href="#" class="btn btn-danger">Chi tiết sản phẩm</a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.title {
  text-align: center;
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
