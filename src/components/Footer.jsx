<<<<<<< HEAD
import React from 'react';
import './footer.scss';


const Footer = ({setName, setReset}) => {


    const makeReset = () => {
        setName(false); 
        setReset(true);
    };

    const showName = () => {
        setName(current => !current)  
    }; 

    return (
        <>
        <div className='footer'>
            <div className='foot-container'>   
            <div className="css-logo">              
                <div className='css'> CSS <br/> IS <br/> AWESOME</div>
                <div className='square'></div>
            </div>
               
                <h3 title='nabthat'> koa software </h3>    


                <div className="dropup">

                    <input type='checkbox' id='mark'/>                    
                    <label htmlFor='mark' className='footlabel'>
                        SHOW                         
                    </label>    
                    
                    <div className='slide'>
                        <button 
                            onClick={() => makeReset()}
                        >
                          <i></i> RESET SETTINGS
                        </button>
                      
                        <button 
                            onClick={() => showName()}
                        > 
                            <i></i> SHOW PERSONAL DATA
                        </button>
                    </div>

                </div> 

            </div>
        </div>
        </>
    )
}

export default Footer
=======
import React from 'react';
import './footer.scss';


const Footer = ({setName, setReset}) => {


    const makeReset = () => {
        setName(false); 
        setReset(true);
    };

    const showName = () => {
        setName(current => !current)  
    }; 

    return (
        <>
        <div className='footer'>
            <div className='foot-container'>   
            <div className="css-logo">              
                <div className='css'> CSS <br/> IS <br/> AWESOME</div>
                <div className='square'></div>
            </div>
               
                <h3 title='nabthat'> trainee </h3>    


                <div className="dropup">

                    <input type='checkbox' id='mark'/>                    
                    <label htmlFor='mark' className='footlabel'>
                        POKAŻ                         
                    </label>    
                    
                    <div className='slide'>
                        <button 
                            onClick={() => makeReset()}
                        >
                          <i></i> ZRESETUJ USTAWIENIA
                        </button>
                      
                        <button 
                            onClick={() => showName()}
                        > 
                            <i></i> POKAŻ DANE OSOBOWE
                        </button>
                    </div>

                </div> 

            </div>
        </div>
        </>
    )
}

export default Footer
>>>>>>> 533888ccab63ca421848dd8d8403b4a2dfa1662c
