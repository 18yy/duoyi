# 前端规范
## 关于页面分布
- 图片请全部放在src\assets，名字统一使用英文
- 页面全部写成组件
- 接口全部写于services文件夹里，一个js文件对应component中的一个文件夹，即一个文件夹全部页面的接口都写于一个js文件中
- 所有样式、方法、页面代码都写于一个vue文件中，不用另开一个引入

## 关于尺寸
为了自适应第三方库，所以尺寸比例为1:1，如果量三倍图尺寸记得除以三

## 关于header组件的引用
引用这个子组件的同时，需要传送三个值

```
 <Header :title="title" :IsBack="IsBack" :pre_path="pre_path"></Header>
 //title该页的标题
 //IsBack为是否需要返回键，是则true
 //pre_path为需要回退的路径，通常由该页面路由获取。
 //如当前页面为/index/pay ，则回退路径为/index
 //至于如何获取请百度。
 //IsBack为false则pre_path可不写
```
样式已经写好，至于位置的调整，我可以给个模板，若有其他更好的方法也行

各种布局什么的希望能规划好，不要弄得那么乱，擅用element的布局容器

```
<Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>

#header {
  height: 70px;
  padding-top: 25px;
  background-color: #F9F9F9;
}
.vux-header-left {
  margin-top: 25px;
}
//头部下面的记得写个margin-top：25px；不然会盖住
```
## 关于接口的使用（axios）
- 后台的接口文档已经放到[eolinker](https://www.eolinker.com/#/home/overview?spaceKey=5DY68aS34f49763b7cc981b5eb36ed768ef2e1d9c4bcb18)中，请自行上去查看你所需要的接口
- 接口都写在services文件夹里，compone中的一个文件夹对应services文件夹里的一个js文件
### 引入接口
引入你所需的接口，先新建一个js文件，写法参照login.js
### 导出接口
引入完后记得导出，以供页面使用，在main.js中参照里面已有的继续写下去
### 使用接口
在相应页面在，导入main.js文件，怎么使用请参照login.vue里面的写法

## 页面分配
### index
- index.vue（首页的首页）
- navigation.vue（首页内部的导航部分）
- reward.vue(悬赏大厅)
- second-hand.vue（二手闲置）
- hoverButton.vue（悬浮按钮）
- search.vue（搜索页面）

###  team
- team.vue（组队首页）
- details.vue（组队详情）
- team-publish.vue（发布组队页面）
- team-published.vue（发布组队成功的页面）

### pay
- pay.vue（支付首页，由于设计稿没全，有可能有，有可能没，先写其他的）
- confirmInfo.vue（确认个人信息）
- paying.vue（支付页面）
- paid.vue（支付成功的页面）

### about
- about.vue（个人中心首页）
- information.vue（个人资料）
- published.vue（发布的闲置）
- orders.vue（我的订单，和我买下的只有一点不同，可合并，同时和上面那个有几点不同，认为也可合并，具体看开发过程）

### others
- register1.vue
- register2.vue
- login.vue
- header.vue（头部栏）
- footer.vue（底部导航）
- home.vue（主页）

# 注意注意，哪里不知道怎么写请一定要问清楚，不要写得乱七八糟，随时可以请教你们的女王大人
