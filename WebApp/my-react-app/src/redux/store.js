// applyMiddleware:生成中间模块
//compose :合并多个中间件
import {createStore,applyMiddleware,compose} from 'redux';

import rootReducer from './reducer'

//引入调试工具
import {composeWithDevTools} from 'redux-devtools-extension';
//引入redux-saga中间件
import createSagaMiddleware from 'redux-saga';

//引入中间件配置文件
import rootSaga from './rootSaga.js'
//创建中间件
const sagaMiddleware = createSagaMiddleware();
//将中间件连接到Store
let enhancer = applyMiddleware(sagaMiddleware);
//引入调试工具  把多个中间件通过compose组合成一中间件
enhancer = compose(enhancer,composeWithDevTools())

const store = createStore(rootReducer,enhancer);

// 4.运行 Saga配置
sagaMiddleware.run(rootSaga);

export default store;