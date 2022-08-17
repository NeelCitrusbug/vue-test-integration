<template>
    <div>
        <div class="cf_dashboard_main_wrapper" :class="[!$store.state.showSidebar?'sidebar_closed_main':'']">
            <SideBar/>

            <div class="cf_dashboard_middle_wrapper">
      <div class="cf_dashboard_header" :class="[!$store.state.showSidebar?'sidebar_closed':'']">
        <div @click="$store.commit('showSidebar')" class="sidebar_toggle">
          <span class="cf_icon cf_down"></span>
        </div>
        <div class="menu_toggle">
          <span class="cf_icon cf_bar"></span>
        </div>
        <div class="cf_dashboard_header_nav">
          <ul>
            <li><a href="javascript:;">Home</a></li>
            <li><a href="javascript:;">Products</a></li>
            <li><a href="javascript:;">About Us</a></li>
            <li><a href="javascript:;">Contact Us</a></li>
          </ul>
        </div>
        <div class="cf_dashboard_header_profile">
          <ul>
            <li><h5>John Doe</h5></li>
            <li>
              <div class="cf_header_profile_toggle">
                <a href="javascript:;"><img src="../assets/images/mini_profile.png" alt="profile"></a>
                <span class="cf_icon cf_down_black"></span>
                <ul>
                  <li>
                    <a href="javascript:;"><span class="cf_icon cf_edit"></span> My Profile</a>
                  </li>                  
                  <li>
                    <a href="javascript:;"><span class="cf_icon cf_bookmark"></span>My Preferences</a>
                  </li>
                  <li>
                    <a href="javascript:;"><span class="cf_icon cf_setting"></span>Subscriptions</a>
                  </li>
                <li>
                  <a href="javascript:;"><span class="cf_icon cf_phone"></span>Contact Account Manager</a>
                </li>                 
                  <li>
                    <a href="javascript:;" @click="logout" data-bs-toggle="modal" data-bs-target="#cf_logout"><span class="cf_icon cf_logout"></span>
                      Logout</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="cf_dashboard_middle_inner">
        <div class="cf_dashboard_content_wrapper">
          <h3 class="cf_page_heading">Edit Profile</h3>
          <div class="cf_dashboard_content_inner">
            <div class="cf_edit_profile_wrapper">
              <div class="cf_edit_profile_section">
                <h3 class="section_heading">General details</h3>
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>First Name</label>
                      <div class="cf_form_block"><input type="text" v-model="firstName" placeholder="Enter first name" class="cf_form_field"></div>
                    </div>
                    <span v-if="firstNameErr" className="response_message error">
                            {{firstNameErr}}
                    </span>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Last Name</label>
                      <div class="cf_form_block"><input type="text" v-model="lastName" placeholder="Enter last name" class="cf_form_field"></div>
                    </div>
                    <span v-if="lastNameErr" className="response_message error">
                            {{lastNameErr}}
                    </span>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>E-mail</label>
                      <div class="cf_form_block">
                        <input type="email" v-model="email" placeholder="Enter email" class="cf_form_field" disabled>
                        <span class="cf_icon cf_mail_green"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Company</label>
                      <div class="cf_form_block">
                        <input type="text" v-model="companyName" placeholder="Enter company name" class="cf_form_field">
                        <span class="cf_icon cf_suitcase"></span>
                      </div>
                    </div>
                    <span v-if="companyNameErr" className="response_message error">
                            {{companyNameErr}}
                    </span>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Role</label>
                      <div class="cf_form_block">
                        <select id="role" class="cf_form_field" v-model="companyRole">
                          <option :key="role.id" v-for="role in roleOptions" :value="role.id">{{ role.role }}</option>
                      </select>
                      </div>
                    </div>
                    <span v-if="companyRoleErr" className="response_message error">
                            {{companyRoleErr}}
                    </span>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Company Type</label>
                      <div class="cf_form_block">
                         <select id="type" class="cf_form_field" v-model="companyType">
                          <option :key="type.id" v-for="type in typeOptions" :value="type.id">{{ type.type }}</option>
                      </select>
                     </div>
                    </div>
                    <span v-if="companyTypeErr" className="response_message error">
                            {{companyTypeErr}}
                    </span>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Country</label>
                      <div class="cf_form_block">
                         <select id="type" class="cf_form_field" v-model="Country">
                          <option :key="country.name" v-for="country in countries" :value="country.name">{{ country.name }}</option>
                      </select>
                     </div>
                    </div>
                    <span v-if="countryErr" className="response_message error">
                            {{countryErr}}
                    </span>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Phone</label>
                      <div class="cf_form_block">
                        <input type="text" v-model="Phone" placeholder="Enter phone number" class="cf_form_field">
                      </div>
                    </div>
                    <span v-if="phoneErr" className="response_message error">
                            {{phoneErr}}
                    </span>
                  </div>

                </div>
              </div>
              <div class="cf_edit_profile_section">
                <h3 class="section_heading">Change Password</h3>
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Current Password</label>
                      <div class="cf_form_block">
                        <input :type="[showPass1?'text':'password']" v-model="currentPass" placeholder="Enter Password" class="cf_form_field">
                        <span @click="handlePassword1" :class="[showPass1?'cf_eye_green_close':'']" class="cf_icon cf_eye_green"></span>
                      </div>
                    </div>
                    <span v-if="currentPassErr" className="response_message error">
                            {{currentPassErr}}
                    </span>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>New Password</label>
                      <div class="cf_form_block">
                        <input :type="[showPass2?'text':'password']" v-model="password" placeholder="Enter Password" class="cf_form_field">
                        <span @click="handlePassword2" :class="[showPass2?'cf_eye_green_close':'']" class="cf_icon cf_eye_green"></span>
                      </div>
                    </div>
                    <span v-if="passwordErr" className="response_message error">
                            {{passwordErr}}
                    </span>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Confirm Password</label>
                      <div class="cf_form_block">
                        <input :type="[showPass3?'text':'password']" v-model="password2" placeholder="Enter Password" class="cf_form_field">
                        <span @click="handlePassword3" :class="[showPass3?'cf_eye_green_close':'']" class="cf_icon cf_eye_green"></span>
                      </div>
                    </div>
                    <span v-if="password2Err" className="response_message error">
                            {{password2Err}}
                    </span>
                  </div>
                </div>
              </div>
              <div class="cf_edit_profile_btn_wrapper">
                <a href="javascript:;" class="cf_btn cf_btn_white">Cancel</a>
                <a href="javascript:;" @click="handleFormSubmit" class="cf_btn">Save</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'
import {onMounted} from 'vue'
import useAxios from "../Hooks/useAxios";
import {reactive,toRefs,ref,watch} from 'vue'
import countryList from "../StaticData/countryList.json";
import {isRequired,isPassword} from '../../src/Utils/index'
import router from "../routes";




    export default {
        name: 'EditProfile',
        components: {
        SideBar,
        },
        setup(){
          const countries = countryList;
          const api = useAxios();

          const roleOptions = ref([])
          const typeOptions = ref([])

          const firstNameErr = ref('')
          const lastNameErr = ref('')
          const companyNameErr = ref('')
          const companyTypeErr = ref('')
          const companyRoleErr = ref('')
          const phoneErr = ref('')
          const countryErr = ref('')
          const currentPass = ref('')
          const password = ref('')
          const password2 = ref('')
          const currentPassErr = ref('')
          const passwordErr = ref('')
          const password2Err = ref('')

          const isUpdated = ref(false)

          const showPass1 = ref(false)
          const showPass2 = ref(false)
          const showPass3 = ref(false)

          const userProfile = reactive({
            firstName:'',
            lastName:'',
            companyName:'',
            email:'',
            companyRole:null,
            companyType:null,
            Phone:'',
            Country:''
          });

          

          watch(isUpdated,() => {
            console.log("neel")
            localStorage.removeItem("useruid");
            localStorage.setItem("l25_in_c", true);
            const userdata = JSON.parse(localStorage.getItem("auth"));
            console.log("testtest",userdata)
            getUserData(userdata);
            getCompanyData();
          },{
                immediate:true,
                deep:true
            })

            function logout(){
              localStorage.removeItem("auth");
              localStorage.removeItem("useruid");
              localStorage.removeItem("l25_in_c");
              router.push({ name: "Login" });
            }

          function getUserData(userdata){
            api
            .get("/edit-profile/" + userdata?.id + '/')
            .then(function (response) {
              console.log(response);
              
              userProfile.firstName = response.data.data.first_name
              userProfile.lastName = response.data.data.last_name
              userProfile.companyName = response.data.data.company_name
              userProfile.email = response.data.data.email
              userProfile.companyRole = response.data.data.company_role
              userProfile.companyType = response.data.data.company_type
              userProfile.Phone = response.data.data.phone
              userProfile.Country = response.data.data.country

                
              
            })
            .catch(function (error) {
              console.log(error);

            })
            .then(function () {});
          }

          function getCompanyData() {
            api
              .get("/companyrole/")
              .then(function (response) {
                roleOptions.value = response.data.data
              })
              .catch(function (error) {
                console.log(error);
              })
              .then(function () {});

            api
              .get("/companytype/")
              .then(function (response) {
                typeOptions.value = response.data.data
              })
              .catch(function (error) {
                console.log(error);
              })
              .then(function () {});
          }

          onMounted(() => {
            console.log('onMounted()')


            const userdata = JSON.parse(localStorage.getItem("auth"));

            if (userdata === undefined || userdata === null || userdata === "") {
              router.push({ name: "Login" });
            }
            console.log('test2',userdata)
            getUserData(userdata)
            getCompanyData()
          })

          function handlePassword1(){
            showPass1.value = !showPass1.value
          }

          function handlePassword2(){
            showPass2.value = !showPass2.value
          }

          function handlePassword3(){
            showPass3.value = !showPass3.value
          }

          function formValid () {
          let isValid = true;
          if (isRequired(userProfile.firstName)) {
            firstNameErr.value = "First name can't be empty"
            isValid = false;
          }
          if (isRequired(userProfile.lastName)) {
            lastNameErr.value = "Last name can't be empty"
            isValid = false;
          }
          if (isRequired(userProfile.companyName)) {
            companyNameErr.value =  "company name can't be empty"
            isValid = false;
          }
          if (isRequired(userProfile.Phone)) {
            phoneErr.value = "Phone number is required"
            isValid = false;
          } 
          if (currentPass.value) {
            if (isRequired(password.value)) {
              passwordErr.value = "password is required"
              isValid = false;
            }
            if (!isPassword(password.value)) {
              passwordErr.value = "Your password must be at least 8 characters long, contain at least one number and special charecter and have a mixture of uppercase and lowercase letters."
              isValid = false;
            }
            if (isRequired(password2.value)) {
              password2Err.value = "confirm password is required"
              isValid = false;
            }
          } else {
            passwordErr.value = ""
          }
          if ((password.value || password2.value) && !currentPass.value) {
            currentPassErr.value = "Please enter current password"
            isValid = false;
          }
          if (password.value && password2.value && password.value !== password2.value) {
            password2Err.value = "New password and confirm password doesnot match"
            isValid = false;
          }
          if (isRequired(userProfile.Country)) {
            countryErr.value = "Country is required"
          }
          return isValid;
        }

          function handleFormSubmit(){
            console.log("submit")
            const userdata = JSON.parse(localStorage.getItem("auth"));
            if (formValid()) {
              api
              .put("/edit-profile/" + userdata?.id + "/", {
                first_name: userProfile.firstName,
                last_name: userProfile.lastName,
                company_name: userProfile.companyName,
                current_pass: currentPass.value,
                password: password.value,
                otype: false,
                orole: false,
                company_type: userProfile.companyRole,
                company_role: userProfile.companyType,
                country: userProfile.Country,
                phone: userProfile.Phone,
              })
              .then(function (response) {
                console.log("updated",response.data)
                isUpdated.value = !isUpdated.value
                if (response.data.data.is_password_changed === true) {
                  logout();
                }
              })
              .catch(function (error) {
                if (error.response.status === 400) {
                  currentPassErr.value = "current password is invalid"
                  isUpdated.value = !isUpdated.value
                }
                
              })
            }
          }

          

          return {
            ...toRefs(userProfile),
            roleOptions,
            typeOptions,
            firstNameErr,
            lastNameErr,
            companyNameErr,
            companyTypeErr,
            phoneErr,
            countryErr,
            countries,
            currentPass,
            password,
            password2,
            currentPassErr,
            passwordErr,
            password2Err,
            handleFormSubmit,
            companyRoleErr,
            logout,
            showPass1,
            showPass2,
            showPass3,
            handlePassword1,
            handlePassword2,
            handlePassword3
          }
        }
    }
</script>

<style scoped>
@import '../assets/CSS/dashboard.css';
@import '../assets/CSS/edit_profile.css';
@import '../assets/CSS/custom.css';
</style>