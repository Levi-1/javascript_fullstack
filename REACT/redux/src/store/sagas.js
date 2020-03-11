import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTYPE'
import axios from 'axios'
import { initListAction } from './actionCreator'

function* getInitList() {
  try {
    const res = yield axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1')
    const action = initListAction(Object.keys(res.data.hotComments[0]))
    // 不建议使用promise
    yield put(action)
  } catch (e) {
    console.log('请求失败')
  }

  //   axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
  //             console.log(res)
  //             const data = res.data
  //             const action = initListAction(Object.keys(data.hotComments[0]))
  //             // store.dispatch(action)
  //             console.log(action)
  //         })
}

function* mySaga() { // sagas必须要是generate函数
  yield takeEvery(GET_INIT_LIST, getInitList) // 捕获action的type执行getInitList
}

export default mySaga;