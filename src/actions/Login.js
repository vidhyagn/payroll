import {loginForm} from "../services/login.services";
import {login} from '../utilities/AuthService';

export const UserLogin = (username, password) => dispatch => {
    let logindata = loginForm.login(username, password);
    logindata.then(logindata => {
        console.log(logindata)
        if (logindata.code === 200) {
            if (logindata.res.success) {
                login(logindata.res.data.signin[0].Token).then(res => {
                    window.location = "/";
                })
            } else {
                alert(logindata.res.data.message)
            }
        } else {

        }

    })
};


