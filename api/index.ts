import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  name: "Ednaldo Cordeiro",
  url: "https://www.instagram.com/ednaldo_cordeiro_/",
});
books.set("2", {
  id: "2",
  name: "Ítalo Gustavo",
  url: "https://www.instagram.com/ita_gustavo/",
});
books.set("3", {
  id: "3",
  name: "Lavínia Leite",
  url: "https://www.instagram.com/laviis_leite/",
});

const router = new Router()
  .get("/users", (context) => {
    context.response.body = Array.from(books.values());
  })

const app = new Application();

app.use(async (context, next) => {
  try {
    await context.send({
      root: `../`,
      index: "index.html",
    })
  } catch {
    await next();
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });