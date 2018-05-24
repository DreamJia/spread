<template>
    <div style="width:100%;height:100%; overflow:auto;">
        <h2 style="line-height:60px;font-size:16px;">
            <router-link to="/agentManagement">代理商管理</router-link> > 新建代理商</h2>
        <div style="width:600px;">
            <el-form ref="form" :model="form" :rules="rules" label-width="160px" size="medium">
                <el-form-item label="代理商名称" prop="name">
                    <el-input v-model="form.name" style="width: 80%;"></el-input>
                </el-form-item>
                <el-form-item label="代理商公司名称" prop="company">
                    <el-input v-model="form.company" style="width: 80%;"></el-input>
                </el-form-item>
                <el-form-item label="负责人" prop="principal">
                    <el-input v-model="form.principal" style="width: 80%;"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="form.phone" style="width: 80%;"></el-input>
                </el-form-item>
                <el-form-item label="企业资质">
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="其他资质">
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="代理区域">
                    <el-select v-model="value" placeholder="请选择省级区域" style="width: 30%;">
                        <el-option v-for="item in mapArr" :key="item.regionName" :label="item.regionName" :value="item.regionName">
                        </el-option>
                    </el-select>
                    <!-- <el-select v-model="value" placeholder="请选择" style="width: 30%;">
                        <el-option v-for="(index,item) in mapArr" :key="item.index" :label="item.label" :value="item.children">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" placeholder="请选择" style="width: 30%;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select> -->
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input style="width:80%;" type="textarea" :rows="2" placeholder="请输入内容" v-model="form.textarea">
                    </el-input>
                </el-form-item>
                <el-form-item label="邀请码" prop="">
                    <i>HTG 2018365204</i>
                </el-form-item>
                <el-form-item label="分润比例（%）" prop="">
                    <el-input v-model="form.name" style="width: 80%;"></el-input>
                </el-form-item>
                <el-form-item label="支持业务分润" prop="">
                    <el-radio v-model="radio" label="1">是</el-radio>
                    <el-radio v-model="radio" label="2">否</el-radio>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
export default {
    created() {
        axios.get("../static/map.json").then(res => {
            // console.log(res.data);
            this.mapArr = res.data;
            console.log(res.data);
        });
    },
    data() {
        return {
            radio: "1",
            mapArr: [],
            value: "",
            imageUrl: "",
            form: {
                name: "",
                company: "",
                principal: "",
                textarea: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "必填项不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 2,
                        max: 20,
                        message: "输入2个以上字符，最多可以输入20个",
                        trigger: "blur"
                    }
                ],
                company: [
                    {
                        required: true,
                        message: "请输入与营业执照一直的名称",
                        trigger: "blur"
                    }
                ],
                principal: [
                    {
                        required: true,
                        message: "必填项不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 2,
                        max: 20,
                        message: "输入2个以上字符，最多可以输入20个",
                        trigger: "blur"
                    }
                ],
                phone: [
                    {
                        required: true,
                        message: "输入标准格式的手机号",
                        trigger: "blur"
                    }
                ]
            },
            options2: [
                {
                    label: "江苏",
                    cities: []
                },
                {
                    label: "浙江",
                    cities: []
                }
            ],
            props: {
                value: "label",
                children: "cities"
            }
        };
    },
    methods: {
        onSubmit() {
            console.log(this.form);
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === "image/jpeg";
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error("上传头像图片只能是 JPG 格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isJPG && isLt2M;
        }
    }
};
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
}
.avatar {
    width: 78px;
    height: 78px;
    display: block;
}
</style>

