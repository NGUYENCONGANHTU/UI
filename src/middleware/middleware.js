import Cookies from "js-cookie";
import { Constants } from "@/constants/constants";
import { UserLoginInfo } from "@/cheetah-core/mixins/user-login-info";

export function authenticatorLogin(to, from, next) {
  // get token
  const getTokenCookie = Cookies.get(Constants.tokenUser);
  // get user info
  const me = UserLoginInfo.methods.getUser(Constants.me);
  // check admin login
  if (getTokenCookie && me) {
    const isAuthenticated = getTokenCookie === me.token;
    console.log(isAuthenticated);
    if (isAuthenticated) {
      next();
    } else {
      next("/loginForm");
    }
  } else {
    next("/loginForm");
  }
}