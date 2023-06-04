<template>
  <div class="table-container">
    <el-space direction="vertical" size="large">
      <el-tag :style="{ width: '77vw', justifyContent: 'left' }" size="large">
        在此处可以查看食堂的数据统计信息
      </el-tag>
      <el-card
        shadow="never"
        :style="{ width: '77vw', justifyContent: 'center' }"
      >
        <template #header>
          <div class="card-header">
            <span>Tableau 数据监控中心</span>
          </div>
        </template>
        <div
          class="tableauPlaceholder"
          ref="tableau"
          style="position: relative"
        >
          <noscript
            ><a href="#"
              ><img
                alt="仪表板 1 "
                src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;_1&#47;_16832151904180&#47;1&#47;1_rss.png"
                style="border: none" /></a></noscript
          ><object class="tableauViz" style="display: none">
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="_16832151904180&#47;1" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;_1&#47;_16832151904180&#47;1&#47;1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
            <param name="filter" value="publish=yes" />
          </object>
        </div>
      </el-card>
    </el-space>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const tableau = ref(null);

    onMounted(() => {
      const divElement = tableau.value;
      const vizElement = divElement.getElementsByTagName("object")[0];
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = "1000px";
        vizElement.style.height = "827px";
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = "1000px";
        vizElement.style.height = "827px";
      } else {
        vizElement.style.width = "100%";
        vizElement.style.height = "1077px";
      }
      const scriptElement = document.createElement("script");
      scriptElement.src =
        "https://public.tableau.com/javascripts/api/viz_v1.js";
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    });

    return {
      tableau
    };
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
</style>
