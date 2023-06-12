import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const WorkNav = () => {
  return (
    <div className='z-[1] w-full py-2 px-2'>
        <div className='w-full grid grid-cols-1 gap-16'>
            <div className='w-full'>
                <ul>
                    <span className='mt-0 text-4xl md:text-6xl lg:text-8xl font-medium text-gray-600 hover:cursor-default'>ANTON ERMAKOV</span>
                    <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/DoodleLabs'>DOODLE LABS</CustomLink>
                    <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/BlackGlass'>BLACK GLASS</CustomLink>
                    <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/CreativeBrands'>CREATIVE BRANDS</CustomLink>
                    {/* <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/Iworld'>iWORLD</CustomLink> */}
                    <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/Framexpert'>FRAMEXPERT</CustomLink>
                    <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/Warner'>WARNER MUSIC CANADA</CustomLink>
                    <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/Misc'>MISC / EARLY DAYS</CustomLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

// function CustomLink({to, children, ...props}) {
//     const path = window.location.pathname
//     return (
//         <li className={path === to ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }

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

export default WorkNav