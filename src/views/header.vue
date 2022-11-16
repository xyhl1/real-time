<template>
    <div class="topName">
        <span class="username">{{ userName }}</span>
        <p  class="out">
            <el-button @click="out" type="primary">退出</el-button>
        </p>
       
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
        userName() {
            return this.$store.state.userInfo.name
        }
    },
    methods: {
        out() {
            this.$store.commit('setIsLogin',false)
            this.$store.commit('setMyInfo',{})
            this.$router.push('/')
        }
    },
}
</script>
<style lang="scss" scoped>
.topName {
    height: 100%;
    width: 100%;
    text-align: center;
    // line-height: 60px;
    background-color: #b5c0cf;
    font-size: 23px;
    color: #363d47;
    letter-spacing: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
}

.out {
    flex:0 1 33%;
}
.el-button {
    width: 100px;
    
}
.username {
    flex:0 1 33%;
}
</style>
