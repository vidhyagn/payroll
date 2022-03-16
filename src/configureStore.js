import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

if (process.env.NODE_ENV === `development`) {

}

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}
