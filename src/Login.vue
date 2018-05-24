<template>
    <section>
        <div id="wrapper">
            <div class="logo">
                <img src="./assets/logo.png" alt="">
            </div>
            <section class="login-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.name" style="width:480px;"></el-input>
                    </el-form-item>
                    <div style="height:20px;"></div>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" style="width:480px;" type="password"></el-input>
                    </el-form-item>
                    <el-button @click="onSubmit" class="submit-btn">登录</el-button>
                </el-form>
            </section>

        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: "",
                password: ""
            }
        };
    },
    methods: {
        onSubmit: function() {
            localStorage.setItem("uid", 1);
            this.$router.push({ path: "/index" });
        }
    }
};
</script>
<style  lang="stylus" type="text/stylus">
#wrapper {
    width: 100%;
    height: 100vh;
    background: #e8e8e8;
    box-sizing: border-box;
    padding-top: 240px;
}

.logo {
    width: 275px;
    height: 74px;
    margin: 0 auto;
    margin-bottom: 40px;
}

.login-box {
    width: 600px;
    height: 400px;
    background: #fff;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 90px;
    position: relative;
    box-shadow: 3px 3px 2px #d6d6d6;
}

.submit-btn {
    width: 200px;
    height: 40px;
    background: #448aca;
    position: absolute;
    right: 40px;
    bottom: 60px;
    color: #fff;
}
</style>

