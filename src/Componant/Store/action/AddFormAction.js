import axios from "axios";
import { adddFormDataUrl, fileUploadUrl } from "../ApiSheet";
import {
  ADD_FORM_DATA_ERROR,
  ADD_FORM_DATA_LOADING,
  ADD_FORM_DATA_SUCCESS,
  FILE_UPLOAD,
} from "../Constant";

export const AddformAction = (details) => {
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
      data: details,
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
};

const file = (data) => ({
  type: FILE_UPLOAD,
  payload: data,
});

export const fileUpload = (x) => {
  console.log("57", x);
  // return function (dispatch) {
  //   dispatch(file(x))
  //   const formData = new FormData();

  //   for (let i = 0; i < e.target.files.length; i++) {
  //     formData.append('image', e.target.files[i])
  //   }

  //   axios.post("https://primecon-backend.onrender.com/v1/user/upload-file", formData)
  //     .then((res) => {
  //       setinputChangeValue({
  //         ...inputChangeValue,
  //         files: res.data.data
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
};
