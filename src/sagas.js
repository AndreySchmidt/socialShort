import '@babel/polyfill'
// import { takeLatest, all } from 'redux-saga/effects'
// import { call, put, select, takeLatest, all } from 'saga/effects'
import { call, put, select, takeLatest, all } from 'redux-saga/effects'
import { LOAD_ARTICLE_LIST_ACTION, LOAD_ARTICLE_LIST_SUCCESSED_ACTION } from './constants'
// import { reposLoaded, repoLoadingError } from './actions'
import { loadArticleList, loadArticlesListSuccessed, loadArticlesListFailed } from './actions'
import { getArticleList } from './API'

// import request from 'utils/request'
// import { makeSelectUsername } from 'containers/HomePage/selectors'

// export function * onLoadData (action) {
//   try {
//     const { dashboardGuid, userKey } = action.payload
//     const response = yield call(api.getData, dashboardGuid, userKey)
//     const result = response.getData
//     yield put(actions.loadDataSucceededAction(result))
//   } catch (error) {
//     yield put(actions.loadDataFailedAction(error))
//   }
// }
//
// function * loadDataWatcher () {
//   yield takeLatest(actionsTypes.LOAD_DATA_ACTION, onLoadData)
// }

export function * getArticlesSaga () {
  // console.log('I`m saga 2')
  try {
    const articleList = yield getArticleList()
    yield put(loadArticlesListSuccessed(articleList))
    // console.log(arr)
  } catch (error) {
    yield put(loadArticlesListFailed(error))
  }
  // const username = yield select(makeSelectUsername())
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`
  //
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const repos = yield call(request, requestURL)
  //   yield put(loadArticleList(repos, username))
  // } catch (err) {
  //   yield put(loadArticleListError(err))
  // }
}

export function * watchArticlesSaga () {
  // console.log('I`m saga 1')
  yield takeLatest(LOAD_ARTICLE_LIST_ACTION, getArticlesSaga)
}

export default function * rootSaga () {
  yield all([
    // getArticlesSaga(),
    // watchArticlesSaga()
    call(getArticlesSaga),
    call(watchArticlesSaga)
  ])
}
// const sagaDataTest = sagaData()
// const takeLatestDescriptor = sagaDataTest.next().value
