require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import * as VeeValidate from 'vee-validate';
import { routes } from './routes';
import storeData from './store';
import Index from './components/MainApp'; 
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(Vuex);


const router = new VueRouter({
    routes,
    mode: 'history'
}); 


const store = new Vuex.Store(storeData);

// important script for component permission
router.beforeEach((to, from, next) => {
    // login component
    if(to.meta.reqiuresAuth){
      const authUser = store.getters.currentUser
      if(!authUser || !authUser.token){
        next({name:'login'})
      }
      // for admin 
      else if(to.meta.Admin){
        const authUser = store.getters.currentUser
        if(authUser.role === 1){
          next()
        }else{
          next({name:'Unauthorized'})
        }
      }
      // for User component

      // else if(to.meta.User){
      //   const authUser = store.getters.currentUser
      //   if(authUser.role === 2){
      //     next()
      //   }else{
      //     next({name:'Unauthorized'})
      //   }
      // }

    }
    else{
      next()
    }
  })
// important script for component permission
Vue.component('Index',Index)
const app = new Vue({
    el: '#app',
    router,
    store
    
});