import {combineReducers} from 'redux';

const listUsersdata = (state = {Users:{data:[],count:'',totalitems:''}, todoUsers:[],searchParam:{search:"",company:'',designation:'',team:''}, autocompleteSearch : false,loading : 0}, action) => {

    switch (action.type) {
        case 'USER_LOADING' :
            return {
                ...state,
                loading: action.loading,
            };
        case "LIST_USERS_DATA":
            return {
                ...state,
                Users: action.listUsers.data.results,
                searchParam:action.searchParam
            };
            break;
        case "LIST_TODO_USERS_DATA":
            return {
                ...state,
                Users: action.listUsers,
                todoUsers: action.listUsers,
                autocompleteSearch : !!action.search,
                searchParam:action.searchParam

            };
            break;
        default:
            return state;
    }
};


export const Users = combineReducers({
    listUsersdata
});

export default Users;

export const getCurrentState = state => state.Users;
