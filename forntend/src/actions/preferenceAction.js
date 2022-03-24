import Axios from "axios";
import Cookie from 'js-cookie';
import { 
	PREFERNCE_CREATE_REQUEST, 
	PREFERNCE_CREATE_SUCCESS, 
	PREFERNCE_CREATE_FAIL,
	PREFERNCE_LIST_REQUEST,
	PREFERNCE_LIST_SUCCESS,
	PREFERNCE_LIST_FAIL,
	PREFERNCE_DETAILS_REQUEST,
	PREFERNCE_DETAILS_SUCCESS,
	PREFERNCE_DETAILS_FAIL} from "../constants/preferenceConstants";

const preferencesCreateanduUpdate = (preferences) => async (dispatch, getState) => {
	try {
	  dispatch({ type: PREFERNCE_CREATE_REQUEST, payload: preferences });
	  const { userSignin: { userInfo }, } = getState();
	  if (!preferences._id) {
		const { data } = await Axios.post('http://localhost:5000/api/preferences', preferences, {
		  headers: {
			Authorization: 'Bearer ' + userInfo.token,
		  },
		});
		//Cookie.set('profile', JSON.stringify(data));
		dispatch({ type: PREFERNCE_CREATE_SUCCESS, payload: data });
	  } else {
		const { data } = await Axios.put(
		  'http://localhost:5000/api/preferences/' + preferences._id, preferences,
		  {
			headers: {
			  Authorization: 'Bearer ' + userInfo.token,
			},
		  }
		);
		//Cookie.set('profile', JSON.stringify(data));
		dispatch({ type: PREFERNCE_CREATE_SUCCESS, payload: data });
	  }
	} catch (error) {
	  dispatch({ type: PREFERNCE_CREATE_FAIL, payload: error.message });
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

  const detailsPreferences = (Preferenceid) => async (dispatch) => {
	try {
	  dispatch({ type: PREFERNCE_DETAILS_REQUEST, payload: Preferenceid });
	  const { data } = await Axios.get('http://localhost:5000/api/preferences/' + Preferenceid);
	  console.log(data)
	  dispatch({ type: PREFERNCE_DETAILS_SUCCESS, payload: data });
	} catch (error) {
	  dispatch({ type: PREFERNCE_DETAILS_FAIL, payload: error.message });
	}
  };
export { preferencesCreateanduUpdate, detailsPreferences }