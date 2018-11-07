# 前端规范
## 关于页面分布
- 图片请全部放在src\assets，名字统一使用英文
- 页面全部写成组件
- 接口全部写于services文件夹里，一个js文件对应component中的一个文件夹，即一个文件夹全部页面的接口都写于一个js文件中
- 所有样式、方法、页面代码都写于一个vue文件中，不用另开一个引入

## 关于尺寸
为了自适应第三方库，所以尺寸比例为1:1，如果量三倍图尺寸记得除以三


各种布局什么的希望能规划好，不要弄得那么乱，请擅用element的布局容器

## 关于接口的使用（axios）
- 后台的接口文档已经放到[eolinker](https://www.eolinker.com/#/home/overview?spaceKey=5DY68aS34f49763b7cc981b5eb36ed768ef2e1d9c4bcb18)中，请自行上去查看你所需要的接口
- 接口都写在services文件夹里，component中的一个文件夹对应services文件夹里的一个js文件
### 引入接口
引入你所需的接口，先新建一个js文件，写法参照login.js

先把接口按页面分开写，再把接口集中到main.js中集体导出
### 导出接口
引入完后记得导出，以供页面使用，在main.js中参照里面已有的继续写下去
### 使用接口
在相应页面中，导入main.js文件，怎么使用请参照login.vue里面的写法

## 页面分配（1.0）
### index
- index（首页的首页）
- navigation（首页内部的导航部分）
- reward(悬赏大厅)
- second-hand（二手闲置）
- hoverButton（悬浮按钮）
- search（搜索页面）

###  team
- team（组队首页）
- details（组队详情）
- team-publish（发布组队页面）
- team-published（发布组队成功的页面）

### pay
- paying1（确认个人信息）
- paying2（支付页面）
- paid（支付成功的页面）

### about
- about（个人中心首页）
- basicInfo（资料卡片）
- information（个人资料）
- unused（我发布的闲置）
- orders（我的订单）
- bought（我买下的）
- entrust（我发布的委托）
- entrusting（我接受的委托）
- entrusted（已完成的委托）

### others
- footer.vue（底部导航）
- home.vue（主页）

### login
- register（注册）
- login（登录）

