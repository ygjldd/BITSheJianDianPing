export default {
  path: "/reviews",
  meta: {
    icon: "informationLine",
    title: "评论管理",
    // showLink: false,
    rank: 10
  },
  children: [
    {
      path: "/reviews",
      name: "可以不写名称",
      component: () => import("@/views/reviews.vue"),
      meta: {
        title: "评论管理",
        icon: "ic:baseline-rate-review"
      }
    }
  ]
} as RouteConfigsTable;
