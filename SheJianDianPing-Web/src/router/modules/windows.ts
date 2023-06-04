export default {
  path: "/windows",
  redirect: "/windows/windows",
  meta: {
    icon: "informationLine",
    title: "窗口管理",
    // showLink: false,
    rank: 10
  },
  children: [
    {
      path: "/windows/windows",
      name: "可以不写名",
      component: () => import("@/views/windows.vue"),
      meta: {
        title: "窗口管理",
        icon: "subway:admin"
      }
    }
  ]
} as RouteConfigsTable;
