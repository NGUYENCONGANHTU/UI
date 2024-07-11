import { Constants } from "@/constants/constants";   

export const UserLoginInfo = {
  methods: {
    /**
    * Set User login from local storage
    */
    setUserLogin (user) {
      localStorage.setItem(Constants.userInfo, JSON.stringify(user));
    },

    /**
     * Get User login from local storage
     */
    getUserLogin () {
      return JSON.parse(localStorage.getItem(Constants.userInfo))
    },

    /**
     * Remove User login from local storage
     */
    removeUserLogin () {
      localStorage.removeItem(Constants.userInfo);
    },

    /**
     * add Cookie
     */
    // addCookie(token)
    // {
    //     // set datetime Cookie
    //     var now = new Date();
    //     var time = now.getTime();
    //     var expireTime = time + 1000*36000;
    //     now.setTime(expireTime);
    
    //     document.cookie = "token="+token+"; expires="+now.toUTCString()+"; path=/";
    // },

    /**
     * DeleteCookie
     */

    // clearAuthToken()
    // {
    //   document.cookie = "token=";
    // }
  }
}