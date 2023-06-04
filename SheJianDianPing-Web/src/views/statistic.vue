<template>
  <div class="table-container">
    <el-space direction="vertical" size="large">
      <el-tag :style="{ width: '77vw', justifyContent: 'left' }" size="large">
        在此处选择食堂编号、楼层和窗口号并获取窗口的历史流量统计
      </el-tag>

      <el-card
        shadow="never"
        :style="{ width: '77vw', justifyContent: 'center' }"
      >
        <template #header>
          <div class="card-header">
            <span>流量数据查询</span>
          </div>
        </template>
        <el-form :model="formData" label-width="120px">
          <el-form-item label="食堂编号" style="width: 40%">
            <el-select v-model="formData.canteen" placeholder="请选择">
              <el-option label="北食堂" value="1" />
              <el-option label="清真食堂" value="2" />
              <el-option label="南食堂" value="3" />
              <el-option label="东食堂" value="4" />
            </el-select>
          </el-form-item>
          <el-form-item label="楼层号" style="width: 20%">
            <el-input v-model.number="formData.floor" />
          </el-form-item>
          <el-form-item label="窗口号" style="width: 20%">
            <el-input v-model.number="formData.window" />
          </el-form-item>
          <el-form-item label="开始时间">
            <el-date-picker
              v-model="formData.StartTime"
              type="datetime"
              placeholder="选择日期时间"
            />
          </el-form-item>
          <el-form-item label="结束时间">
            <el-date-picker
              v-model="formData.EndTime"
              type="datetime"
              placeholder="选择日期时间"
            />
          </el-form-item>
          <el-form-item class="button-row">
            <div class="button-container">
              <el-button type="primary" @click="submitForm"
                >查询流量数据</el-button
              >
              <el-button type="danger" @click="showDeleteConfirmation"
                >删除查询记录</el-button
              >
              <el-button type="success" @click="downloadCSV"
                >下载CSV文件</el-button
              >
            </div>
          </el-form-item>
        </el-form>
      </el-card>
    </el-space>

    <el-dialog
      title="确认删除"
      v-model="deleteConfirmationVisible"
      width="30%"
      @close="cancelDelete"
    >
      <el-form>
        <el-form-item label="确认要删除记录吗？" />
      </el-form>
      <div
        class="dialog-footer"
        style="display: flex, justify-content: center,margin-top: 50px, margin-bottom:5px"
      >
        <el-button @click="deleteHistory" type="danger">确认删除</el-button>
        <el-button @click="cancelDelete">取消</el-button>
      </div>
    </el-dialog>

    <el-table :data="trafficData" style="width: 77vw">
      <el-table-column prop="canteen" label="食堂编号" />
      <el-table-column prop="floor" label="楼层号" />
      <el-table-column prop="window" label="窗口号" />
      <el-table-column prop="humanTraffic" label="人流量" />
      <el-table-column prop="time.startTime" label="开始时间" />
      <el-table-column prop="time.endTime" label="结束时间" />
    </el-table>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import axios from "axios";
import { message } from "@/utils/message";

export default {
  data() {
    return {
      formData: {
        canteen: null,
        floor: null,
        window: null,
        StartTime: null,
        EndTime: null
      },
      trafficData: [],
      deleteConfirmationVisible: false
    };
  },
  methods: {
    async submitForm() {
      console.log(this.formData);
      const response = await axios({
        method: "get",
        url: `test/api/home_page/traffic_monitoring/download?canteen=${this.formData.canteen}&floor=${this.formData.floor}&window=${this.formData.window}&StartTime=${this.formData.StartTime}&EndTime=${this.formData.EndTime}`,
        headers: {
          "User-Agent": "Apifox/1.0.0 (https://apifox.com)"
        }
      });
      console.log(response.data);
      if (response.data.code == 200) {
        message("查询成功", { type: "success" });
        this.trafficData.push(response.data.data);
        // console.log(response.data);
      } else {
        message("查询失败", { type: "error" });
        // console.log(response.data.message);
      }
    },
    showDeleteConfirmation() {
      this.deleteConfirmationVisible = true;
    },

    cancelDelete() {
      this.deleteConfirmationVisible = false;
    },

    deleteHistory() {
      this.trafficData = [];
      this.cancelDelete();
    },
    downloadCSV() {
      let csvContent = "食堂编号,楼层号,窗口号,人流量,开始时间,结束时间\n";
      this.trafficData.forEach(row => {
        csvContent += `${row.canteen},${row.floor},${row.window},${row.humanTraffic},${row.time.startTime},${row.time.endTime}\n`;
      });

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      FileSaver.saveAs(blob, "trafficData.csv");
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
.button-row {
  display: flex;
  justify-content: flex-start;
}

.button-container {
  display: flex;
  gap: 5px; /* 可根据需要调整按钮之间的间距 */
}
</style>
