import {createStore} from 'vuex';
// import axios from 'axios'

export default createStore({
    state:{
        showSidebar:true,
        linkMenus: {
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
          }
    },
    mutations:{
        showSidebar(state){
            state.showSidebar = true
        },
        hideSidebar(state){
            state.showSidebar = false
        },
        setLinkMenus(state,value){
            state.linkMenus = value
        }
    },
    actions:{
        
    },
    getters:{
        
    },
    modules:{

    }
})