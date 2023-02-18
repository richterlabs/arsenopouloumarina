import React from 'react';
import { useEffect } from 'react';

const Darkmode = () => {
    const switchTheme = (e) => {
        document.querySelector('body').classList.toggle("light")
    }

    useEffect(()=>{
        switchTheme()
    }, [])

    return (
        <div>
            <span></span>
        {/* <button id="darkmode" onClick={(e) => switchTheme(e)}>
           <img className="light-icon" src={`${process.env.PUBLIC_URL}/images/icons/sun-01.svg`} alt="Sun images" />
           <img className="dark-icon" src={`${process.env.PUBLIC_URL}/images/icons/vector.svg`} alt="Sun images" />
        </button> */}

        </div>
    )
}
export default Darkmode;