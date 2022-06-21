import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import getData from "../Redux/api";
import Dictionarydisplay from "./Dictionarydisplay";
import { useLocation } from "react-router-dom";

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
      <div>
           <Dictionarydisplay
           prop={dictionary}
           />      
      </div>
        // 
      )

  
}

export default Dictionary
// data={console.log(data)}
          // phonetics={data.phonetics.map(pronounce => pronounce.text)}
          // sound={data.phonetics.map(sounds => sounds.audio)}
          //  key={generate()}
          //  word={data.word}
          //  partsOfSpeech={data.meanings.map((meaning) => meaning.partOfSpeech)}
          //  antonmys={data.meanings.map(meaning => meaning.antonyms.map(antonmy => antonmy))}
          //  meaning= {data.meanings.map((meaning) => meaning.definitions.map(definition => definition.definition))}
          //  synonyms= {data.meanings.map((meaning) => meaning.synonyms)}