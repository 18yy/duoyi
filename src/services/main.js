// 用户信息
import {
    register,
    login
} from './login.js'


import {
    getInfo,
    updateImg,
    updateInfo,
    getAllByUserid,
    deleteUnused,
    selectOrders,
    deleteOrder,
    getBought
} from './about.js'

import {
    addGoods,
    showGoods,
    insertOrder,
    payOrder
} from './secondHand.js'

export default {
    register,
    login,

    getInfo,
    updateImg,
    updateInfo,
    getAllByUserid,
    deleteUnused,
    selectOrders,
    deleteOrder,
    getBought,

    addGoods,
    showGoods,
    insertOrder,
    payOrder
}