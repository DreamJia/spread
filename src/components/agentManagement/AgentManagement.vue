<template>
    <div style="width:100%;height:100%;overflow-y:auto;">
        <div style="height:20px;"></div>
        <div style="margin-bottom:20px;">
            <router-link to="/agentManagement/addAgent">
                <el-button type="primary">新建代理商</el-button>
            </router-link>
            <!-- <el-button type="primary" @click="addAgent">新建代理商</el-button> -->
        </div>
        <el-table :data="arr" border v-loading="listLoading">
            <el-table-column prop="id" label="ID" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="firstName" label="firstname" width="120">
            </el-table-column>
            <el-table-column prop="lastName" label="lastname" width="120">
            </el-table-column>
            <el-table-column prop="birth" label="生日" width="300">
            </el-table-column>
            <el-table-column prop="sports" label="运动" width="120">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="height:30px;"></div>
        <div class="block fr">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="40">
            </el-pagination>
        </div>
        <!--新增界面-->
        <el-dialog title="新增代理商" :visible.sync="addVisible" width="80%" :before-close="handleClose">
            <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="addForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="addForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="addForm.name" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
        <!-- 查看详情 -->
        <el-dialog title="查看详情" :visible.sync="lookVisible" width="40%" :before-close="handleClose">
            <li>{{editArr.name}}</li>
            <li>{{editArr.birth}}</li>
            <li>{{editArr.firstName}}</li>
            <li>{{editArr.lastName}}</li>
            <li>{{editArr.sports}}</li>

        </el-dialog>
    </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";

export default {
    created() {
        axios.get("static/data.json").then(res => {
            console.log(res);
            this.arr = res.data.arr;
        });
    },
    data() {
        return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            listLoading: false,
            arr: [],
            editArr: {},
            addVisible: false,
            lookVisible: false,
            addForm: {
                name: "",
                age: 0,
                phone: ""
            },
            addFormRules: {
                name: [
                    { required: true, message: "请输入姓名", trigger: "blur" }
                ],
                phone: [
                    {
                        required: true,
                        message: "请输入电话号码",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    // computed: {
    //     aaa() {
    //         return { width: "10000px" };
    //     }
    // },
    methods: {
        handleClick(data) {
            this.lookVisible = true;
            this.editArr = data;
            console.log(this.editArr);
        },
        addAgent() {
            this.addVisible = true;
            this.addForm = {
                name: "",
                age: 0,
                phone: ""
            };
        },
        handleClose(done) {
            // this.$confirm("确认关闭？")
            //     .then(_ => {
            //         done();
            //     })
            //     .catch(_ => {});
            done();
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
};
</script>
<style lang="stylus" type="text/stylus">
* {
    margin: 0;
    padding: 0;
}

h1 {
    height: 100px;
    line-height: 100px;
}

.el-table__header {
    height: 50px;
    line-height: 50px;
    text-align: center;
}

// .router-btn {
// display: inline-block;
// width: 100%;
// height: 100%;
// color: #fff;
// }
.el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
    text-align: center;
}
</style>

