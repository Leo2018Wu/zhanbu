'use strict';
exports.main = async (event, context) => {
  // event里包含着客户端提交的参数
  const res = await uniCloud.getPhoneNumber({
  	appid: '__UNI__4060F91', // 替换成自己开通一键登录的应用的DCloud appid
  	provider: 'univerify',
  	access_token: event.queryStringParameters.access_token,
  	openid: event.queryStringParameters.openid,
  })

  //console.log(res); // res里包含手机号
  // 执行用户信息入库等操作，正常情况下不要把完整手机号返回给前端
  // 如果数据库在uniCloud上，可以直接入库
  // 如果数据库不在uniCloud上，可以通过 uniCloud.httpclient API，将手机号通过http方式传递给其他服务器的接口，详见：https://doc.dcloud.net.cn/uniCloud/cf-functions?id=httpclient
  return {
    code: 0,
    message: '获取手机号成功',
	res
  }
}
