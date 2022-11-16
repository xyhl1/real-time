<template>
    <div class="container">
        <el-container>
            <el-aside class="aside">
                <Aside></Aside>
            </el-aside>
            <el-container>
                <el-header class="header">
                    <header1></header1>
                </el-header>
                <el-main class="main"><Main></Main></el-main>
                <el-footer class="footer">
                    <Footer></Footer>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import Footer from './footer.vue';
import Aside from './aside.vue'
import header1 from './header.vue';
import Main from './main.vue'
export default {
    data() {
        return {
        }
    },
    components: {
        Footer, Aside,header1,Main
    },
    created() {
    },
    computed: {
    },
    methods: {
    },
}
</script>
<style lang="scss" scoped>
.aside {
    // width: 10vw;
    height: 100vh;
    background-color: #d5dce5;
}
.aside {
    cursor: pointer;
}
.header {
    height: 5vh;
    padding: 0;
    // background-color: aqua;
}

.footer {
    padding: 0;
    height: 5vh;
    background-color: antiquewhite;
}
.main {
    padding: 0;
    margin: 0;
    background-color: #d6dce4;
}
</style>
