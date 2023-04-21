import axios from "axios";
import { adddFormDataUrl } from "../ApiSheet";
import { ADD_FORM_DATA_ERROR, ADD_FORM_DATA_LOADING, ADD_FORM_DATA_SUCCESS } from "../Constant";

export const AddformAction = (details) => {
  console.log('6', details);

  const formData = new FormData()
  formData.append('name', details.name)
  formData.append('email', details.email)
  formData.append('number', details.number)
  formData.append('pincode', details.pincode)
  formData.append('message', details.message)

  console.log('15', formData);

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
    // axios(requestOptions)
    //   .then((resp) => {
    //     console.log(resp, "resp");
    //     dispatch({
    //       type: ADD_FORM_DATA_SUCCESS,
    //       response: {
    //         data: resp.data.data,
    //         msg: resp.data.message
    //       }
    //     })
    //   })
    // .catch((error) => {
    //   let data = error.response;
    //   if (!error.response) {
    //     dispatch({
    //       type: ADD_FORM_DATA_ERROR,
    //       netError: error,
    //     });
    //   }
    // else {
    //   if (data.status === 422) {
    //     let validationError = data.data.message;
    //     dispatch({
    //       type: ADD_FORM_DATA_ERROR,
    //       errors: validationError
    //     });
    //   }
    // }
    // });
  };
}

export const fileUpload = (x) => {
  console.log('62', x)
}