import { KeepAlive } from "vue";

// 最简代码，也就是这些字段必须有
export default {
  path: "/food",
  meta: {
    title: "菜品管理",
    icon: "ic:baseline-restaurant",
    keepAlive: true
  },
  children: [
    {
      path: "/food",
      name: "菜品管理",
      component: () => import("@/views/food.vue"),
      meta: {
        title: "菜品管理",
        keepAlive: true
      }
    }
  ]
};
