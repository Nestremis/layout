import React from 'react'
import './blockTwo.scss'
import records from '../records.json';

const BlockTwo = ({ optionMade, setCurrentRecord, currentRecord, setAddedRecord }) => {

  let random = Math.floor(Math.random() * records.length);

  const handleReplace = () => {
    if (optionMade === 'First option') {
      setCurrentRecord(records[0].content);
    } else if (optionMade === 'Second option') {
      setCurrentRecord(records[1].content)
    } else if (optionMade === 'Third option') {
      setCurrentRecord(records[random].content)
    }
  };

  const handleAddText = () => {    
      const nextRandomText = records[random].content;

      if (currentRecord !== nextRandomText) {
        setAddedRecord(nextRandomText)
      } else if (currentRecord === nextRandomText) {
        setAddedRecord('CONTENT REPEATED - DRAW THE NEXT ONE');
      }
  };

  return (
    <div className="blockTwo">

        <button 
          onClick={() => handleReplace()}
        > 
          REPLACE 
        </button>

        <button 
          onClick={() => handleAddText()}
        > 
          DOCK 
        </button>

    </div>
  )
};
      
export default BlockTwo;