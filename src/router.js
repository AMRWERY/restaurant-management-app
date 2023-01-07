import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./ui/HomePage.vue";
import SignUp from "./ui/SignUp.vue";
import LogIn from "./ui/LogIn.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import UpdateRestaurant from './components/UpdateRestaurant.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "HomePage", component: HomePage },
    { path: "/sign-up", name: "SignUp", component: SignUp },
    { path: "/login", name: "LogIn", component: LogIn },
    { path: "/add", name: "AddRestaurant", component: AddRestaurant },
    { path: "/update/:id", name: "UpdateRestaurant", component: UpdateRestaurant },
  ],
});

export default router;
