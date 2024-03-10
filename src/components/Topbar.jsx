<<<<<<< HEAD
import React from 'react';
import './topbar.scss';
import { AiFillHtml5 } from 'react-icons/ai';

const Topbar = ({name}) => {

    return (
        <>
        <div className='topbar'>
            <div className='top-container'>
                <div className='logo-circle'>
                    <a href="/">
                        <AiFillHtml5 
                            className="html-icon"
                         />
                    </a>
                    
                </div>          

                 <h1>
                    <span style={{fontWeight:'400'}}>Layout</span> task 
                    
                    {name && (
                        <div style={{fontWeight:'300'}}>
                            Wyatt Earp
                        </div>
                    )}    
                </h1>       
                          
            </div>
        </div>
        </>
    )
}

export default Topbar
=======
import React from 'react';
import './topbar.scss';
import { AiFillHtml5 } from 'react-icons/ai';

const Topbar = ({name}) => {

    return (
        <>
        <div className='topbar'>
            <div className='top-container'>
                <div className='logo-circle'>
                    <a href="/">
                        <AiFillHtml5 
                            className="html-icon"
                         />
                    </a>
                    
                </div>          

                 <h1>
                    <span style={{fontWeight:'400'}}>Strona</span> responsywna
                    
                    {name && (
                        <div style={{fontWeight:'300'}}>
                            Witold Nawrot
                        </div>
                    )}    
                </h1>       
                          
            </div>
        </div>
        </>
    )
}

export default Topbar
>>>>>>> 533888ccab63ca421848dd8d8403b4a2dfa1662c
