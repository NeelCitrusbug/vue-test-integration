<template>
    <div>
        <div class="cf_login_wrapper">
    <div class="cf_login_inner">
      <div class="cf_login_block">
        <form @submit.prevent="handleLogin">
        <div class="cf_login_logoBlock">
          <img src="../assets/images/logo2.svg" alt="Cafetra" class="img-fluid">
        </div>
        <h3>Log into your account</h3>
        <div class="cf_form_block success">
          <input type="email" v-model="email" placeholder="Enter Email" class="cf_form_field">
          <span class="cf_icon cf_mail_green"></span>
          <span class="response_message error" v-if="emailErr">{{ emailErr }}</span>
        </div>
        <div class="cf_form_block success">
          <input type="password" v-model="password" placeholder="Enter Password" class="cf_form_field">
          <span class="cf_icon cf_eye_green"></span>
          <span class="response_message error" v-if="passwordErr">{{ passwordErr }}</span>
        </div>
        <div class="cf_form_block">
          <div class="cf_flex_box">
            <div class="cf_remember_block">
              <input type="checkbox" name="remember_me" id="remember_me">
              <label for="remember_me">
                Remember me
              </label>
            </div>
            <div class="cf_forgot_block">
              <a href="forgot_password.html">Forgot Password?</a>
            </div>
          </div>
        </div>
        <div class="cf_form_block">
          <a href="javascript:;" type="button" @click="handleLogin" class="cf_btn">Login</a>
        </div>

        <div class="cf_form_block error" v-if="commonErr">
              <span className="response_message error">{{commonErr}}</span>
        </div>
        <p class="cf_redirect">Don't have an account? <router-link to="/register">Register now</router-link></p>
        </form>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import {baseURL,isRequired,validateEmail} from '../../src/Utils/index'
import {ref,watch,reactive,toRefs} from 'vue'
import axios from "axios";
import router from "../routes";
    export default {
        name: 'LoginComp',
        setup(){
          const loginState = reactive({
            email:'',
            password:''
          });

          

          const emailErr = ref('')
          const passwordErr = ref('')
          const commonErr = ref('')

          watch(() => {
                return {...loginState}
            },(newValue,oldValue) => {
                console.log("oldValue fName",oldValue?.email)
                console.log("newValue fName",newValue?.email)
                console.log("oldValue lName",oldValue?.password)
                console.log("newValue lName",newValue?.password)
                emailErr.value = ""
                passwordErr.value = ""
                commonErr.value = ""

            },{
                immediate:true,
            })

          function isFormValid(){
          let isValid = true;
          if (isRequired(loginState.email)) {
            emailErr.value = "Email Address is required"
            isValid = false;
          } else if (!validateEmail(loginState.email)) {
            emailErr.value = "Please enter a valid email address."
            isValid = false;
          }
          if (isRequired(loginState.password)) {
            passwordErr.value = "Password is required"
            isValid = false;
          }
          return isValid;
        }

          function handleLogin(){
            console.log("submitted")
            if (isFormValid()) {
              axios
              .post(
                `${baseURL}/login/`,
                loginState,
                { "Access-Control-Allow-Origin": "*" }
              )
              .then(function (response) {
                console.log("login res",response.data.data.userid)
                localStorage.setItem("useruid",
                JSON.stringify(response.data.data.userid)
                )
                router.push({ name: "Otp" });
              })
              .catch(function (error) {
                console.log("login err",error.response.data.message)
                if (error.response.status === 401) {
                  commonErr.value = "You have entered an invalid username or password"
                } else {
                  commonErr.value = error.response.data.message
                }
              });
            }
          }

          return {
            ...toRefs(loginState),
            emailErr,
            passwordErr,
            commonErr,
            handleLogin,
          }
        }
    }
</script>

<style scoped>
@import '../assets/CSS/login.css';
@import '../assets/CSS/custom.css';
</style>