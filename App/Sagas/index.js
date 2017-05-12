import { takeLatest, takeEvery } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { ReduxSampleTypes } from '../Redux/ReduxSample'

/* ------------- Sagas ------------- */

import { helloWorld } from './SampleSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(ReduxSampleTypes.HELLO_WORLD, helloWorld)
  ]
}
