
import { Router } from "https://deno.land/x/oak/mod.ts";
// import {
//   getUsers,
//   getUser,
//   addUser,
//   updateUser,
//   deleteUser,
// } from "./controller/user.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
});

router.get("/users", (ctx) => {ctx.response.body = JSON.stringify({"name": "Julian"})});
router.get("/book", () => {return {"name": "Vitória"}});
export default router;