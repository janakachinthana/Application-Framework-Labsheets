const Router = require('@koa/router');

const router = new Router({
    prefix: '/home'
});

router.get('/', ctx=>{
    ctx.body = 'welcome to home page';
});
router.get('/home2', ctx=>{
    ctx.body = 'welcome to home 2 page';
});

router.post('/', ctx => {
    ctx.body = 'Hi janaka';
});


module.exports = router;