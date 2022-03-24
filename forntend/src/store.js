import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import {
	userSigninReducer,
	userRegisterReducer,
	userUpdateReducer,
	userAdminReducer
  } from './reducers/userReducers';

  import {
    profileCreateReducer,
    profileDetailsReducer
    } from './reducers/profileReducers';  

    import {
      preferenceCreateReducer, pergerenceDetailsReducer
      } from './reducers/preferenceReducers';  


const userInfo = Cookie.get('userInfo')? JSON.parse(Cookie.get('userInfo')): null;
//const profile_info = Cookie.get('profile')? JSON.parse(Cookie.get('profile')): null;

const initialState = {
  userSignin: { userInfo },
  profileinfo: {  },
  //customer: { shipping: {} },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,

  profileCreateUpdate: profileCreateReducer,
  profileDetails: profileDetailsReducer,

  preferenceCreateUpdate: preferenceCreateReducer,
  preferenceDetails: pergerenceDetailsReducer
  
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;