import { call,apply, put, takeEvery, takeLatest,delay } from 'redux-saga/effects';

//获取登录的用户名
function* getUser(){
   yield console.log('user');
}

//根部saga
function* rootSaga(){
    yield   takeLatest("GET_USER",getUser);
}

export default rootSaga;