import Vue from "vue";
import VueRouter from "vue-router";
import LocalSearch from "@/components/LocalSearch.vue";
import LocalSort from "@/components/LocalSort.vue";
import selectDemo from "@/components/selectDemo.vue";
import TodoList from "@/components/TodoList/TodoList.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/selectDemo" },
  { path: "/selectDemo", component: selectDemo },
  { path: "/LocalSearch", component: LocalSearch },
  { path: "/LocalSort", component: LocalSort },
  { path: "/TodoList", component: TodoList }
];

const router = new VueRouter({
  routes
});

export default router;
