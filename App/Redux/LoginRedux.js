import { createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    loginRequest: ['username', 'password'],
    loginSuccess: ['username'],
    loginFailure: ['error'],
    logout: null
});

export const LoginTypes = Types;
export default Creators;

 /* ------------- Initial state ------------- */

export const INITIAL_STATE = Immutable({
    username: null,
    error: null,
    fetching: false
});

 /* ------------- Reducers ------------- */

export const request = (state) => state.merge({fetching: true});

export const success = (state, {username}) =>
    state.merge({ fetching: false, error:null, username});

export const failure = (state, {error}) =>
    state.merge({ fetching: false, error});

export const logout = (state) => INITIAL_STATE;


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_REQUEST]: request,
    [Types.LOGIN_SUCCESS]: success,
    [Types.LOGIN_FAILURE]: failure,
    [Types.LOGOUT]: logout
});

/* ------------- Selectors ------------- */

// Is the current user logged in? // return an boolean
export const isLoggedIn = (loginState) => loginState.username !== null

