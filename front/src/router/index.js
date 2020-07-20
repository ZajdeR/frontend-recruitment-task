import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import FieldZipCode from "@/views/FieldZipCode";
import ListOperators from "@/views/ListOperators";
import FormLogin from "@/views/FormLogin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/task/1",
    name: "FieldZipCode",
    component: FieldZipCode
  },
  {
    path: "/task/2",
    name: "ListOperators",
    component: ListOperators
  },
  {
    path: "/task/3",
    name: "FormLogin",
    component: FormLogin
  },
  {
    path: '*',
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
