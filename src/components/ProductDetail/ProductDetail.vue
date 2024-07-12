<template>
  <div class="container-fluid py-0">
    <div class="title"><h1>Chi tiết sản phẩm</h1></div>
    <div class="card d-flex flex-column justify-content-start">
      <div class="container">
        <div class="wrapper row">
          <div class="preview col-md-6">
            <div class="preview-pic tab-content">
              <div class="tab-pane active" id="pic-1">
                <img src="http://placekitten.com/400/252" />
              </div>
              <div class="tab-pane" id="pic-2">
                <img src="http://placekitten.com/400/252" />
              </div>
              <div class="tab-pane" id="pic-3">
                <img src="http://placekitten.com/400/252" />
              </div>
              <div class="tab-pane" id="pic-4">
                <img src="http://placekitten.com/400/252" />
              </div>
              <div class="tab-pane" id="pic-5">
                <img src="http://placekitten.com/400/252" />
              </div>
            </div>
            <ul class="preview-thumbnail nav nav-tabs">
              <li class="active">
                <a data-target="#pic-1" data-toggle="tab"
                  ><img src="http://placekitten.com/200/126"
                /></a>
              </li>
              <li>
                <a data-target="#pic-2" data-toggle="tab"
                  ><img src="http://placekitten.com/200/126"
                /></a>
              </li>
              <li>
                <a data-target="#pic-3" data-toggle="tab"
                  ><img src="http://placekitten.com/200/126"
                /></a>
              </li>
              <li>
                <a data-target="#pic-4" data-toggle="tab"
                  ><img src="http://placekitten.com/200/126"
                /></a>
              </li>
              <li>
                <a data-target="#pic-5" data-toggle="tab"
                  ><img src="http://placekitten.com/200/126"
                /></a>
              </li>
            </ul>
          </div>
          <div class="details col-md-6">
            <h3 class="product-title">
              Điện thoại Apple iPhone 15 Pro Max 256GB
            </h3>
            <div class="rating-star">
              <div class="rating">
                <input value="5" name="rate" id="star5" type="radio" />
                <label title="text" for="star5"></label>
                <input value="4" name="rate" id="star4" type="radio" />
                <label title="text" for="star4"></label>
                <input
                  value="3"
                  name="rate"
                  id="star3"
                  type="radio"
                  checked=""
                />
                <label title="text" for="star3"></label>
                <input value="2" name="rate" id="star2" type="radio" />
                <label title="text" for="star2"></label>
                <input value="1" name="rate" id="star1" type="radio" />
                <label title="text" for="star1"></label>
              </div>
              <br />
              <p class="review-no mt-3">41 Đánh giá</p>
            </div>
            <p class="product-description">
              Bộ sản phẩm bao gồm: • Điện thoại • Dây sạc • HDSD Bảo hành điện
              tử 12 tháng.
            </p>
            <h4 class="price">Giá hiện tại: <span>40000000 vnd</span></h4>
            <p class="vote">
              <strong>91%</strong> người mua đã thích sản phẩm này
              <strong>(87 đánh giá)</strong>
            </p>
            <div class="choice-rom d-flex flex-nowrap mt-2 mb-3">
              <h5 class="ram-rom">Dung lượng:</h5>
              <span class="box03 group desk">
                <a href="" data-index="0" class="box03__item item">128GB</a>
                <a href="" data-index="1" class="box03__item item">256GB</a>
                <a href="" data-index="2" class="box03__item item">512GB</a>
                <a href="" data-index="3" class="box03__item item act">1TB</a>
              </span>
            </div>
            <div class="choice-color">
              <div class="colors d-flex">
                <h5>Màu:</h5>
                <div class="color d-flex">
                  <a href="#" class="item color-gray"></a>
                  <a href="#" class="item color-white"></a>
                  <a href="#" class="item color-black"></a>
                  <a href="#" class="item color-gold"></a>
                </div>
              </div>
            </div>
            <div class="action">
              <button class="add-to-cart btn btn-default" type="button">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Globals */

img {
  max-width: 100%;
}

.preview {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px;
}
.preview-thumbnail.nav-tabs li {
  width: 18%;
  margin-right: 2.5%;
}
.preview-thumbnail.nav-tabs li img {
  max-width: 100%;
  display: block;
}
.preview-thumbnail.nav-tabs li a {
  padding: 0;
  margin: 0;
}
.preview-thumbnail.nav-tabs li:last-of-type {
  margin-right: 0;
}

.tab-content {
  overflow: hidden;
}
.tab-content img {
  width: 100%;
  animation-name: opacity;
  animation-duration: 0.3s;
}

.card {
  background: #eee;
  padding: 3em;
  line-height: 1.5em;
}

@media screen and (min-width: 997px) {
  .wrapper {
    display: flex;
  }
}

.details {
  display: flex;
  flex-direction: column;
}

.colors {
  flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors {
  text-transform: uppercase;
  font-weight: bold;
}

.checked,
.price span {
  color: #ff9f1a;
}

.product-title,
.product-description,
.price,
.vote,
.sizes {
  margin-bottom: 15px;
}

.product-title {
  margin-top: 0;
}

.size {
  margin-right: 10px;
}
.size:first-of-type {
  margin-left: 40px;
}

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px;
}
.color:first-of-type {
  margin-left: 20px;
}

.add-to-cart {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  transition: background 0.3s ease;
}
.add-to-cart:hover {
  background: #b36800;
  color: #fff;
}

.not-available {
  text-align: center;
  line-height: 2em;
}
.not-available:before {
  font-family: fontawesome;
  content: "\f00d";
  color: #fff;
}

.orange {
  background: #ff9f1a;
}

.green {
  background: #85ad00;
}
.ram-rom {
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 8px;
}
.item {
  margin-left: 20px;
}
.color-gray {
  background-color: gray;
  width: 50px;
  height: 20px;
}
.color-white {
  background-color: white;
  width: 50px;
  height: 20px;
}
.color-black {
  background-color: black;
  width: 50px;
  height: 20px;
}
.color-gold {
  background-color: gold;
  width: 50px;
  height: 20px;
}
.box03__item {
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  color: #333;
  display: inline-block;
  font-size: 13px;
  min-width: 67px;
  padding: 0 15px;
  text-align: center;
  margin-bottom: 5px;
  margin-right: 2px;
  vertical-align: top;
  height: 36px;
  line-height: 36px;
  position: relative;
  text-decoration: none;
  margin-left: 8px;
}
.blue {
  background: #0076ad;
}

.tooltip-inner {
  padding: 1.3em;
}

@keyframes opacity {
  0% {
    opacity: 0;
    transform: scale(3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Start Rating */
.rating:not(:checked) > input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 30px;
  color: #666;
}

.rating:not(:checked) > label:before {
  content: "★";
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ff9e0b;
}

.rating > input:checked ~ label {
  color: #ffa723;
}

.rating-star {
}
.rating {
  float: left;
}

/* Choice Color */
.choice-color {
  margin-top: 15px;
  margin-bottom: 20px;
}
.title {
  padding: 20px 10px 20px 20px;
  background-color: #9b9a9a;
}
</style>
