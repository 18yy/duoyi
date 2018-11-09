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

//用户更改头像
function updateImg(fn, data, config) {
	services.post('/duoyi/user/img', data, config)
      .then(function (res) {
        fn(false, res);
      }).catch(function (err) {
        fn(err);
	});
}

//用户更新自己的信息
function updateInfo(fn, data) {
	services.post('/duoyi/user/update', data)
    .then(function (res) {
        fn(false, res);
    }).catch(function (err) {
        fn(err);
    });
}

//获取我发布的闲置
function getAllByUserid(fn) {
	services.get('/duoyi/goods/getAllByUserid')
	.then(function (res) {
	    fn(false, res);
	}).catch(function (err) {
	    fn(err);
	});
}

//删除闲置
function deleteUnused(fn, goodsid) {
	services.get('/duoyi/goods/delete?goodsid=' + goodsid, goodsid)
	.then(function (res) {
	    fn(false, res);
	}).catch(function (err) {
	    fn(err);
	});
}

//编辑闲置信息

//获取我的订单
function selectOrders(fn) {
	services.post('/duoyi/order/selectOrders')
	.then(function (res) {
	    fn(false, res);
	}).catch(function (err) {
	    fn(err);
	});
}

//删除我的订单
function deleteOrders(fn, data) {
	services.post('/duoyi/order/delectOrder', data)
	.then(function (res) {
	    fn(false, res);
	}).catch(function (err) {
	    fn(err);
	});
}

//获取我买下的

//获取我发布的委托
//获取我接受的委托
//获取我完成的委托

export {
    getInfo,
    updateImg,
    updateInfo,
    getAllByUserid,
    deleteUnused,
    selectOrders,
    deleteOrders
}