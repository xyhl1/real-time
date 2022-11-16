import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueSocketIO from 'vue-socket.io'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3000',
    options: {
      autoConnect: false
    },
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: "SOCKET_"
    }
  })
)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

VueSocketIO.onclose = function (e) {
  console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
  console.log(e)
}

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.isLogin) {
      next()
    }
    else {
      setTimeout(() => {
        // this.$message.warning("请先登录")
        // alert("请先登录")
      }, 1000);
      next({ name: 'login' })
    }
  }
  else {
   
    next()
  }
  //   // alert('111')
  //   // if (store.state.isLogin&&to.name=='login') {
  //   //   // alert(store.state.isLogin)
  //   //   // alert('home')
  //   //   // next({name:'home'})
  //   //   next()
  //   // }
  //   // else if (!store.state.isLogin&&to.name!='login') {
  //   //   // alert(store.state.isLogin)
  //   //   // alert('login');
  //   //   next({name:'login'})
  //   // }
  //   // else {
  //   //   // alert(store.state.isLogin)
  //   //   // alert('next')
  //   //   next()
  //   // }
})
