import React, { useState } from 'react'
import './styles/button.css';
const BoxCard = ({ result, children }) => {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className={show ? 'text-center' : 'hidden'}>
                <div className={`${result} ` }>
                    {children}
                </div>
                <button className="btnn btn-sm w-25" onClick={() => setShow(!show)}>Hide</button>
            </div>
        </>

    )
}

export default BoxCard