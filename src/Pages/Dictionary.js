import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import getData from "../Redux/api";
import Dictionarydisplay from "./Dictionarydisplay";
import { useLocation } from "react-router-dom";
import '../Pages/Dictionary.css';

const Dictionary = () => {
    const { dictionaryData, loading, error } = useSelector((state) => state.dataReducer)
    const location = useLocation()
    const { state } = location.state || {}

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getData(state));
    }, [dispatch]);

   const dictionary = {...dictionaryData[0]}

    if (loading) {
        return (
          <div className="loadingImage">
            <img
              src="https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif"
              alt="imageloading..." 
            />
          </div>
        );
      }
      if (error) {
        return <p>Please refresh the page</p>;
      }
      return (
      <div className="display">
           <Dictionarydisplay
           prop={dictionary}
           />      
      </div>
      )
}
export default Dictionary
