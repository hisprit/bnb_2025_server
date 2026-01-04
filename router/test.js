const Router = require('@koa/router');
const router = new Router();

router.get('/', async (ctx) => {
	const ip = ctx.ipv4
	ctx.body = {
		msg: "API TEST",
		msg2: "이게 뜨는지 확인할 것",
		ip,
	}
})

module.exports = router;