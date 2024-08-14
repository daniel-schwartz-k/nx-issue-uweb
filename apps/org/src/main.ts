import koa from 'koa';
import { App, SSLApp } from 'uWebSockets.js'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = new koa();

// use uWebSockets.js ...
const app2 = app ? SSLApp({}) : App()
console.log("🚀 XXXXXX ~ app2:", app2)

app.use(async (ctx) => {
  ctx.body = { message: 'Hello API' };
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
