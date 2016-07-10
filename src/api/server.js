const Koa = require('koa');
const logger = require('koa-logger');
const app = new Koa();

app.use(logger())

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
