<template>
    <div>
        <div class="cf_dashboard_sidebar_wrapper">
      <div class="cf_dashboard_sidebar_inner">
        <div class="cf_sidebar_logo_block">
          <label @click="$store.commit('hideSidebar')" class="sidebar_toggle"><span class="cf_icon cf_left"></span></label>
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
            <li class="cf_submenu_block" :class="[$store.state.linkMenus.showWeather?'active':'']" @click="handleShowHide('showWeather')">
              <a href="javascript:;" :class="[$store.state.linkMenus.showWeather?'active':'']" class="menu_scrl"><span class="cf_icon cf_weather"></span><label>Weather</label><span
                  class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu" :style="{display:$store.state.linkMenus.showWeather?'block':'none'}" :class="[$store.state.linkMenus.showWeather?'active':'']">
                <!-- {{getSubCats(subData,"Weather")}} -->

                <li :key="sub" v-for="sub in getSubCats(subData,'Weather')"> <a href="us_sales.html">{{ sub.sub_category_name }}</a></li>
              </ul>
            </li> 
            <li class="cf_submenu_block" :class="[$store.state.linkMenus.showCrops?'active':'']" @click="handleShowHide('showCrops')">
              <a href="javascript:;" :class="[$store.state.linkMenus.showCrops?'active':'']" class="menu_scrl"><span class="cf_icon cf_crops"></span><label>Crops</label><span class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu" :style="{display:$store.state.linkMenus.showCrops?'block':'none'}" :class="[$store.state.linkMenus.showCrops?'active':'']">
                <li :key="sub" v-for="sub in getSubCats(subData,'Crops')"> <a href="us_sales.html">{{ sub.sub_category_name }}</a></li>
              </ul>
            </li>
         
            <li class="cf_submenu_block" :class="[$store.state.linkMenus.showSnd?'active':'']" @click="handleShowHide('showSnd')">
              <a href="javascript:;" :class="[$store.state.linkMenus.showSnd?'active':'']" class="menu_scrl"><span class="cf_icon cf_sds"></span><label>S&D’s</label><span class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu" :style="{display:$store.state.linkMenus.showSnd?'block':'none'}" :class="[$store.state.linkMenus.showSnd?'active':'']">
                <li :key="sub" v-for="sub in getSubCats(subData,'S&d')"> <a href="us_sales.html">{{ sub.sub_category_name }}</a></li>   
              </ul>
            </li>
              <li class="cf_submenu_block" :class="[$store.state.linkMenus.showTrade?'active':'']" @click="handleShowHide('showTrade')">
                <a href="javascript:;" :class="[$store.state.linkMenus.showTrade?'active':'']" class="menu_scrl"><span class="cf_icon cf_trade"></span><label>Trade</label><span
                    class="cf_icon cf_down"></span></a>
                <ul class="cf_sidebar_submenu" :style="{display:$store.state.linkMenus.showTrade?'block':'none'}" :class="[$store.state.linkMenus.showTrade?'active':'']">
                  <li :key="sub" v-for="sub in getSubCats(subData,'Trade')"> <a href="us_sales.html">{{ sub.sub_category_name }}</a></li>
                </ul>
              </li>
              <li class="cf_submenu_block" :class="[$store.state.linkMenus.showPolicies?'active':'']" @click="handleShowHide('showPolicies')">
                <a href="javascript:;" :class="[$store.state.linkMenus.showPolicies?'active':'']" class="menu_scrl"><span class="cf_icon cf_policy"></span><label>Policies</label><span
                    class="cf_icon cf_down"></span></a>
                <ul class="cf_sidebar_submenu" :style="{display:$store.state.linkMenus.showPolicies?'block':'none'}" :class="[$store.state.linkMenus.showPolicies?'active':'']">
                  <li :key="sub" v-for="sub in getSubCats(subData,'Policies')"> <a href="us_sales.html">{{ sub.sub_category_name }}</a></li>
                </ul>
              </li>
                <li class="cf_submenu_block" :class="[$store.state.linkMenus.showProcessingCapacity?'active':'']" @click="handleShowHide('showProcessingCapacity')">
                  <a href="javascript:;" :class="[$store.state.linkMenus.showProcessingCapacity?'active':'']" class="menu_scrl"><span class="cf_icon cf_process"></span><label>Processing Capacity</label><span
                      class="cf_icon cf_down"></span></a>
                  <ul class="cf_sidebar_submenu" :style="{display:$store.state.linkMenus.showProcessingCapacity?'block':'none'}" :class="[$store.state.linkMenus.showProcessingCapacity?'active':'']">
                    <li :key="sub" v-for="sub in getSubCats(subData,'Processing capacity')"> <a href="us_sales.html">{{ sub.sub_category_name }}</a></li>
                  </ul>
                </li>                
            <li class="cf_submenu_block" :class="[$store.state.linkMenus.showPrices?'active':'']" @click="handleShowHide('showPrices')">
              <a href="javascript:;" :class="[$store.state.linkMenus.showPrices?'active':'']" class="menu_scrl"><span class="cf_icon cf_price"></span><label>Prices</label><span class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu" :style="{display:$store.state.linkMenus.showPrices?'block':'none'}" :class="[$store.state.linkMenus.showPrices?'active':'']">
                <li :key="sub" v-for="sub in getSubCats(subData,'Prices')"> <a href="us_sales.html">{{ sub.sub_category_name }}</a></li>
              </ul>
            </li>
            <li class="cf_submenu_block" :class="[$store.state.linkMenus.showPriceAnalysis?'active':'']" @click="handleShowHide('showPriceAnalysis')">
              <a href="javascript:;" :class="[$store.state.linkMenus.showPriceAnalysis?'active':'']" class="menu_scrl"><span class="cf_icon cf_price_analysis"></span><label>Price Analysis</label><span class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu" :style="{display:$store.state.linkMenus.showPriceAnalysis?'block':'none'}" :class="[$store.state.linkMenus.showPriceAnalysis?'active':'']">
                 <li :key="sub" v-for="sub in getSubCats(subData,'Price analysis')"> <a href="us_sales.html">{{ sub.sub_category_name }}</a></li>
              </ul>
            </li>
            <li class="cf_submenu_block" :class="[$store.state.linkMenus.showSentiment?'active':'']" @click="handleShowHide('showSentiment')">
              <a href="javascript:;" :class="[$store.state.linkMenus.showSentiment?'active':'']" class="menu_scrl"><span class="cf_icon cf_sentiment"></span><label>Sentiment</label><span
                  class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu" :style="{display:$store.state.linkMenus.showSentiment?'block':'none'}" :class="[$store.state.linkMenus.showSentiment?'active':'']">
                <li :key="sub" v-for="sub in getSubCats(subData,'Sentiment')"> <a href="us_sales.html">{{ sub.sub_category_name }}</a></li>
              </ul>
            </li>
            <li class="cf_submenu_block" :class="[$store.state.linkMenus.showTheBigPicture?'active':'']" @click="handleShowHide('showTheBigPicture')">
              <a href="javascript:;" :class="[$store.state.linkMenus.showTheBigPicture?'active':'']" class="menu_scrl"><span class="cf_icon cf_picture"></span><label>The Big Picture</label><span
                  class="cf_icon cf_down"></span></a>
              <ul class="cf_sidebar_submenu" :style="{display:$store.state.linkMenus.showTheBigPicture?'block':'none'}" :class="[$store.state.linkMenus.showTheBigPicture?'active':'']">
                <li :key="sub" v-for="sub in getSubCats(subData,'The big picture')"> <a href="us_sales.html">{{ sub.sub_category_name }}</a></li>
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
import {onMounted} from 'vue'
import {ref} from 'vue'
import useAxios from "../Hooks/useAxios";
    export default {
        name: 'SideBar',
        setup(){
          const api = useAxios();
          const subData = ref([])

          onMounted(() => {
            console.log('sidebar onMounted()')


            getData()
          })

          function getData(){
            api
            .get("/subcategory/")
            .then(function (response) {
              console.log(response.data.data);
              
              subData.value = response.data.data

                
              
            })
            .catch(function (error) {
              console.log(error);

            })
          }

          return {
            getData,
            subData
          }
        },
        methods:{
            handleShowHide(c){
            const temp_menu = {
            showWeather: false,
            showCrops: false,
            showTrade: false,
            showPolicies: false,
            showProcessingCapacity: false,
            showPrices: false,
            showPriceAnalysis: false,
            showSentiment: false,
            showTheBigPicture: false,
            showReportArchive: false,
            showGini: false,
            showSnd: false,
            showInfo: false,
          };

          for (var key in temp_menu) {
            if (key === c) {
              temp_menu[key] = !this.$store.state.linkMenus[c];
            }
          }
          this.$store.state.linkMenus = temp_menu
          },
          getSubCats(subArr,c){
            let dummyObj = subArr?.filter((e) => e.category === c);
            console.log("dummyObj",dummyObj)
            return dummyObj;
            // return dummyObj?.map((c, i) => (
            //   <li key={`index_w_${i}`}><a href="us_sales.html">{c.sub_category_name}</a></li>
            // ))
          }
        },
        
    }
</script>

<style scoped>
@import '../assets/CSS/dashboard.css';
@import '../assets/CSS/edit_profile.css';
@import '../assets/CSS/custom.css';
</style>