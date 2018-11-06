import services from './services.js'

//注册
function register(fn, data) {
    services.post('/duoyi/register', data)
      .then(function (res) {
        fn(false, res);
      }).catch(function (err) {
        fn(err);
      });
}

//登录
function login(fn, data) {
    services.post('/duoyi/login', data)
      .then(function (res) {
        fn(false, res);
      }).catch(function (err) {
        fn(err);
      });
} 

export {
    register,
    login
  }
  