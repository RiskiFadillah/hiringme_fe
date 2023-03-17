import axios from "axios";
// import { useParams } from "react-router-dom";

const getAllprofileRequest = () => {
  return {
    type: "GET_ALL_DATA_PROFILE_REQUEST",
  };
};

const getAllProfileSuccess = (data) => {
  return {
    type: "GET_ALL_DATA_PROFILE_SUCCESS",
    payload: data,
  };
};

const getAllProfileFail = (err) => {
  return {
    type: "GET_ALL_DATA_PROFILE_FAIL",
    payload: err,
  };
};

export const getAllProfile = () => {
  return (dispatch) => {
    dispatch(getAllprofileRequest());
    return axios
      .get(`http://localhost:5000/api/v1/users`)
      .then((res) => {
        dispatch(getAllProfileSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getAllProfileFail(err.response.data));
      });
  };
};

//GET BY ID

const getProfileByIdRequest = (id) => {
  return {
    type: "GET_DATA_PROFILE_BY_ID_REQUEST",
    payload: id,
  };
};

const getProfileByIdSuccess = (data) => {
  return {
    type: "GET_DATA_PROFILE_BY_ID_SUCCESS",
    payload: data,
  };
};

const getProfileByIdFail = (err) => {
  return {
    type: "GET_DATA_PROFILE_BY_ID_FAIL",
    payload: err,
  };
};

export const getProfileById = (id) => {
  return (dispatch) => {
    dispatch(getProfileByIdRequest(id));
    return axios
      .get(`https://gas-crack-production.up.railway.app/api/v1/users/${id}`)
      .then((res) => {
        dispatch(getProfileByIdSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getProfileByIdFail(err.response.data));
      });
  };
};



