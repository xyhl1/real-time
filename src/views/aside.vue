<template>
    <div>
        <el-row class="myInfo">
            <div class="user">
                <el-avatar :size="45" :src="myInfo.img">
                </el-avatar>
                <span class="userName">{{ myInfo.name }}</span>
            </div>
        </el-row>
        <el-row class="search">
            <el-input placeholder="搜索好友" v-model="keyword" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-row>
        <el-row class="friendsList">
            <!-- !(data.name.toLowerCase().includes(myInfo.name.toLowerCase())) -->
            <el-table :data="tableData.filter(data => ((!keyword || data.name.toLowerCase().includes(keyword.toLowerCase()))
            && !(data.name.toLowerCase().includes(myInfo.name.toLowerCase()))))" style="width: 100%"
                :show-header="false" stripe :height="scrollHeight" @row-click="handle">
                <el-table-column>
                    <div slot-scope="scope" class="user">
                        <el-avatar :size="45" :src="scope.row.img"></el-avatar>
                        <span class="userName">{{ scope.row.name }}</span>
                    </div>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>
// import Cookies from 'js-cookie'
export default {
    data() {
        return {
            keyword: '',
        }
    },
    mounted() {
    },
    created() {
    },
    computed: {
        myInfo() {
            let info = this.$store.state.myInfo
            return info
        },
        tableData() {
            console.log(this.$store.state.userList, 'userList');
            return this.$store.state.userList
        },
        scrollHeight() {
            return 'calc(100vh - 110px)'
        }
    },
    methods: {
        handle(row) {
            // console.log(row.name,'1233435454');
            this.$store.commit('setUserInfo', { name: row.name, img: row.img })
            if (row.name == '默认群聊')
                this.$store.commit('setChatType', 'group')
            else {
                this.$store.commit('setChatType', 'private')
            }
        }
    },
} 
</script>
<style lang="scss" scoped>
.myInfo {
    height: 60px;
}

.user {
    // vertical-align: middle;
    line-height: 60px;
    height: 60px;
    // text-align:;
    padding-left: 20px;
}

.el-avatar {
    height: 60px;
    // line-height: 60px;
    display: inline-block;
    vertical-align: middle;
}

.userName {
    margin-left: 10px;
    font-size: 16px;
    height: 50px;
    // line-height: 60px;
    display: inline-block;
    vertical-align: middle;
}

/deep/ .el-table .el-table__cell {
    padding: 0;
}

.friendsList {
    margin-top: 10px;
}
</style>
