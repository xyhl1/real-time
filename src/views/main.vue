<template>
    <div class="container">
        <div v-for="(list, index) in chatMessageList" :key="index">
            <div v-if="list.username == userInfo.name">
                <div v-for="msg in list.list" :class="msg.type == 'my' ? 'right' : 'left'">
                    <div class="oneMsg">
                        <div>
                            <!-- :src="msg.type == 'my' ? myInfo.img : userInfo.img" -->
                            <el-avatar :size="45" :src="msg.img"></el-avatar>
                        </div>
                        <p>
                            <span>{{ msg.name }}</span>
                            <span class="msgContent">{{ msg.msg }}</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
        chatMessageList() {
            console.log(this.$store.state.chatMessageList, 'chatmessage');
            return this.$store.state.chatMessageList
        },
        userInfo() {
            return this.$store.state.userInfo
        },
        myInfo() {
            return this.$store.state.myInfo
        }
    },
    methods: {
    },
}
</script>
<style lang="scss" scoped>
.container {
    height: calc(100vh - 120px);
    background-color: #d6dce4;
    padding: 10px;
    overflow-y: scroll;
}

.oneMsg {
    display: flex;
    align-items:stretch;
    height: 45px;
    margin-bottom: 10px;
    p span {
       display: block;
       margin: 0 10px;
    }
    p span:nth-child(1) {
        opacity: 0.5;
    }
}

.msgContent {
    
    padding: 5px 10px;
    border-radius: 8px;
    background-color: #b7c0cd;
}

.right {
    direction: rtl
}
</style>
