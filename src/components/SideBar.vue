<template>
    <div>
        <div class="cf_dashboard_sidebar_wrapper">
      <div class="cf_dashboard_sidebar_inner">
        <div class="cf_sidebar_logo_block">
          <label class="sidebar_toggle"><span class="cf_icon cf_left"></span></label>
          <a href="javascript:;"><img src="../assets/images/logo.svg" alt="Cafetra" class="img-fluid"></a>
        </div>
        <div class="cf_sidebar_search_block">
          <div class="cf_sidebar_search_inner">
            <span class="cf_icon cf_search"></span>
            <input type="text" placeholder="Search here...">
          </div>
        </div>
        <div class="cf_sidebar_list_block">
          <ul class="cf_sidebar_menu">
            <li class="cf_submenu_block">
              <a href="home.html"><span class="cf_icon cf_home"></span><label>Home</label></a>
            </li>
            <li class="cf_submenu_block">
              <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_weather"></span><label>Weather</label><span
                  class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu">
                <li><a href="us_sales.html">US Sales</a></li>
                <li><a href="javascript:;">US Inspections</a></li>
              </ul>
            </li> 
            <li class="cf_submenu_block">
              <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_crops"></span><label>Crops</label><span class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu">
                <li><a href="us_sales.html">US Sales</a></li>
                <li><a href="javascript:;">US Inspections</a></li>
                <li><a href="javascript:;">USDA Flash</a></li>
                <li><a href="javascript:;">EU Weekly Trade Data</a></li>
                <li><a href="javascript:;">Lineup Data</a></li>
                <li><a href="javascript:;">Tender Data</a></li>
                <li><a href="javascript:;">Custom Data</a></li>
              </ul>
            </li>
         
            <li class="cf_submenu_block">
              <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_sds"></span><label>S&D’s</label><span class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu">
                 <li><a href="us_sales.html">US Sales</a></li>
                <li><a href="us_inspections.html">US Inspections</a></li>
                <li><a href="usdaflash.html">USDA Flash</a></li>
                <li><a href="eu_weekly_trade_data.html">EU Weekly Trade Data</a></li>
                <li><a href="line_up_data.html">Lineup Data</a></li>
                <li><a href="tender_data.html">Tender Data</a></li>
                <li><a href="custom_data.html">Custom Data</a></li>
              </ul>
            </li>
              <li class="cf_submenu_block">
                <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_trade"></span><label>Trade</label><span
                    class="cf_icon cf_down"></span></a>
                <ul class="cf_sidebar_submenu">
                  <li><a href="us_sales.html">US Sales</a></li>
                  <li><a href="us_inspections.html">US Inspections</a></li>
                  <li><a href="usdaflash.html">USDA Flash</a></li>
                  <li><a href="eu_weekly_trade_data.html">EU Weekly Trade Data</a></li>
                  <li><a href="line_up_data.html">Lineup Data</a></li>
                  <li><a href="tender_data.html">Tender Data</a></li>
                  <li><a href="custom_data.html">Custom Data</a></li>
                </ul>
              </li>
              <li class="cf_submenu_block">
                <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_policy"></span><label>Policies</label><span
                    class="cf_icon cf_down"></span></a>
                <ul class="cf_sidebar_submenu">
                  <li><a href="us_sales.html">US Sales</a></li>
                  <li><a href="us_inspections.html">US Inspections</a></li>
                </ul>
              </li>
                <li class="cf_submenu_block">
                  <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_process"></span><label>Processing Capacity</label><span
                      class="cf_icon cf_down"></span></a>
                  <ul class="cf_sidebar_submenu">
                    <li><a href="us_sales.html">US Sales</a></li>
                    <li><a href="us_inspections.html">US Inspections</a></li>
                  </ul>
                </li>                
            <li class="cf_submenu_block">
              <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_price"></span><label>Prices</label><span class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu">
                 <li><a href="us_sales.html">US Sales</a></li>
                <li><a href="us_inspections.html">US Inspections</a></li>
                <li><a href="usdaflash.html">USDA Flash</a></li>
                <li><a href="eu_weekly_trade_data.html">EU Weekly Trade Data</a></li>
                <li><a href="line_up_data.html">Lineup Data</a></li>
                <li><a href="tender_data.html">Tender Data</a></li>
                <li><a href="custom_data.html">Custom Data</a></li>
              </ul>
            </li>
            <li class="cf_submenu_block">
              <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_price_analysis"></span><label>Price Analysis</label><span class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu">
                 <li><a href="us_sales.html">US Sales</a></li>
                <li><a href="us_inspections.html">US Inspections</a></li>
                <li><a href="usdaflash.html">USDA Flash</a></li>
                <li><a href="eu_weekly_trade_data.html">EU Weekly Trade Data</a></li>
                <li><a href="line_up_data.html">Lineup Data</a></li>
                <li><a href="tender_data.html">Tender Data</a></li>
                <li><a href="custom_data.html">Custom Data</a></li>
              </ul>
            </li>
            <li class="cf_submenu_block">
              <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_sentiment"></span><label>Sentiment</label><span
                  class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu">
                <li><a href="us_sales.html">US Sales</a></li>
                <li><a href="us_inspections.html">US Inspections</a></li>
              </ul>
            </li>
            <li class="cf_submenu_block">
              <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_picture"></span><label>The Big Picture</label><span
                  class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu">
                <li><a href="us_sales.html">US Sales</a></li>
                <li><a href="us_inspections.html">US Inspections</a></li>
              </ul>
            </li>
            <li class="cf_submenu_block">
              <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_report"></span><label>Report Archieve</label><span
                  class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu">
                <li><a href="us_sales.html">US Sales</a></li>
                <li><a href="us_inspections.html">US Inspections</a></li>
              </ul>
            </li>         
          </ul>
        </div>
        <div class="cf_info_list_block">
          <div class="cf_sidebar_list_block">
            <ul class="cf_sidebar_menu">              
              <li class="cf_submenu_block">
                <a href="javascript:;" class="menu_scrl"><span class="cf_icon cf_info"></span><label>Info</label><span
                    class="cf_icon cf_down"></span></a>
                <ul class="cf_sidebar_submenu">
                   <li><a href="info_ceras_analytics.html">Ceras Analytics</a></li>
                                    <li><a href="info_products.html">Products</a></li>
                                    <li><a href="info_pricing.html">Pricing</a></li>
                                    <li><a href="info_tutorials.html">Tutorials</a></li>
                                    <li><a href="info_api_documentation.html">API Documentation</a></li>
                                    <li><a href="info_faq.html">FAQ</a></li>
                                    <li><a href="term_of_use.html">Term of Use</a></li>
                                    <li><a href="info_contact.html">Contact</a></li>
                </ul>
              </li>             
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'SideBar'
    }
</script>

<style scoped>
@import '../assets/CSS/dashboard.css';
@import '../assets/CSS/edit_profile.css';
@import '../assets/CSS/custom.css';
</style>