<template>
    <div>
        <div class="container">
        <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="send"></el-input>
        <el-button @click="send">发送</el-button>
    </div>
    </div>
    
</template>
<script>
export default {
   data() {
      return {
        input:'',
      }
   },
   created(){
   },
   computed:{
    chatType() {
        return this.$store.state.chatType
    }
   },
   methods:{
    send() {
        // console.log(this.chatType,'chatType');
        // console.log('发送消息','111');
        if(this.chatType=='group') {
            var data= {
                username:this.$store.state.userInfo.name,
                list:{
                    name:this.$store.state.myInfo.name,
                    img:this.$store.state.myInfo.img,
                    type:'my',
                    // time:time.toLocaleString(),
                    msg:this.input
                }
            }
            this.$socket.emit('groupChat',data)
            console.log(data,'group');
            this.$store.commit('SOCKET_updateChatMessageList',data)
            // console.log('群聊');
        }else {
            this.$socket.emit('privateChat',{})
            console.log('私聊');
        }
        this.input=''
        // console.log('发送消息');
    }
   },
}
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: #b5c0cf;
    display: flex;
    // align-items: center;
    justify-content: space-around;
    padding:10px 20px;

.el-input {
   margin-right: 20px;
}
.el-button {
    width: 80px;
    height: 40px;
    padding: 0;
}
}
</style>
