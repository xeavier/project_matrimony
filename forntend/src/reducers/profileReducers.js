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
	
	
  function profileCreateReducer(state = { profile: {} }, action) {
	switch (action.type) {
	  case PROFILE_CREATE_REQUEST:
		return { loading: true };
	  case PROFILE_CREATE_SUCCESS:
		return { loading: false, success: true, profile: action.payload };
	  case PROFILE_CREATE_FAIL:
		return { loading: false, error: action.payload };
	  default:
		return state;
	}
  }
  
  function linkListReducer(state = { links: [] }, action) {
	switch (action.type) {
	  case PROFILE_LIST_REQUEST:
		return { loading: true, links: [] };
	  case PROFILE_LIST_SUCCESS:
		return { loading: false, links: action.payload };
	  case PROFILE_LIST_FAIL:
		return { loading: false, error: action.payload };
	  default:
		return state;
	}
  }
  
  function profileDetailsReducer(state = { profile: []}, action) {
	switch (action.type) {
	  case PROFILE_DETAILS_REQUEST:
		return { loading: true, profile: []};
	  case PROFILE_DETAILS_SUCCESS:
		return { loading: false, profile: action.payload };
		console.log(action.payload)
	  case PROFILE_DETAILS_FAIL:
		return { loading: false, error: action.payload };
	  default:
		return state;
	}
  }
  export { profileCreateReducer, profileDetailsReducer }