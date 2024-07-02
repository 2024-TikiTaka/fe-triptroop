import {createActions, handleActions} from "redux-actions";


const initialState = {};

const GET_LIST = ' admin/GET_LIST';
const GET_INFO = 'admin/GET_INFO';
const UPDATE = 'admin/UPDATE';
const DELETE = 'admin/DELETE';
const SUCCESS = 'admin/SUCCESS';

export const {admin: {getList, getInfo, update, delete: remove, success}} = createActions({
    [GET_LIST]: result => ({getList: result.data.result}),
    [GET_INFO]: result => ({getInfo: result.data.result}),
    [UPDATE]: result => ({updated: result.data.result}),
    [DELETE]: result => ({deleted: result.data.result}),
    [SUCCESS]: result => ({success: result.data.result})
});

const adminReducer = handleActions({
    [GET_LIST]: (state, {payload}) => payload,
    [GET_INFO]: (state, {payload}) => payload,
    [UPDATE]: (state, {payload}) => payload,
    [DELETE]: (state, {payload}) => payload,
    [SUCCESS]: (state, {payload}) => payload
}, initialState);

export default adminReducer;







