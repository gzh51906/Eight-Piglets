import { call,apply, put, takeEvery, takeLatest,delay } from 'redux-saga/effects';
import Api from '@/api'

//获取登录的用户名
function* getUser(){ 
     const res = yield call(Api.checkToken);
     let user = '';
     if(res){
         user = localStorage.getItem('username');
     }
   yield user;
}

//根部saga
function* rootSaga(){
    yield   takeLatest("GET_USER",getUser);
}

export default rootSaga;