import React, { useState, useEffect } from 'react'
import './blockOne.scss'
import RadioButton from './RadioButton'


const BlockOne = ({setOptionMade, reset, setReset }) => {  

  const [selected, setSelected] = useState('');
  
  const firstOptionChange = () => {
    setSelected('First option');
  };
  const secondOptionChange = () => {
    setSelected('Second option');
  };
  const thirdOptionChange = () => {
    setSelected('Random option');
  };

  function passChosenOption() {
    setOptionMade(selected);
  }; 
  
  useEffect(() => {
    if (reset === true) {
      setSelected('')
    }
    return () => {
      setReset(false)
    }
  },[reset, setReset]);

  return (
    <>
    <div className="blockOne">
      <div className="fieldset">        
            <RadioButton 
              label="First option"
              value={selected === "First option"}
              onChange={firstOptionChange}
              checked={passChosenOption()}
            />
            <RadioButton 
              label="Second option"
              value={selected === "Second option"}
              onChange={secondOptionChange}
              checked={passChosenOption()}
            />
            <RadioButton 
              label="Random option"
              value={selected === "Random option"}
              onChange={thirdOptionChange}
              checked={passChosenOption()}
            />
      </div>
    </div>
    </>
  )
};

export default BlockOne;
