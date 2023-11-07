import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.body = "Welcome to index endpoint";
});

router.get("/login", (ctx) => {
  ctx.response.body = "Welcome to login endpoint"
});

router.get("/create", (ctx) => {
  ctx.response.body = "Welcome to createuser endpoint"
});

router.get("/about", (ctx) => {
  ctx.response.body = "Welcome to about endpoint"
});

router.get("/logout", (ctx) => {
  ctx.response.body = "Welcome to logout endpoint"
});



app.use(router.routes());
app.use(router.allowedMethods());

console.log("Oak server is running on http://localhost:8000");

await app.listen({ port: 8000 });

