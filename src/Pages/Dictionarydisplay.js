import React from "react";
import { generate } from "randomized-string";

const Dictionarydisplay = ({prop}) => {
    const meanings = prop.meanings
    const dictmeanings = {...meanings}
    const dictionaryArrayMeanings = Object.values(dictmeanings)
    const objectDictionaryArrayMeanings = {...dictionaryArrayMeanings[0]}
    const objectDictionaryArrayDefinitions = objectDictionaryArrayMeanings.definitions
    const objectDictionaryArrayDefinitionsValues = {...objectDictionaryArrayDefinitions}
    const dictionaryMeanings = Object.values(objectDictionaryArrayDefinitionsValues)
    const synonmys = {...objectDictionaryArrayMeanings.synonyms}
    const similarMeaning = Object.values(synonmys)
    console.log(dictionaryArrayMeanings)

    return (
        <div >
           <p>word: {prop.word}</p>
            <p>Antonmys: {objectDictionaryArrayMeanings.antonyms}</p>
            <div>{similarMeaning.map((closeMeaning) => <p key={generate()}>Synonyms: {closeMeaning}</p> )}</div>
           <p>Phonetic: {prop.phonetic} </p>
           <div>{dictionaryArrayMeanings.map((pos) => <p key={generate()}>partOfSpeech: {pos.partOfSpeech}</p> )}</div>
           <div>{dictionaryMeanings.map((defMeaning) => <p key={generate()}>Definition: {defMeaning.definition}</p> )}</div>
        </div>
    )
}
export default Dictionarydisplay