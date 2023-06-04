<template>
  <div class="table_container">
    <el-space direction="vertical" size="large">
      <div class="table-container">
        <el-space direction="vertical" size="large">
          <el-tag
            :style="{ width: '77vw', justifyContent: 'left' }"
            size="large"
          >
            在此处选择食堂编号、楼层和窗口号
          </el-tag>

          <el-card
            shadow="never"
            :style="{ width: '77vw', justifyContent: 'center' }"
          >
            <template #header>
              <div class="card-header">
                <span>选择食堂编号、楼层和窗口号</span>
              </div>
            </template>
            <el-form :model="formData" label-width="120px">
              <el-form-item label="选择食堂编号">
                <el-select v-model="canteen_num" placeholder="请选择食堂编号">
                  <el-option label="北食堂" value="1" />
                  <el-option label="清真食堂" value="2" />
                  <el-option label="南食堂" value="3" />
                  <el-option label="东食堂" value="4" />
                  <!-- 更多选项 -->
                </el-select>
              </el-form-item>

              <el-form-item label="选择楼层">
                <el-select v-model="floor_num" placeholder="请选择楼层">
                  <el-option label="楼层1" value="1" />
                  <el-option label="楼层2" value="2" />
                  <el-option label="楼层3" value="3" />
                  <!-- 更多选项 -->
                </el-select>
              </el-form-item>
              <el-form-item label="窗口号">
                <el-input-number v-model="window_num" placeholder="窗口号" />
              </el-form-item>

              <el-form-item>
                <el-button @click="fetchData" type="primary">
                  获取选定窗口的菜品
                </el-button>
                <el-button @click="openAddFoodDialog" type="primary">
                  向选定窗口添加菜品
                </el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-space>

        <el-table
          :data="tableData"
          :style="{ width: '77vw', justifyContent: 'center' }"
        >
          <el-table-column prop="id" label="菜品ID" width="120" />
          <el-table-column prop="name" label="菜品名" width="120" />
          <el-table-column prop="description" label="菜品描述" />
          <el-table-column prop="discount" label="折扣" />
          <el-table-column prop="flavor" label="口味" />
          <!-- <el-table-column prop="photo" label="图片" /> -->
          <el-table-column prop="price" label="价格" />
          <el-table-column label="操作" fixed="right" width="100">
            <template #default="{ row }">
              <el-button type="danger" @click="handleDelete(row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-dialog v-model="dialogVisible" title="提示" width="30%">
          <div class="dialog-content">
            <p class="dialog-message">确定删除该菜品吗?</p>
            <div class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="confirmDelete">确定</el-button>
            </div>
          </div>
        </el-dialog>
        <el-dialog v-model="addFoodDialogVisible" title="添加菜品" width="50%">
          <el-form model="newDish">
            <el-form-item label="菜品名" label-width="80px">
              <el-input v-model="newDish.name" />
            </el-form-item>
            <el-form-item label="菜品描述" label-width="80px">
              <el-input v-model="newDish.description" />
            </el-form-item>
            <el-form-item label="折扣" label-width="80px">
              <el-input-number
                v-model="newDish.discount"
                :min="0"
                :max="1"
                step="0.01"
              />
            </el-form-item>
            <el-form-item label="口味" label-width="80px">
              <el-select v-model="newDish.flavor">
                <el-option label="酸" value="0" />
                <el-option label="甜" value="1" />
                <el-option label="苦" value="2" />
                <el-option label="辣" value="3" />
                <el-option label="咸" value="4" />
                <el-option label="鲜" value="5" />
              </el-select>
            </el-form-item>
            <el-form-item label="菜品ID" label-width="80px">
              <el-input-number v-model="newDish.id" />
            </el-form-item>
            <el-form-item label="图片" label-width="80px">
              <el-input v-model="newDish.photo" />
            </el-form-item>
            <el-form-item label="价格" label-width="80px">
              <el-input-number v-model="newDish.price" :min="0" />
            </el-form-item>
          </el-form>

          <span class="dialog-footer">
            <el-button @click="addFoodDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="submitNewDish">提交</el-button>
          </span>
        </el-dialog>
      </div>
    </el-space>
  </div>
</template>

<script>
import axios from "axios";
import { message } from "@/utils/message";
// axios.defaults.baseURL = "/api";

export default {
  data() {
    return {
      tableData: null,
      canteen_num: null,
      floor_num: null,
      window_num: null,
      dialogVisible: false,
      dishIdToDelete: null,
      addFoodDialogVisible: false, // 新添加的变量，用于控制添加菜品的对话框的显示与隐藏
      newDish: {
        // 新添加的对象，用于保存新菜品的数据
        canteen: null,
        description: "",
        discount: null,
        flavor: null,
        floor: null,
        id: null,
        name: "",
        photo: "",
        price: null,
        window: null
      }
    };
  },

  methods: {
    async fetchData() {
      const url = `test/api/admin_page/get_dish_list?canteen=${this.canteen_num}&floor=${this.floor_num}&window=${this.window_num}`;
      const config = {
        method: "get",
        url: url,
        headers: {
          "User-Agent": "Apifox/1.0.0 (https://apifox.com)"
        }
      };

      console.log(config);

      axios(config)
        .then(response => {
          console.log(JSON.stringify(response.data));
          console.log(response.data.data);
          console.log(response.data.data.list);
          this.tableData = response.data.data.list; // 在这里更新tableData属性
          message("当前窗口有" + this.tableData.length + "件菜品", {
            type: "success"
          });
          console.log(this.tableData);
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleDelete(id) {
      this.dialogVisible = true;
      this.dishIdToDelete = id;
    },
    async confirmDelete() {
      try {
        const response = await axios.delete("test/api/admin_page/delete_dish", {
          headers: {
            "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
            "Content-Type": "application/json"
          },
          data: { id: this.dishIdToDelete }
        });

        if (response.data.code === 200) {
          this.tableData = this.tableData.filter(
            dish => dish.id !== this.dishIdToDelete
          );
          message("删除成功:" + response.data.message, { type: "success" });
        } else {
          message("删除失败:" + response.data.message, { teype: "error" });
          console.error("删除失败:", response.data.message);
        }
        //删除后立即调用数据获取更新当前列表
        this.fetchData();
        this.dialogVisible = false;
      } catch (error) {
        console.error(error);
      }
      this.dialogVisible = false;
    },
    openAddFoodDialog() {
      // 打开添加菜品的对话框
      this.addFoodDialogVisible = true;
    },
    async submitNewDish() {
      //更新NewDish数据
      this.newDish.canteen = this.canteen_num;
      this.newDish.floor = this.floor_num;
      this.newDish.window = this.window_num;
      // 提交新菜品的数据
      try {
        const response = await axios.post(
          "/test/api/admin_page/add_dish",
          this.newDish,
          {
            headers: {
              "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
              "Content-Type": "application/json"
            }
          }
        );

        if (response.data.code === 200) {
          this.addFoodDialogVisible = false;
          this.fetchData(); // 刷新菜品列表
          console.log(response);
        } else {
          console.error("添加菜品失败:", response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style scoped>
.el-table .el-table__body-wrapper tbody tr {
  max-height: 100px; /* 设置最大高度，根据需要调整数值 */
  overflow: hidden; /* 超出最大高度时隐藏内容 */
}

.table_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; 设置容器的高度，根据需要进行调整 */
}
.dialog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.dialog-message {
  margin-bottom: 20px;
}

.dialog-footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
