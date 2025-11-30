function getIpv4(ip) {
  // ::ffff:127.0.0.1
  // :로 나눠서 배열을 만들면 마지막 배열에 ip가 있다. 
  const arr = ip.split(":");
  return arr[arr.length - 1];
}

module.exports = async (ctx, next) => {
  // ctx.request.headers['x-forwarded-for'] 는 Nginx에서 헤더에 넣은 실제 IP
  console.log("con ip --> " ctx.request.headers['x-forwarded-for'])
  ctx.ipv4 = ctx.request.headers['x-forwarded-for'] || getIpv4(ctx.ip);
  await next();

}