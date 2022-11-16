// import Cookies from 'js-cookie'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chatType: '',//群聊类型
    isLogin: false,//是否登录
    myInfo: {//个人信息
      // name: '这个憨憨不输名字',
      // img: 'https://pic1.zhimg.com/50/v2-adfacac8307b48531d4e341a6090aa03_hd.jpg?source=1940ef5c'
      name:'',
      img:''
    },
    userInfo: {//他人的信息
      img: '',
      name: ''
    },
    userList: [
      {
        // name: '默认群聊',
        // img: 'https://pic1.zhimg.com/50/v2-adfacac8307b48531d4e341a6090aa03_hd.jpg?source=1940ef5c'
      }
    ],//用户列表
    chatMessageList: []//聊天记录


  },
  getters: {
  },
  mutations: {
    setChatType(state, val) {
      state.chatType = val
    },
    setIsLogin(state, val) {
      state.isLogin = val
    },
    setUserInfo(state, val) {
      state.userInfo = val
    },
    setMyInfo(state, val) {
      // console.log(val,'val');
      state.myInfo = val
    },
    SOCKET_login(state, data) {
      console.log(data,'用户列表');
      state.userList=data
      // state.userList.push(...data)
    },
    SOCKET_userInfo(state, val) {
      state.userInfo = val
    },
    SOCKET_updateChatMessageList(state, data) {
      console.log(data, '真相');
      var finduser = false;
      /* 数据处理：先找到自己的聊天记录 */
      state.chatMessageList.forEach(list => {
        if (list.username == data.username) {
          finduser = true;
          list.list.push(data.list)
        }
      });
      if (!finduser) {
        state.chatMessageList.push({
          username: data.username,
          list: [data.list]
        });
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
