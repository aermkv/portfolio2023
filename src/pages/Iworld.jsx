import React from 'react'

import Kodak1 from '../assets/images/Kodak1.png'
import Kodak2 from '../assets/images/Kodak2.png'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Iworld() {
  return (
    <div>

        <CustomLink to='/'>
            <div className='fixed mr-4 px-4 bg-gray-300 h-screen w-8 hover:bg-gray-500 duration-300'></div>
        </CustomLink>

        <div className='w-full max-w-[1240px] mx-auto px-12 md:px-16 lg:px-20 py-16'>

            <h2 className='pt-4 text-2xl lg:text-3xl font-medium'>iWorld</h2>
            <p className='py-4 text-sm lg:text-xl'>Placeholder text</p>

            <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-5 gap-8'>
                <div className='flex flex-col w-full md:col-span-3'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Kodak1} alt='Black glass Home Page' />
                </div>
                <div className='flex flex-col text-sm lg:text-xl md:col-span-2'>
                    <div className='my-auto text-blue-500 font-medium'>
                        <p className='text-sm lg:text-xl'>Our licenses covered household products, automotive, electronics, and toiletries.</p>
                        <p className='pt-4 text-sm lg:text-xl'>Some items were sold under multiple licenses or different product lines.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

function CustomLink({to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Iworld;