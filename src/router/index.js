import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Policy from "@/views/Policy.vue";
import About from "@/views/About.vue";
import Product from "@/views/Product.vue";
import ShoppingCart from "@/views/ShoppingCart.vue";
import OrderForm from "@/components/Order/OrderForm.vue";
import SignupForm from "@/components/SignupForm/SignupForm.vue";
import LoginForm from "@/components/Login/LoginForm.vue";
// import InfoCon from "@/components/Profile/SidebarProfile/SidebarProfile.vue";
import InfoContent from "@/components/Profile/ContentProfile/InfoContent.vue";
import OrderContent from "@/components/Profile/ContentProfile/OrderContent.vue";
import ShoppingContent from "@/components/Profile/ContentProfile/ShoppingContent.vue";
import ProductDetail from "@/components/ProductDetail/ProductDetail.vue";
import Trademark from "@/components/PagaTrademark/Trademark.vue";
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
    {
      path: "/signupForm",
      name: "SignupForm",
      component: SignupForm,
    },
    {
      path: "/loginForm",
      name: "LoginForm",
      component: LoginForm,
    },
    {
      path: "/infoContent",
      name: "InfoContent",
      component: InfoContent,
    },
    {
      path: "/orderContent",
      name: "OrderContent",
      component: OrderContent,
    },
    {
      path: "/shoppingContent",
      name: "ShoppingContent",
      component: ShoppingContent,
    },
    {
      path: "/chi-tiet-san-pham/:id",
      name: "chi-tiet-san-pham",
      component: ProductDetail,
    },
    {
      path: "/Trademark",
      name: "Trademark",
      component: Trademark,
    },
  ],
});

export default router;
