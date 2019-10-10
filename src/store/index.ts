import Vue from 'vue';
import Vuex from 'vuex';
import { IUserState } from './modules/user'
Vue.use(Vuex);

export interface IRootState {
  user: IUserState
}

// 动态注入模块 Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})


// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules:{   
//   }
// });
