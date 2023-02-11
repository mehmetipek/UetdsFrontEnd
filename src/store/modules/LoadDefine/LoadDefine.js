import {savePackageB,savePackageL,savePackageUnit,savePackageTour} from "@/api/LoadDefine/LoadDefine"
import YeniYukKaydiBildir from "@/models/YeniYukKaydiBildir"
const state = {
  packageList: [],
}
const getters={
  getPackageList(state) {
    return state.packageList;
},
}
const mutations = {
  setPackageList(state, list) {
    state.packageList = list;
}
}

const actions = {
 savePackageL({commit,state,dispatch},data) {
  return new Promise((resolve, reject) => {
    savePackageL(data).then(res => {

      console.log(res);
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
},
savePackageB({commit},data){
  return new Promise((resolve, reject) => {
    savePackageB(data).then(res => {
      resolve(res)
      console.log(res);
    }).catch(error => {
      reject(error)
    })
  })
},
savePackageUnit({commit},data){
  return new Promise((resolve, reject) => {
    savePackageUnit(data).then(res => {
      resolve(res)
      console.log(res);
    }).catch(error => {
      reject(error)
    })
  })
},
savePackageTour({commit},data){
  return new Promise((resolve, reject) => {
    savePackageTour(data).then(res => {
      resolve(res)
      console.log(res);
    }).catch(error => {
      reject(error)
    })
  })
},
}

export default {
  //  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
