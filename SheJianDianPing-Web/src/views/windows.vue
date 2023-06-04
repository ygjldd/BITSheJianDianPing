<!-- <template>
  <div>
    <el-select v-model="canteen" placeholder="选择食堂">
      <el-option
        v-for="option in canteens"
        :value="option.value"
        :label="option.label"
        :key="option.value"
      />
    </el-select>

    <el-select v-model="floor" placeholder="选择楼层">
      <el-option
        v-for="option in floors"
        :value="option.value"
        :label="option.label"
        :key="option.value"
      />
    </el-select>

    <el-input-number v-model="window" placeholder="窗口号" />

    <el-button @click="submit_add" type="primary">增加窗口</el-button>
    <el-button @click="submit_delete" type="danger">删除窗口</el-button>
  </div>
</template> -->

<template>
  <div class="table-container">
    <el-space direction="vertical" size="large">
      <el-tag class="custom-tag" size="large">
        在此处添加或删除营业窗口
      </el-tag>

      <el-card shadow="never" class="custom-card">
        <template #header>
          <div class="card-header">
            <span>添加或删除窗口</span>
          </div>
        </template>
        <el-form :model="formData" label-width="120px">
          <el-form-item label="选择食堂">
            <el-select v-model="canteen" placeholder="选择食堂">
              <el-option
                v-for="option in canteens"
                :value="option.value"
                :label="option.label"
                :key="option.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="选择楼层">
            <el-select v-model="floor" placeholder="选择楼层">
              <el-option
                v-for="option in floors"
                :value="option.value"
                :label="option.label"
                :key="option.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="窗口号">
            <el-input-number v-model="window" placeholder="窗口号" />
          </el-form-item>

          <el-form-item>
            <el-button @click="submit_add" type="primary">增加窗口</el-button>
            <el-button @click="submit_delete" type="danger">删除窗口</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-space>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh; /* 设置容器的高度，根据需要进行调整 */
}

.custom-tag {
  width: 77vw;
  justify-content: flex-start;
}

.custom-card {
  width: 77vw;
  justify-content: flex-start;
}
</style>

<script>
import { message } from "@/utils/message";
export default {
  data() {
    return {
      canteen: null,
      floor: null,
      window: 1,
      canteens: [
        { label: "北食堂", value: 1 },
        { label: "清真食堂", value: 2 },
        { label: "南食堂", value: 3 },
        { label: "东食堂", value: 4 }
      ],
      floors: Array.from({ length: 3 }, (_, i) => ({
        label: `楼层${i + 1}`,
        value: i + 1
      }))
    };
  },
  methods: {
    // POST
    async submit_add() {
      const data = {
        canteen: this.canteen,
        floor: this.floor,
        window: this.window
      };

      const myHeaders = new Headers();
      myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: "follow"
      };

      try {
        const response = await fetch(
          "/test/api/admin_page/add_window",
          requestOptions
        );
        const result = await response.json();
        console.log(result.code);
        if (result.code == 200) {
          message("成功添加窗口", { type: "success" });
        } else {
          message("添加窗口失败", { type: "error" });
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    // DELETE
    async submit_delete() {
      const window_to_delete = {
        canteen: this.canteen,
        floor: this.floor,
        window: this.window
      };
      const myHeaders = new Headers();
      myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: JSON.stringify(window_to_delete),
        redirect: "follow"
      };

      try {
        const response = await fetch(
          "/test/api/admin_page/delete_window",
          requestOptions
        );
        const result = await response.json();
        console.log(result);

        if (result.code == 200) {
          message("窗口已被删除", { type: "success" });
        } else {
          message("删除窗口失败", { type: "error" });
        }
      } catch (error) {
        console.log("error", error);
      }
    }
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
