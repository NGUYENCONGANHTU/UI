<template>
  <div class="container-fluid">
    <div class="container">
      <div class="bill-check">
        <div class="title">
          <h2>Đặt hàng</h2>
        </div>
        <div class="d-flex flex-nowrap">
          <form action="">
            <label>
              <span class="name"
                >Họ và tên: <span class="required">*</span></span
              >
              <input type="text" name="fname" />
            </label>
            <label>
              <span class="phonenumber"
                >Số điện thoại <span class="required">*</span></span
              >
              <input type="text" name="number" />
            </label>
            <label>
              <span>Địa chỉ:</span>
              <input type="text" name="address" />
            </label>
            <label>
              <span>Địa chỉ cụ thể:</span>
              <input type="text" name="address" />
            </label>
          </form>
          <div class="Yorder">
            <table>
              <tr class="title-order">
                <th colspan="2">Đơn hàng của bạn</th>
              </tr>
              <tr>
                <td>Product Name x 2(Qty)</td>
                <td>$88.00</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>$88.00</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
            </table>
            <br />
            <button class="button" type="button">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
body {
  background: url("http://all4desktop.com/data_images/original/4236532-background-images.jpg");
  font-family: "Roboto Condensed", sans-serif;
  color: #262626;
  margin: 5% 0;
}

.container-fluid {
  border: 1px solid;
  width: 100%;
  height: auto;
  padding: 0;
}

.container {
  width: 100%;
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.bill-check {
  height: auto;
  border: 1px solid;
}

.title-order {
  text-align: center;
  font-weight: bold;
}

.title-order th {
  font-weight: bold;
  color: #6c6c67;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.d-flex {
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  border-radius: 0 0 5px 5px;
  padding: 25px;
}

form {
  flex: 4;
}

.Yorder {
  flex: 2;
  height: auto;
}

.title {
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(0, #5195a8),
    color-stop(100, #70eaff)
  );
  background: -moz-linear-gradient(top left, #5195a8 0%, #70eaff 100%);
  background: -ms-linear-gradient(top left, #5195a8 0%, #70eaff 100%);
  background: -o-linear-gradient(top left, #5195a8 0%, #70eaff 100%);
  background: linear-gradient(to bottom right, #5195a8 0%, #70eaff 100%);
  border-radius: 5px 5px 0 0;
  padding: 20px;
  color: #f6f6f6;
}

h2 {
  margin: 0;
  padding-left: 15px;
}

.required {
  color: red;
}

label,
table {
  display: block;
  margin: 15px;
}

label > span {
  float: left;
  width: 25%;
  margin-top: 12px;
  padding-right: 10px;
}

input[type="text"],
input[type="tel"],
input[type="email"],
select {
  width: 70%;
  height: 30px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #dadada;
  color: #888;
}

select {
  width: 72%;
  height: 45px;
  padding: 5px 10px;
  margin-bottom: 10px;
}

.Yorder {
  margin-top: 15px;
  height: 600px;
  padding: 20px;
  border: 1px solid #dadada;
}

table {
  margin: 0;
  padding: 0;
}

th {
  border-bottom: 1px solid #dadada;
  padding: 10px 0;
}

tr > td:nth-child(1) {
  text-align: left;
  color: #2d2d2a;
}

tr > td:nth-child(2) {
  text-align: right;
  color: #52ad9c;
}

td {
  border-bottom: 1px solid #dadada;
  padding: 25px 25px 25px 0;
}

p {
  display: block;
  color: #888;
  margin: 0;
  padding-left: 25px;
}

.Yorder > div {
  padding: 15px 0;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 30px;
  background: #52ad9c;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
}

button:hover {
  cursor: pointer;
  background: #428a7d;
}
</style>
