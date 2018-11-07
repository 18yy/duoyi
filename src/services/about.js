import services from './services.js'

//获取用户信息
function getInfo(fn) {
	services.post('/duoyi/user/get')
      .then(function (res) {
        fn(false, res);
      }).catch(function (err) {
        fn(err);
      });
}

export {
    getInfo
}