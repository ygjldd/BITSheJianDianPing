<template>
  <div class="table-container">
    <el-space direction="vertical" size="large">
      <el-tag :style="{ width: '77vw', justifyContent: 'left' }" size="large">
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
            <el-button @click="fetch_review" type="primary">
              从数据库获取所有用户评论
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-space>

    <el-main>
      <el-table
        v-if="data"
        :data="paginatedData"
        :style="{ width: '77vw', justifyContent: 'center' }"
      >
        <el-table-column label="菜名" prop="dishname" />
        <el-table-column label="菜品ID" prop="dishid" />
        <el-table-column label="价格" prop="price" />
        <el-table-column label="折扣" prop="discount" />
        <el-table-column label="评价" prop="comment" />
        <el-table-column label="用户名" prop="name" />
        <el-table-column label="图片" prop="photo" />
        <el-table-column label="点赞" prop="goodnumber" />
        <el-table-column label="否定" prop="badnumber" />
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button type="text" @click="showDetail(row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        v-model:current-page="currentPage"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[5, 10, 20, 50, 100]"
        :total="totalItems"
        :style="{ width: '77vw', justifyContent: 'center' }"
      />
    </el-main>

    <el-dialog v-model="dialogVisible" title="详细内容" width="60%">
      <div v-if="selectedRow">
        <el-scrollbar style="height: 300px">
          <el-table :data="[selectedRow]" max-height="250">
            <el-table-column prop="photo" label="照片" class-name="cell-class">
              <img :src="selectedRow.photo" alt="photo" />
            </el-table-column>
            <el-table-column
              prop="commentid"
              label="评论ID"
              class-name="cell-class"
            />
            <el-table-column
              prop="dishid"
              label="菜品ID"
              class-name="cell-class"
            />
            <el-table-column
              prop="dishname"
              label="菜名"
              class-name="cell-class"
            />
            <el-table-column prop="id" label="ID" class-name="cell-class" />
            <el-table-column prop="name" label="名称" class-name="cell-class" />

            <el-table-column
              prop="datetime"
              label="日期时间"
              class-name="cell-class"
            />
            <el-table-column
              prop="goodnumber"
              label="点赞"
              class-name="cell-class"
            />
            <el-table-column
              prop="badnumber"
              label="否定"
              class-name="cell-class"
            />
            <el-table-column
              prop="discount"
              label="折扣"
              class-name="cell-class"
            />
            <el-table-column
              prop="price"
              label="价格"
              class-name="cell-class"
            />
            <el-table-column
              prop="description"
              label="描述"
              class-name="cell-class"
            />
            <el-table-column
              prop="taste"
              label="口味"
              class-name="cell-class"
            />
            <el-table-column
              prop="environment"
              label="环境"
              class-name="cell-class"
            />
            <el-table-column
              prop="serve"
              label="服务"
              class-name="cell-class"
            />
            <el-table-column
              prop="comment"
              label="评价"
              class-name="cell-class"
            />
          </el-table>
        </el-scrollbar>
      </div>
      <el-form label-position="left" style="margin-top: 0px">
        <el-form-item label="评价内容">
          <el-input
            type="textarea"
            :rows="10"
            :value="selectedRow.comment"
            :readonly="true"
            autosize
            style="height: 80px; overflow-y: auto"
          />
        </el-form-item>
      </el-form>
      <span class="dialog-footer" style="margin-top: 20px">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="danger" @click="delete_review">删除评论</el-button>
        <el-button type="warning" @click="ban_user">封禁用户</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { message } from "@/utils/message";

export default {
  name: "MyTable",
  data() {
    return {
      data: [],
      dialogVisible: false,
      selectedRow: null,
      canteen_num: null,
      floor_num: null,
      window_num: null,
      currentPage: 1,
      pageSize: 10,
      totalItems: 0,
      test_string:
        "adsfasdfasdfasdfasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasdaasdddsasda"
    };
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.data.slice(start, end);
    }
  },
  methods: {
    async fetch_review() {
      const request = {
        canteen: this.canteen_num, //食堂编号
        floor: this.floor_num, //楼层
        window: this.window_num //窗口号
      };

      const config = {
        method: "get",
        url: `/test/api/admin_page/get_comment?canteen=${request.canteen}&floor=${request.floor}&window=${request.window}`,
        headers: {
          "User-Agent": "Apifox/1.0.0 (https://apifox.com)"
        }
      };

      axios(config)
        .then(response => {
          console.log(JSON.stringify(response.data));
          console.log(response.data.data);
          console.log(response.data.data.list);
          this.data = response.data.data.list;
          this.totalItems = this.data.length; // 设置总评论数量
          if (response.data.code == 200) {
            message("评论拉取成功", { type: "success" });
          } else {
            message("评论拉取失败", { type: "error" });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      this.currentPage = 1;
    },
    async delete_review() {
      const request = {
        commentID: this.selectedRow.commentid
      };

      const config = {
        method: "delete",
        url: "/test/api/admin_page/delete_comment",
        headers: {
          "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
          "Content-Type": "application/json"
        },
        data: request
      };

      console.log(config);
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          if (response.data.code == 200) {
            message("评论删除成功", { type: "success" });
          } else {
            message("评论删除失败", { type: "error" });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      this.dialogVisible = false;
      // 在此处添加延迟
      setTimeout(() => {
        this.fetch_review();
      }, 100);
    },
    async ban_user() {
      const data = {
        userID: this.selectedRow.id
      };

      const config = {
        method: "post",
        url: "/test/api/admin_page/ban",
        headers: {
          "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
          "Content-Type": "application/json"
        },
        data: data
      };

      axios(config)
        .then(response => {
          console.log(JSON.stringify(response.data));
          if (response.data.code == 200) {
            message("用户" + this.selectedRow.name + "已被封禁", {
              type: "success"
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      this.dialogVisible = false;
      // this.fetch_review();
    },
    showDetail(row) {
      this.selectedRow = row;
      this.dialogVisible = true;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1; // 重置当前页为1
      this.fetch_review();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; 设置容器的高度，根据需要进行调整 */
}

.el-table th,
.el-table td {
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 0px;
}

.el-dialog {
  white-space: pre-wrap;
}

.el-dialog p {
  margin: 0;
  line-height: 1.5;
}

.cell-class .cell {
  overflow: auto;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.2em;
  min-height: 1.2em;
  max-height: 2.4em;
  padding: 0;
}

.el-input__inner[type="textarea"] {
  min-height: 76.8px;
}

.el-table {
  margin-bottom: 10px !important;
}
</style>
