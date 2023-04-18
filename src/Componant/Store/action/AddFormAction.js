import axios from "axios";
import { adddFormDataUrl } from "../ApiSheet";
import { ADD_FORM_DATA_ERROR, ADD_FORM_DATA_LOADING, ADD_FORM_DATA_SUCCESS } from "../Constant";

export const AddformAction = (details) => {
    console.log(details);
    return (dispatch) => {
      dispatch({
        type: ADD_FORM_DATA_LOADING,
      });
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url: `${adddFormDataUrl}`,
        data: details
      };
      axios(requestOptions)
        .then((resp) => {
            // console.log(resp,"resp");
          dispatch({
            type: ADD_FORM_DATA_SUCCESS,
            response: {
              data: resp.data.data,
              msg: resp.data.message
            }
          })
        })
        .catch((error) => {
          let data = error.response;
          if (!error.response) {
            dispatch({
              type: ADD_FORM_DATA_ERROR,
              netError: error,
            });
   
          } else
            if (data.status === 422) {
              let validationError = data.data.message;
              dispatch({
                type: ADD_FORM_DATA_ERROR,
                errors: validationError
              });
            }
        });
    };
   }