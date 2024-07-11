<template>
    <div class="container-fluid">
        <div class="container d-flex">
            <div class="produce text-white">
                <h2 class="titleText">{{  props.data?.name }}</h2>
                <p class="">
                   {{  props.data?.description  }}
                </p>
                <button class="btn btn-danger text-center border-1">View More</button>
            </div>
            <div class="produce-image">
                <img :src="props.url + '/' + props.data?.images" alt="error_img" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineEmits, ref, defineProps } from "vue"
const props = defineProps({
    data: { type: {}, required: true },
    url: { type:String,required:true }
})
</script>
<style scoped>
.container-fluid {
    margin-top: 10px;
    border: 1px solid;
    background-image: url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeo6kejU9KhUFqZNVpnlXPwm7HCTsyGLmzU4TXblgQ86Oid8_p");
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
}

.produce-image {
    position: absolute;
    right: 160px;
}

.produce-image img {
    height: 599px;
}

.produce {
    position: absolute;
    top: 240px;
    width: 50%;
}

.produce .titleText {
    font-size: 72px;
}

.produce p {
    font-size: 20px;
}
</style>