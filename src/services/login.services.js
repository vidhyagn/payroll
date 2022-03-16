import axios from 'axios'
import {API_PATH} from '../constants/index'
import {commonService} from "./common.services";

export const loginForm = {
    login,
    sessionValidate
};

function login(username, passs) {

    let params = {
        "username": username,
        "password": passs,
        "deviceid": "",
    }
    return commonService.sendHttpRequest('login/userlogin', params, "POST");

}

function sessionValidate(sid, uid) {
    return axios.post(API_PATH + 'login/checksession', {

        "sid": sid,
        "uid": uid,

    })
}
