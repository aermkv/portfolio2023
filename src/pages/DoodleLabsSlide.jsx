import React, { useState } from 'react'

const DoodleLabs = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    {!isOpen ?
        (
            <button onClick={() => setIsOpen(!isOpen)}>Doodle Labs</button>
        ) :
        (
            <div id='slide-container' 
                className={`fixed top-0 right-0 w-full h-full bg-blue-500
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                ease-in-out duration-300`}>
                <button 
                    className='fixed top-4 right-4' 
                    onClick={() => setIsOpen(!isOpen)}>
                        x
                </button>
            </div>
        )
    }
    </>
  )
}

export default DoodleLabs