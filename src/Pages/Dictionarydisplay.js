import React from "react";
import { generate } from "randomized-string";
import '../Pages/Dictionarydisplay.css';

const Dictionarydisplay = ({prop}) => {
    const meanings = prop.meanings
    const dictmeanings = {...meanings}
    const dictionaryArrayMeanings = Object.values(dictmeanings)
    const objectDictionaryArrayMeanings = {...dictionaryArrayMeanings[0]}
    const dictMeaning = {...objectDictionaryArrayMeanings.antonyms}
    const dictMeaningAntonymValues = Object.values(dictMeaning)
    const objectDictionaryArrayDefinitions = objectDictionaryArrayMeanings.definitions
    const objectDictionaryArrayDefinitionsValues = {...objectDictionaryArrayDefinitions}
    const dictionaryMeanings = Object.values(objectDictionaryArrayDefinitionsValues)
    const synonmys = {...objectDictionaryArrayMeanings.synonyms}
    const similarMeaning = Object.values(synonmys)

    return (
        <div className="dictionary_meaning">
           <p className="word">word: {prop.word}</p>
           <p className="phonetic">Phonetic: {prop.phonetic} </p>
           <div>{dictMeaningAntonymValues.map(meaning => <p className="antonyms">Antonym: {meaning}</p> )}</div>
           <div>{similarMeaning.map(closeMeaning => <p className="synonyms" key={generate()}>Synonyms: {closeMeaning}</p> )}</div>
           <div>{dictionaryArrayMeanings.map(pos => <p className="PartsOfspeech" key={generate()}>partOfSpeech: {pos.partOfSpeech}</p> )}</div>
           <div>{dictionaryMeanings.map(defMeaning => <p className="definition" key={generate()}>Definition: {defMeaning.definition}</p> )}</div>
        </div>
    )
}
export default Dictionarydisplay