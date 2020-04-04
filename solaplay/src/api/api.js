let apiUrl = 'http://47.240.11.130:8209/'
let API = {
  // 注册发送验证码
  VerificationCode: apiUrl + 'userGame/sendCaptcha',
  // 注册验证验证码
  InspectVerificationCode: apiUrl + 'userGame/verfiyCaptcha',
  // 注册
  RegisterReg: apiUrl + 'userGame/reg',
  // 登入
  Login: apiUrl + 'userGame/login',
  // 忘记密码发送邮件
  ForgetPwd: apiUrl + 'userGame/forgetPwd',
  // 查询用户余额
  QueryBal: apiUrl + 'userGame/queryBal',
  // 查询最近充值游戏
  LastGame: apiUrl + 'depositQuery/lastGame'
}
export default {
  API: API
}
