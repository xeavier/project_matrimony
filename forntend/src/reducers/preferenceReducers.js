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
  
  
function preferenceCreateReducer(state = { performance: {} }, action) {
  switch (action.type) {
	case PREFERNCE_CREATE_REQUEST:
	  return { loading: true };
	case PREFERNCE_CREATE_SUCCESS:
	  return { loading: false, success: true, performance: action.payload };
	case PREFERNCE_CREATE_FAIL:
	  return { loading: false, error: action.payload };
	default:
	  return state;
  }
}

function linkListReducer(state = { links: [] }, action) {
  switch (action.type) {
	case PREFERNCE_LIST_REQUEST:
	  return { loading: true, links: [] };
	case PREFERNCE_LIST_SUCCESS:
	  return { loading: false, links: action.payload };
	case PREFERNCE_LIST_FAIL:
	  return { loading: false, error: action.payload };
	default:
	  return state;
  }
}

function pergerenceDetailsReducer(state = { performance: []}, action) {
  switch (action.type) {
	case PREFERNCE_DETAILS_REQUEST:
	  return { loading: true, performance: []};
	case PREFERNCE_DETAILS_SUCCESS:
	  return { loading: false, performance: action.payload };
	  console.log(action.payload)
	case PREFERNCE_DETAILS_FAIL:
	  return { loading: false, error: action.payload };
	default:
	  return state;
  }
}
export { preferenceCreateReducer, pergerenceDetailsReducer }