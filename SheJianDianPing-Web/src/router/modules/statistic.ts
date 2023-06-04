// 最简代码，也就是这些字段必须有
export default {
  path: "/statistic",
  meta: {
    title: "数据下载",
    icon: "dashicons:database"
  },
  children: [
    {
      path: "/statistic",
      name: "Fighting",
      component: () => import("@/views/statistic.vue"),
      meta: {
        title: "数据下载"
      }
    }
  ]
};
