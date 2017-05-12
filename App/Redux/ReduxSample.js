import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';


const {Types, Creators} = createActions({
    helloWorld: null,
    increment: null,
    decrement: null
});

export const ReduxSampleTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
    oie: true,
    counter: 0
})

export const helloWorld = (msg) =>
    console.log("Olá mundo", msg)

export const increment = (state) =>
    state.merge({counter: state.counter + 1})

export const decrement = (state) =>
    state.merge({counter: state.counter -1})

export const reducer = createReducer(INITIAL_STATE,{
    [Types.HELLO_WORLD] : helloWorld,
    [Types.INCREMENT] : increment,
    [Types.DECREMENT] : decrement
});

