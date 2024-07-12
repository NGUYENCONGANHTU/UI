<template>
  <div class="container">
    <h3 class="title-contact">Liên hệ</h3>
    <div class="row">
      <!-- ------------------ -->
      <form @submit.prevent="validateForm">
        <div class="col-lg-12">
          <div class="form-wrapper mb-40">
            <label for="email">Email*</label>
            <span class="wpcf7-form-control-wrap" data-name="text-858">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                id="email"
                aria-required="true"
                aria-invalid="false"
                v-model="model.email"
                type="text"
                name="text-858"
              />
            </span>
          </div>
        </div>
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
        <!-- ------------------------- -->
        <div class="col-lg-12 mt-4">
          <div class="form-wrapper">
            <label for="name">Họ tên*</label>
            <span class="wpcf7-form-control-wrap" data-name="text-858">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                id="name"
                aria-required="true"
                aria-invalid="false"
                v-model="model.name"
                type="text"
                name="text-858"
              />
            </span>
          </div>
        </div>
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
        <!-- ------------------------ -->
        <div class="col-lg-12 mt-4">
          <div class="form-wrapper">
            <label for="phone">Số điện thoại*</label>
            <span class="wpcf7-form-control-wrap" data-name="text-858">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                id="phone"
                aria-required="true"
                aria-invalid="false"
                v-model="model.phone"
                type="text"
                name="text-858"
              />
            </span>
          </div>
        </div>
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
        <!-- ------------------- -->
        <div class="col-lg-12">
          <div class="form-wrapper mt-4">
            <label for="content">Nội dung</label>
            <span class="wpcf7-form-control-wrap" data-name="textarea-27">
              <textarea
                cols="40"
                rows="10"
                class="text-area wpcf7-textarea"
                aria-invalid="false"
                v-model="model.content"
                name="textarea-27"
              ></textarea>
            </span>
          </div>
        </div>
        <span v-if="errors.content" class="error">{{ errors.content }}</span>

        <!-- ----------------------- -->
        <div class="col-lg-12 mt-4">
          <button class="btn btn-success">Gửi</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref, defineProps } from "vue"
import { useStore } from "vuex";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";

// declare store
const store = useStore();
 const router = useRouter();

const model = ref({
  name: "",
  phone: "",
  email: "",
  content: "",
});
const errors = ref({});

const validateForm = async () => {
  errors.value = {};

  // --------name----------
  if (!model.value.name) {
    errors.value.name = "* Vui lòng nhập họ tên !";
  } else if (model.value.name.length < 3) {
    errors.value.name = "Tên đăng nhập phải có ít nhất 3 ký tự.";
  }
  // -------email---------
  if (!model.value.email) {
    errors.value.email = "* Vui lòng nhập lại email !";
  } else if (model.value.email.length < 6) {
    errors.value.email = "Email phải có ít nhất 6 ký tự.";
  }
  // --------phone-----------
  if (!model.value.phone) {
    errors.value.phone = "* Vui lòng nhập lại số điện thoại !";
  } else if (model.value.phone.length <= 10) {
    errors.value.phone = "Số điện thoại phải có 10 số !";
  }
  // --------content-----------
  if (!model.value.content) {
    errors.value.content = "* Vui lòng nhập nội dung !";
  } else if (model.value.content.length <= 10) {
    errors.value.content = "Nội dung phải trên 10 kí tự";
  }

  if (Object.keys(errors.value).length === 0) {
    // Thực hiện hành động khi không có lỗi
    await store.dispatch("contact/createContact", model.value)
     router.push("/").then(() => {
      toast.success(
        `status: ${'200'}: Email: ${ model.value.email } đã phần hồi thành công, xin hay chờ phản hồi của hệ thống . Hệ thống cảm ơn khách hàng ${ model.value.name }  đã tin tưởng hệ thống !!`
      );
    });
    
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.title-contact {
  margin-bottom: 50px;
  color: #234567;
}
.form-wrapper {
  position: relative;
}
.form-wrapper label {
  position: absolute;
  top: -13px;
  left: 15px;
  background-color: white;
  font-size: 18px;
  font-weight: 400;
  color: black;
  text-transform: capitalize;
}
input {
  width: 100%;
  padding: 14px 20px;
  border: 1px solid #bdbaba;
  outline: none;
}
.text-area {
  width: 100%;
  height: 270px;
  outline: none;
  border: 1px solid #bdbaba;
  padding: 14px 20px;
}
.btn {
  padding: 8px 30px;
}
.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
}
</style>
