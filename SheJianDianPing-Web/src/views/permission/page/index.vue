<template>
  <div class="table-container">
    <el-space direction="vertical" size="large">
      <el-tag :style="elStyle" size="large" effect="dark" type="danger">
        请谨慎添加管理员用户
      </el-tag>
      <el-card shadow="never" :style="elStyle">
        <template #header>
          <div class="card-header">
            <span>添加管理员用户</span>
          </div>
        </template>
        <el-select v-model="username" @change="onChange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-card>

      <el-card shadow="never" :style="elStyle">
        <el-form @submit.prevent="onSubmit" label-width="100px" align="right">
          <el-form-item label="管理员ID">
            <el-input v-model="newAdmin.adminID" placeholder="请输入管理员ID" />
          </el-form-item>
          <el-form-item label="ID" label-width="100px" align="right">
            <el-input v-model="newAdmin.id" placeholder="请输入ID" />
          </el-form-item>
          <el-form-item label="密码" label-width="100px" align="right">
            <el-input
              v-model="newAdmin.password"
              placeholder="请输入密码"
              type="password"
            />
          </el-form-item>
          <el-form-item label="手机号码" label-width="100px" align="right">
            <el-input v-model="newAdmin.phoNum" placeholder="请输入手机号码" />
          </el-form-item>
          <el-form-item label="用户名" label-width="100px" align="right">
            <el-input v-model="newAdmin.userName" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit"
              >添加管理员</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-space>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { message } from "@/utils/message";
import { initRouter } from "@/router/utils";
import { storageSession } from "@pureadmin/utils";
import { CSSProperties, ref, computed } from "vue";
import { useUserStoreHook } from "@/store/modules/user";
import { usePermissionStoreHook } from "@/store/modules/permission";

export default {
  name: "PermissionPage",
  setup() {
    const elStyle = computed<CSSProperties>(() => ({
      width: "77vw",
      justifyContent: "start"
    }));

    const username = ref(useUserStoreHook()?.username);

    const options = [
      {
        value: "admin",
        label: "添加根管理员"
      },
      {
        value: "common",
        label: "添加普通管理员"
      }
    ];

    function onChange() {
      useUserStoreHook()
        .loginByUsername({ username: username.value, password: "admin123" })
        .then(res => {
          if (res.success) {
            storageSession().removeItem("async-routes");
            usePermissionStoreHook().clearAllCachePage();
            initRouter();
          }
        });
    }

    const newAdmin = ref({
      adminID: "",
      id: "",
      password: "",
      phoNum: "",
      userName: ""
    });

    function onSubmit() {
      const data = JSON.stringify(newAdmin.value);
      console.log(data);

      const config = {
        method: "post",
        url: "/test/api/sign_up_admin",
        headers: {
          "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
          "Content-Type": "application/json"
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          if (response.data.code == 200) {
            message("添加管理员成功", { type: "success" });
          } else {
            message("添加管理员失败:" + response.data.message, {
              type: "error"
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return {
      elStyle,
      username,
      options,
      onChange,
      newAdmin,
      onSubmit
    };
  }
};
</script>
<style>
.table-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; 设置容器的高度，根据需要进行调整 */
}
.custom {
  width: 77vw;
  justify-content: start;
}
</style>
