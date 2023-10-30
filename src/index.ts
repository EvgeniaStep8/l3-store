import "./icons";
import Router from "./router";
import { cartService } from "./services/cart.service";
import { userService } from "./services/user.service";
import { favService } from "./services/favourites.service";

new Router();
cartService.init();
userService.init();
favService.init();

setTimeout(() => {
  document.body.classList.add("is__ready");
}, 250);
