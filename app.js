const Koa = require('koa');
const Router = require('@koa/router');
const { koaBody } = require('koa-body');
const app = new Koa();

const PORT = 3000;

app.use(koaBody()); //코아 바디 파서

const router = new Router();

router.get('/user', (ctx, next) => {
  //DB 에 연결해서 사용자 목록 가져와서 줘야 겠지만!!
  ctx.body = {
    row: '사용자 목록 배열'
  }
});
router.get('/user/:id', (ctx, next) => {
  const id = ctx.params.id;
  console.log("user Id:", id)
  ctx.body = {
    row: '사용자 정보',
    id: id,
  }
});
router.post('/user/', (ctx, next) => {
  const payload = ctx.request.body;
  ctx.body = {
    row: '유저 회원 가입',
    payload: payload,
  }
});
router.put('/user/:id', (ctx, next) => {
  const id = ctx.params.id;
  const payload = ctx.request.body;
  ctx.body = {
    row: '유저 정보 수정',
    id,
    payload,
  }
});
router.delete('/user/:id', (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = {
    row: '유저 정보 삭제',
    id,
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => console.log(`접속한 서버${PORT}에서 듣고 있음`));
