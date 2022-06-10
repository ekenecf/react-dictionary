import ActionTypes from "./Actions"

const initialData = {
    dictionaryData: [],
    loading: false,
    error: false,
}

const dataReducer = (state=initialData, {type, payload}) => {
  switch (type) {
    case ActionTypes.FETCH_DATA:
        return {
            ...state, dictionaryData: payload, loading: false, error: false
        };
    case ActionTypes.FETCH_DATA_LOADING:
        return {
            ...state, loading:true
        };
    case ActionTypes.FETCH_DATA_ERROR:
        return {
            ...state, error:true
        };
        default: return state
    }
}
export default dataReducer