import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Policy from "@/views/Policy.vue";
import About from "@/views/About.vue";
import Product from "@/views/Product.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/policy",
      name: "Policy",
      component: Policy,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/product",
      name: "Product",
      component: Product,
    },
  ],
});

export default router;
