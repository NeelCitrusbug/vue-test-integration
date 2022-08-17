<template>
    <div>
        <div class="cf_login_wrapper">
    <div class="cf_login_inner">
      <form @submit.prevent="handleOtp">
      <div class="cf_login_block cf_forgot_block">
        <div class="cf_login_logoBlock">
          <img src="../assets/images/logo2.svg" alt="Cafetra" class="img-fluid">
        </div>
        <h3>Please Enter OTP</h3>
        <span class="login_subline">Please check your Email, We have sent an OTP number.</span>
        <div class="cf_form_block">
          <input type="text" v-model="otpVal" placeholder="Enter OTP" class="cf_form_field">
          <span v-if="otpErr" className="response_message error">{{otpErr}}</span>
        </div>
        <div class="cf_form_block">
          <a href="javascript:;" @click="handleOtp" class="cf_btn">Submit</a>
        </div>
      </div>
      </form>
    </div>
  </div>
    </div>
</template>

<script>
import {isRequired,baseURL} from '../../src/Utils/index'
import {ref,watch} from 'vue'
import axios from "axios";
import router from "../routes";
    export default {
        name: 'OtpVerification',

        setup(){
          const otpVal = ref('')
          const otpErr = ref('')
          
          watch(otpVal,() => {
            otpErr.value = ''
          },{
                immediate:true,
                deep:true
            })

          function isFormValid(){
            let isValid = true;
            if (isRequired(otpVal.value)) {
              otpErr.value = "OTP is required"
              isValid = false;
            }
            return isValid;
          }

          function handleOtp(){
            console.log("submitted")

            if (isFormValid()) {
              axios
              .post(`${baseURL}/otp-verify/`, {
                otp: otpVal.value,
                unique_id: JSON.parse(localStorage.getItem("useruid")),
              })
              .then(function (response) {
                console.log("otp response",response.data.status, typeof response.data.status);
                if (response.data.status === true) {
                  localStorage.setItem("auth", JSON.stringify(response.data.data));
                  router.push({ name: "EditProfile" });
                }
                else{
                  otpErr.value = "OTP is invalid or expired"
                }
                
              })
              .catch(function (error) {
                if (error.response.status === 401) {
                  otpErr.value = "OTP is invalid or expired"
                } else {
                  otpErr.value = "Something went wrong"
                }
              });
            }
          }

          return {
            otpVal,
            otpErr,
            handleOtp
          }
        }
    }
</script>

<style scoped>
@import '../assets/CSS/login.css';
@import '../assets/CSS/custom.css';
</style>