import { setData, setLoadingData, setError } from "./ActionCreactors";

const getData = (word) => (dispatch) => {
    dispatch(setLoadingData());
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setData(data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
  export default getData;