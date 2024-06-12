import {createActions, handleActions} from "redux-actions";


const initialState = {
    getList: [],
    getInfo: {},
    added: null,
    updated: null,
    deleted: null,
    success: null,
    failure: null,
};

const GET_LIST = 'admin/GET_LIST';
const GET_INFO = 'admin/GET_INFO';
const ADD = 'admin/ADD';
const UPDATE = 'admin/UPDATE';
const DELETE = 'admin/DELETE';
const SUCCESS = 'admin/SUCCESS';
const FAILURE = 'admin/FAILURE';

export const {admin: {getList, getInfo, add, update, delete: remove, success, failure}} = createActions({
    [GET_LIST]: result => ({getList: result.data.result}),
    [GET_INFO]: result => ({getInfo: result.data.result}),
    [ADD]: result => ({added: result.data.result}),
    [UPDATE]: result => ({updated: result.data.result}),
    [DELETE]: result => ({deleted: result.data.result}),
    [SUCCESS]: result => ({success: result.data.result}),
    [FAILURE]: result => ({failure: result.data.result})
});
//
// const adminReducer = handleActions({
//     [GET_LIST]: (state, {payload}) => ({...state, getList: payload.getList}),
//     [GET_INFO]: (state, {payload}) => ({...state, getInfo: payload.getInfo}),
//     [ADD]: (state, {payload}) => ({...state, added: payload.added}),
//     [UPDATE]: (state, {payload}) => ({...state, updated: payload.updated}),
//     [DELETE]: (state, {payload}) => ({...state, deleted: payload.deleted}),
//     [SUCCESS]: (state, {payload}) => ({...state, success: payload.success}),
//     [FAILURE]: (state, {payload}) => ({...state, failure: payload.failure})
// }, initialState);
const adminReducer = handleActions({
    [GET_LIST]: (state, {payload}) => payload,
    [GET_INFO]: (state, {payload}) => payload,
    [ADD]: (state, {payload}) => payload,
    [UPDATE]: (state, {payload}) => payload,
    [DELETE]: (state, {payload}) => payload,
    [SUCCESS]: (state, {payload}) => payload,
    [FAILURE]: (state, {payload}) => payload
}, initialState);

export default adminReducer;







