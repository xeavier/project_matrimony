import Axios from "axios";
import Cookie from 'js-cookie';
import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL, USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL, ADMIN_SIGNIN_REQUEST, ADMIN_SIGNIN_SUCCESS, ADMIN_SIGNIN_FAIL
} from "../constants/userConstants";

const update = ({ dob,religion,mothertongue,caste,subcaste,isWillingFromMarryOtherCommunities,martialStatus,height,familyStatus,
  familyType,familvalue,isDisability,HighestEducation,Employedin,Occupation,currency,amount,country,state,city,about }) => async (dispatch, getState) => {
  const { userSignin: { userInfo } } = getState();
  console.log(userInfo)
  console.log(religion)
  dispatch({ type: USER_UPDATE_REQUEST, payload: {dob,religion,mothertongue,caste,subcaste,isWillingFromMarryOtherCommunities,martialStatus,height,familyStatus,
    familyType,familvalue,isDisability,HighestEducation,Employedin,Occupation,currency,amount,country,state,city,about } });
  try {
    const { data } = await Axios.put("http://localhost:5000/api/users/" + userInfo._id,
      { dob,religion,mothertongue,caste,subcaste,isWillingFromMarryOtherCommunities,martialStatus,height,familyStatus,
        familyType,familvalue,isDisability,HighestEducation,Employedin,Occupation,currency,amount,country,state,city,about }, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token
      }
    });
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
}

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("http://localhost:5000/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const register = (name, email, password, profilefor, gender) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password, profilefor, gender } });
  try {
    const { data } = await Axios.post("http://localhost:5000/api/users/register", { name, email, password, profilefor, gender });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}


const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT })
}
export { signin, register, logout, update };