import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import getData from "../Redux/api";

const Dictionary = () => {
    const {dictionaryData, loading, error} = useSelector((state) => state.dataReducer)
    console.log(dictionaryData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData());
      }, []);


      


    return (
        <div>Dictionary</div>
    )
}

export default Dictionary