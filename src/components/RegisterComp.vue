<template>
    <div>
        <div class="cf_login_wrapper">
    <div class="cf_login_inner">
      <form @submit.prevent="handleRegister">
      <div class="cf_login_block">
        <div class="cf_login_logoBlock">
          <img src="../assets/images/logo2.svg" alt="Cafetra" class="img-fluid">
        </div>
        <h3>Register your account</h3>
        <div class="cf_form_block">
          <input type="text" v-model="first_name" placeholder="First Name" class="cf_form_field">
          <span class="cf_icon cf_user"></span>
          <span className="response_message error" v-if="firstnameErr">{{firstnameErr}}</span>
        </div>
        <div class="cf_form_block">
          <input type="text" v-model="last_name" placeholder="Last Name" class="cf_form_field">
          <span class="cf_icon cf_user"></span>
          <span className="response_message error" v-if="lastnameErr">{{lastnameErr}}</span>
        </div>
        <div class="cf_form_block">
          <input type="text" v-model="phone" placeholder="Contact" class="cf_form_field">
          <span class="cf_icon cf_call"></span>
          <span className="response_message error" v-if="phoneErr">{{phoneErr}}</span>
        </div>
        <div class="cf_form_block">
          <input type="email" v-model="email" placeholder="Email" class="cf_form_field">
          <span class="cf_icon cf_mail_green"></span>
          <span className="response_message error" v-if="emailErr">{{emailErr}}</span>
        </div>
        <div class="cf_form_block">
          <input :type="[showPass1?'text':'password']" v-model="password" placeholder="Password" class="cf_form_field">
          <span @click="handlePassword1" :class="[showPass1?'cf_eye_green_close':'']" class="cf_icon cf_eye_green"></span>
          <span className="response_message error" v-if="passwordErr">{{passwordErr}}</span>
        </div>
        <div class="cf_form_block">
          <input :type="[showPass2?'text':'password']" v-model="password2" placeholder="Confirm Password" class="cf_form_field">
          <span @click="handlePassword2" :class="[showPass2?'cf_eye_green_close':'']" class="cf_icon cf_eye_green"></span>
          <span className="response_message error" v-if="password2Err">{{password2Err}}</span>
        </div>
        <div class="cf_form_block error" v-if="commonErr">
              <span className="response_message error">{{commonErr}}</span>
        </div>
        <div class="cf_form_block">
          <a href="javascript:;" @click="handleRegister" class="cf_btn">Register</a>
        </div>
        <p class="cf_redirect">Have an account? <router-link to="/login">Login</router-link></p>
      </div>
      </form>
    </div>
  </div>
    </div>
</template>

<script>
import {baseURL,isRequired,validateEmail,isPassword} from '../../src/Utils/index'
import {reactive,toRefs,ref,watch} from 'vue'
import axios from "axios";
import router from "../routes";
    export default {
        name: 'RegisterComp',
        setup(){

          const emailErr = ref('')
          const passwordErr = ref('')
          const password2Err = ref('')
          const commonErr = ref('')
          const firstnameErr = ref('')
          const lastnameErr = ref('')
          const phoneErr = ref('')

          const showPass1 = ref(false)
          const showPass2 = ref(false)

          const registerState = reactive({
            email:'',
            password:'',
            password2:'',
            first_name:'',
            last_name:'',
            phone:''
          });

          watch(() => {
                return {...registerState}
            },() => {
                emailErr.value = ""
                passwordErr.value = ""
                password2Err.value = ""
                commonErr.value = ""
                firstnameErr.value = ""
                lastnameErr.value = ""
                phoneErr.value = ""

            },{
                immediate:true,
                deep:true
            })

          function handlePassword1(){
            showPass1.value = !showPass1.value
          }

          function handlePassword2(){
            showPass2.value = !showPass2.value
          }

          function isFormValid () {
          let isValid = true;
          if (isRequired(registerState.email)) {
            emailErr.value = "Email Address is required"
            isValid = false;
          } else if (!validateEmail(registerState.email)) {
            emailErr.value = "Please enter a valid email address."
            isValid = false;
          }
          if (isRequired(registerState.password)) {
            passwordErr.value = "Password is required"
            isValid = false;
          } else if (!isPassword(registerState.password)) {
            passwordErr.value = "Your password must be at least 8 characters long, contain at least one number and special charecter and have a mixture of uppercase and lowercase letters."
            isValid = false;
          }
          if (isRequired(registerState.password2)) {
            password2Err.value = "Confirm password is required"
            isValid = false;
          } else if (registerState.password !== registerState.password2) {
            password2Err.value = "Password and confirm password does not match"
            isValid = false;
          }
          if (isRequired(registerState.first_name)) {
            firstnameErr.value = "First name is required"
            isValid = false;
          }
          if (isRequired(registerState.last_name)) {
            lastnameErr.value = "Last name is required"
            isValid = false;
          }
          if (isRequired(registerState.phone)) {
            phoneErr.value = "Phone number is required"
            isValid = false;
          }
          return isValid;
        }

          function handleRegister(){
            console.log("submitted")

            if (isFormValid()) {
              axios
              .post(
                `${baseURL}/signup/`,
                {
                  email: registerState.email,
                  password: registerState.password,
                  first_name: registerState.first_name,
                  last_name: registerState.last_name,
                  phone: registerState.phone,
                },
                { "Access-Control-Allow-Origin": "*" }
              )
              .then(function (response) {
                console.log("regitster res",response.data)
                if (response.data.status === true) {
                  localStorage.setItem(
                    "useruid",
                    JSON.stringify(response.data.data.userid)
                  );
                  router.push({ name: "Otp" });
                } else {
                  // setEmailAddressErr("User with this email address already exist");
                  commonErr.value = response.data.message
                }
              })
              .catch(function (error) {
                if (error.response.status === 401) {
                  commonErr.value = "You have entered an invalid username or password"
                } else {
                  commonErr.value = error.response.data.message
                }
              });
            }
          }

          return {
            ...toRefs(registerState),
            emailErr,
            passwordErr,
            password2Err,
            commonErr,
            firstnameErr,
            lastnameErr,
            phoneErr,
            handleRegister,
            showPass1,
            showPass2,
            handlePassword1,
            handlePassword2
          }
        }
    }
</script>

<style scoped>
@import '../assets/CSS/login.css';
@import '../assets/CSS/custom.css';
</style>