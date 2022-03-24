import Axios from "axios";
import Cookie from 'js-cookie';
import { 
	PROFILE_CREATE_REQUEST, 
	PROFILE_CREATE_SUCCESS, 
	PROFILE_CREATE_FAIL,
	PROFILE_LIST_REQUEST,
	PROFILE_LIST_SUCCESS,
	PROFILE_LIST_FAIL,
	PROFILE_DETAILS_REQUEST,
	PROFILE_DETAILS_SUCCESS,
	PROFILE_DETAILS_FAIL} from "../constants/profileConstants";

const profileCreateanduUpdate = (profile) => async (dispatch, getState) => {
	try {
	  dispatch({ type: PROFILE_CREATE_REQUEST, payload: profile });
	  const { userSignin: { userInfo }, } = getState();
	  if (!profile._id) {
		const { data } = await Axios.post('http://localhost:5000/api/profiles', profile, {
		  headers: {
			Authorization: 'Bearer ' + userInfo.token,
		  },
		});
		Cookie.set('profile', JSON.stringify(data));
		dispatch({ type: PROFILE_CREATE_SUCCESS, payload: data });
	  } else {
		const { data } = await Axios.put(
		  'http://localhost:5000/api/profiles/' + profile._id, profile,
		  {
			headers: {
			  Authorization: 'Bearer ' + userInfo.token,
			},
		  }
		);
		Cookie.set('profile', JSON.stringify(data));
		dispatch({ type: PROFILE_CREATE_SUCCESS, payload: data });
	  }
	} catch (error) {
	  dispatch({ type: PROFILE_CREATE_FAIL, payload: error.message });
	}
  };

//   const listlinks = (
// 	// category = '',
// 	// searchKeyword = '',
// 	// sortOrder = ''
//   ) => async (dispatch, getState) => {
// 	try {
// 	  dispatch({ type: LINK_LIST_REQUEST });
// 	  const { userSignin: { userInfo } } = getState();
// 	  const { data } = await Axios.get(
// 		`http://localhost:5000/api/links/${userInfo._id}/mine`
// 		//   category +
// 		//   '&searchKeyword=' +
// 		//   searchKeyword +
// 		//   '&sortOrder=' +
// 		//   sortOrder
// 	  );
// 	  dispatch({ type: LINK_LIST_SUCCESS, payload: data });
// 	} catch (error) {
// 	  dispatch({ type: LINK_LIST_FAIL, payload: error.message });
// 	}
//   };

  const detailsProfile = (profileid) => async (dispatch) => {
	try {
	  dispatch({ type: PROFILE_DETAILS_REQUEST, payload: profileid });
	  const { data } = await Axios.get('http://localhost:5000/api/profiles/' + profileid);
	  console.log(data)
	  dispatch({ type: PROFILE_DETAILS_SUCCESS, payload: data });
	} catch (error) {
	  dispatch({ type: PROFILE_DETAILS_FAIL, payload: error.message });
	}
  };
export { profileCreateanduUpdate, detailsProfile }