import ActionTypes from "./Actions";

export const setData = (data) => ({
    type: ActionTypes.FETCH_DATA,
    payload: data,
});

export const setLoadingData = () => ({
  type: ActionTypes.FETCH_DATA_LOADING,
});

export const setError = (error) => ({
  type: ActionTypes.FETCH_DATA_ERROR,
  payload: error,
});
