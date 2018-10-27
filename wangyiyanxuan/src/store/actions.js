/*
/!*vue的actions模块*!/
import {
  reqData,
  reqBanner,
  reqHome,
  reqDetail,
  reqNav
} from '../api'
import {
  Data,
  Banner,
  Home,
  Detail,
  Nav,
  LoginWay
} from './mutation-types'
export default {
  //获取首页data信息
  async getData({commit},cb){
    const result = await reqData()
    commit(Data,{data:result.data})
    cb && cb()
  },
  //获取首页banner信息
  async getBanner({commit},cb){
    const result = await reqBanner()
    commit(Banner,{banner:result.focusList})
    cb && cb()
  },
  //获取home信息
  async getHome({commit},cb){
    const result = await reqHome()
    commit(Home,{result})
    cb && cb()
  },
  //获取detail页面
  async getDetail({commit},cb){
    const result = await reqDetail()
    commit(Detail,{result})
    cb && cb()
  },
  //获取nav
  async getNav({commit},cb){
    const result = await reqNav()
    commit(Nav,{result})
    cb && cb()
  },
  //设置loginWay
  setLoginWay({commit},loginWay){
    commit(LoginWay,loginWay)
  }
}
*/

import{
  reqData,
  reqBanner,
  reqDetail,
  reqHome,
  reqNav
}from '../api'
import {
  DATA_REQ,
  REQBANNER,
  REQNAV,
  REQHOME,
  REQDETAIL
} from './mutation-types'

export default {
  //获取首页数据 这个cb 什么意思

  async getData({commit}){
    const result = await reqData()
    if (result.code === 0) {
        const data = result.data
        //commit 给 mutation
      commit(DATA_REQ,{data})
    }
  },
  async getBanner({commit},cb){
    const result = await reqBanner()
    if (result.code === 0) {
      const banner = result.focusList
      commit(REQBANNER, {banner})
    }
    cb && cb()
  },
  async getDetail({commit}){
    const result = await reqDetail()
    if (result.code === 0) {
      const detail = result.detail
      //commit 给 mutation
      commit(REQDETAIL,{detail})
    }
  },

  async getHome({commit}){
    const result = await reqHome()
    if (result.code === 0) {
      const home = result.home
      //commit 给 mutation
      commit(REQHOME,{home})
    }
  },
  async getNav({commit}){
    const result = await reqNav()
    if (result.code === 0) {
      const nav = result.nav
      //commit 给 mutation
      commit(REQNAV,{nav})
    }
  },
}

