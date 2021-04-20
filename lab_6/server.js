const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const HomeRoutes = require('./routes/home.router');
const PostRoutes = require('./routes/post.routes');
const dal = require('./dal');

const app = new koa();


app.use(bodyparser());
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());

app.use(bodyparser());
app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());


app.use(ctx =>{
    ctx.body = 'Hello World';
});
app.listen(3000);
console.log('Application Running on port 3000');

