import { hello, hello2 } from "./export.js";

setInterval(function () {

    hello.world++;
    hello2.world2--;

}, 500)