import {
  ADD_FORM_DATA_ERROR,
  ADD_FORM_DATA_LOADING,
  ADD_FORM_DATA_RESET,
  ADD_FORM_DATA_SUCCESS,
} from "../Constant";

const initialState = {
  formData: [],
  error: null,
  errors: [],
};

const AddformReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM_DATA_LOADING:
      return { ...state, error: null, errors: [] };

    case ADD_FORM_DATA_SUCCESS:
      return { ...state, error: null, errors: [], formData: action.data };

    case ADD_FORM_DATA_ERROR:
      return { ...state, error: null, errors: []};

    case ADD_FORM_DATA_RESET:
        return { ...state, formData: [], error: null, errors: [] };

    default:
      return state;
  }
};

export default AddformReducer;
