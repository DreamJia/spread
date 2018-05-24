<template>
    <div style="width:100%;height:100%;overflow-y:auto; ">
        <h1 style="line-height:60px;font-size:16px;">订单管理</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-input v-model="form.name" style="width:100px;" placeholder="用户ID"></el-input>
            <el-select v-model="value" placeholder="所属代理商">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="购买的模块">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <label for="">是否免费</label>
            <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
            <el-button type="primary" @click="filtrate">搜索</el-button>
        </el-form>
        <div style="height:20px;"></div>
        <el-table :data="orderData" border v-loading="listLoading">
            <el-table-column prop="orderNumber" label="订单编号" width="150">
            </el-table-column>
            <el-table-column prop="orderTime" label="订购时间" width="120">
            </el-table-column>
            <el-table-column prop="userId" label="用户ID" width="120">
            </el-table-column>
            <el-table-column prop="belongToAgent" label="所属代理商" width="120">
            </el-table-column>
            <el-table-column prop="buyMoudle" label="购买的功能模块" width="300">
            </el-table-column>
            <el-table-column prop="isFree" label="是否免费" width="120">
            </el-table-column>
            <el-table-column prop="expireTime" label="到期时间" width="120">
            </el-table-column>
            <el-table-column prop="orderTotal" label="订单金额" width="120">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <!-- <el-button type="text" size="small">编辑</el-button> -->
                </template>
            </el-table-column>
        </el-table>
        <div style="height:20px;"></div>
        <div class="block fr">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="40">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
export default {
    created() {
        axios.get("static/orderData.json").then(res => {
            this.orderData = res.data.arr;
            // console.log(this.orderData);

            this.listLoading = false;
        });
    },
    data() {
        return {
            orderData: [],
            listLoading: true,
            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            },
            options: [
                {
                    value: "代理商1",
                    label: "代理商1"
                },
                {
                    value: "代理商2",
                    label: "代理商2"
                },
                {
                    value: "代理商3",
                    label: "代理商3"
                },
                {
                    value: "代理商4",
                    label: "代理商4"
                },
                {
                    value: "代理商5",
                    label: "代理商5"
                }
            ],
            value: "",
            value3: true,
            value4: true,
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                }
            },
            value1: "",
            value2: ""
        };
    },
    methods: {
        handleClick(data) {
            this.lookVisible = true;
            this.editArr = data;
            console.log(this.editArr);
        },
        //点击搜索
        filtrate() {
            console.log();
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
