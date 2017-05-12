import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';


//store creator
export default (rootReducer, rootSaga) => {

    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];

    /* ------------- Saga Middleware ------------- */

    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(rootReducer, compose(...enhancers))

    
    sagaMiddleware.run(rootSaga)

    return store
}