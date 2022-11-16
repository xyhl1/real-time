<template>
    <div class="container">
        <el-card>
            <el-tabs v-model="activeName">
                <el-tab-pane label="欢迎登录" name="login">
                    <el-form ref="form" :model="form">
                        <el-form-item class="username">
                            <el-input style="width:32vw" placeholder="登录名" v-model="form.name"></el-input>
                            <el-button style="background-color:#f5f7fa" @click="login">登录</el-button>
                        </el-form-item>
                        <span v-for="(item, index) in avatarList" :key="index" @click="selectAvatar(item)"
                            :class="{ 'avatar': item == form.img }" tabindex="1">
                            <el-avatar :size="45" :src="item" style="margin:0 5px">
                            </el-avatar>
                        </span>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>
<script>
// import Cookies from 'js-cookie'
export default {
    data() {
        return {
            token: {},
            activeName: 'login',
            form: {
                name: '',
                img: ''
            },
            avatarList: [
                'http://img.mp.itc.cn/upload/20170808/5861bc790e654d56bc9289c567b44875_th.jpg',
                'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                'https://tse4-mm.cn.bing.net/th/id/OIP-C.dQlAgY2SCE69AcLWddUE7gHaJq?w=186&h=243&c=7&r=0&o=5&pid=1.7',
                'https://tse1-mm.cn.bing.net/th/id/OIP-C.sI6CAZ_Je1uHDIqe5jpanwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7',
                'https://tse2-mm.cn.bing.net/th/id/OIP-C.v66H5OngpVuYZbj0gmy6nQHaNK?w=186&h=331&c=7&r=0&o=5&pid=1.7',
                'https://tse4-mm.cn.bing.net/th/id/OIP-C.iX2Yw2gRGszuAS_do-BgMgHaNK?w=186&h=331&c=7&r=0&o=5&pid=1.7',
                'https://tse3-mm.cn.bing.net/th/id/OIP-C.lvl3WzpAOPW_OMX-hqAzbQHaHa?w=191&h=192&c=7&r=0&o=5&pid=1.7',
                'https://tse1-mm.cn.bing.net/th/id/OIP-C.P9KT3zXPPsX2Kf2P_pIVNAHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7',
                'https://tse1-mm.cn.bing.net/th/id/OIP-C.6TjASdY8GnSTesSShFeT6wHaFP?w=273&h=193&c=7&r=0&o=5&pid=1.7'
            ]
        }
    },
    methods: {
        login() {
            if (this.form.name != '') {
                if (this.form.img != '') {
                    this.$store.commit('setIsLogin', true)
                    this.$store.commit('setMyInfo', this.form)
                    this.$router.push({ name: 'home' })
                    this.$socket.connect()
                    this.$socket.emit('login', this.form )
                    // console.log('111');
                }
                else {
                    this.$message.warning("请选择头像")
                }
            }
            else {
                this.$message.warning("请输入名字")
            }
        },
        selectAvatar(val) {
            // this.form.img=val
            console.log(val);
            this.form.img = val
        }
        // },
    }
}
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.el-card {
    width: 40vw;
    height: 40vh;
}

.username {
    display: flex;
}

.avatar {
    background-color: pink;
}
</style>

