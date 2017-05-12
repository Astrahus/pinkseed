import { put } from 'redux-saga/effects'

export function * helloWorld(name) {

    yield console.log(`lá ${name}`);

}