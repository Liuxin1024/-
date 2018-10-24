/*
/!*vuex的mutations模块*!/
import {
  Data,
  Banner,
  Home,
  Detail,
  Nav,
  LoginWay
} from './mutation-types'
export default {
  [Data](state,{data}) {
    state.data = data
  },
  [Banner](state,{banner}) {
    state.banner = banner
  },
  [Home](state,{result}) {
    const {home} = result
    state.home = home
  },
  [Detail](state,{result}) {
    const {detail} = result
    state.detail = detail
  },
  [Nav](state,{result}) {
    const {nav} = result
    state.nav = nav
  },
  [LoginWay](state,loginWay) {
    state.loginWay = loginWay
  },
}
*/
import {
  DATA_REQ,
  REQBANNER,
  REQDETAIL,
  REQHOME,
  REQNAV
} from './mutation-types'

export default {
  [DATA_REQ](state,{data}){
    state.data = data
  },
  [REQBANNER](state,{banner}){
    state.banner = banner
  },
  [REQDETAIL](state,{detail}){
    state.detail = detail
  },
  [REQHOME](state,{home}){
    state.home = home
  },
  [REQNAV](state,{nav}){
    state.nav = nav
  }
}


