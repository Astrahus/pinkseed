import { put , call, select} from 'redux-saga/effects'

import {ReduxSampleTypes} from '../Redux/ReduxSample';


export const  selectState = (state)  => state
export function * helloWorld(name) {
    yield console.log('hola',name);
    const stateGeral = yield select(selectState)
    // yield put(ReduxSampleTypes);
    console.log('geral', stateGeral)

}