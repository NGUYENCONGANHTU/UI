import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Policy from "@/views/Policy.vue";
import About from "@/views/About.vue";
import Product from "@/views/Product.vue";
import ShoppingCart from "@/views/ShoppingCart.vue";
import OrderForm from "@/components/Order/OrderForm.vue";
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
    {
      path: "/shoppingCart",
      name: "ShoppingCart",
      component: ShoppingCart,
    },
    {
      path: "/orderForm",
      name: "OrderForm",
      component: OrderForm,
    },
  ],
});

export default router;
