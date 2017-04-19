# Resume
需要建立 config.js，並存放在根目錄下
```js
module.exports = {
  connectName: 'xxxx', // session cookie name
  secretKey: 'xxxxxxxxxxxxxxxx' // session secret key,
  recaptchaKey: 'xxxxxxxxxxxx' // google recaptcha key,
  userName: 'xxx', // 查看留言的帳號
  password: 'xxx', // 查看留言的密碼
  mongodbPath: 'mongodb://xxx:xxx@127.0.0.1:27017/xxxx?authSource=xxxx' // mongodb path
}
```
