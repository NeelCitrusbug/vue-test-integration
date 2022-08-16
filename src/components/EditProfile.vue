<template>
    <div>
        <div class="cf_dashboard_main_wrapper">
            <SideBar/>

            <div class="cf_dashboard_middle_wrapper">
      <div class="cf_dashboard_header">
        <div class="sidebar_toggle">
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
                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#cf_logout"><span class="cf_icon cf_logout"></span>
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
                      <div class="cf_form_block"><input type="text" placeholder="Enter first name" class="cf_form_field"></div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Last Name</label>
                      <div class="cf_form_block"><input type="text" placeholder="Enter last name" class="cf_form_field"></div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>E-mail</label>
                      <div class="cf_form_block">
                        <input type="email" placeholder="Enter email" class="cf_form_field">
                        <span class="cf_icon cf_mail_green"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Company</label>
                      <div class="cf_form_block">
                        <input type="text" placeholder="Enter company name" class="cf_form_field">
                        <span class="cf_icon cf_suitcase"></span>
                      </div>
                    </div>
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
                        <input type="password" placeholder="Enter Password" class="cf_form_field">
                        <span class="cf_icon cf_eye_green"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>New Password</label>
                      <div class="cf_form_block">
                        <input type="password" placeholder="Enter Password" class="cf_form_field">
                        <span class="cf_icon cf_eye_green"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="cf_edit_profile_form_block">
                      <label>Confirm Password</label>
                      <div class="cf_form_block">
                        <input type="password" placeholder="Enter Password" class="cf_form_field">
                        <span class="cf_icon cf_eye_green"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cf_edit_profile_btn_wrapper">
                <a href="javascript:;" class="cf_btn cf_btn_white">Cancel</a>
                <a href="javascript:;" class="cf_btn">Save</a>
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
    export default {
        name: 'EditProfile',
        components: {
        SideBar,
    }
    }
</script>

<style scoped>
@import '../assets/CSS/dashboard.css';
@import '../assets/CSS/edit_profile.css';
@import '../assets/CSS/custom.css';
</style>