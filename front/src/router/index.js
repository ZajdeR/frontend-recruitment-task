import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import FormDelivery from "@/views/FormDelivery";
import ListOperators from "@/views/ListOperators";
import FormLogin from "@/views/FormLogin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/task/1",
    name: "FormDelivery",
    component: FormDelivery
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
