import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Typed from 'react-typed';

const WorkNav = () => {

    // const [display, setDisplay] = useState("notdisplayed");
    // const showButton = e => {
    //   e.preventDefault();
    //   setDisplay("displayed");
    // };
  
    // const hideButton = e => {
    //   e.preventDefault();
    //   setDisplay("notdisplayed");
    // };


  return (
    <div className='z-[1] w-full py-2 px-2'>
        <div className='w-full grid grid-cols-1 gap-16'>
            <div className='w-full'>
                <ul>
                    <span className='mt-0 text-4xl md:text-6xl lg:text-7xl font-medium text-gray-600 hover:cursor-default'>Anton Ermakov</span>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Danver'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Danver</span>
                        {/* <Typed className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl' strings={['Creative coder and designer for an NFT platform']} typeSpeed={2} backSpeed={2} /> */}
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Visual designer for luxury outdoor kitchen manufacturer</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/NetZero'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>NetZero</span>
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Product design and branding for a home energy management app </span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/DoodleLabs2'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Doodle Labs</span>
                        {/* <Typed className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl' strings={['Creative coder and designer for an NFT platform']} typeSpeed={2} backSpeed={2} /> */}
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Creative coder and designer for an NFT platform</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Packaging'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Packaging</span>
                        {/* <Typed className='px-1 py-1 hidden group-hover:block text-xl md:text-2xl lg:text-4xl' strings={['Packaging, posters, pitch decks, and more']} typeSpeed={2} backSpeed={2} /> */}
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Packaging design across categories</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/BlackGlass'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Black Glass</span>
                        {/* <Typed className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl' strings={['Style guide and templates for a business consultancy']} typeSpeed={2} backSpeed={2} /> */}
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Style guide and templates for a business consultancy</span>
                    </CustomLink>

                    {/* <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/CreativeBrands'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Creative Brands</span>
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Branding and packaging design for consumer goods</span>
                    </CustomLink> */}

                    {/* <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Bonsai'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Bonsai</span>
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Branding and design system for mentorship app</span>
                    </CustomLink> */}

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Bonsai2'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Bonsai</span>
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Branding and design system for mentorship app</span>
                    </CustomLink>

                    {/* <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Framexpert'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Framexpert</span>
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Iconography, UI components, branding for CAD software</span>
                    </CustomLink> */}

                    {/* <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Warner'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Warner Music Canada</span>
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Album artwork and collateral for Modern Space</span>
                    </CustomLink> */}

                    {/* <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Misc2'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Misc & Early Days</span>
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Packaging, posters, pitch decks, and more</span>
                    </CustomLink> */}

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/FX'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>FrameXpert</span>
                        {/* <Typed className='px-1 py-1 hidden group-hover:block text-xl md:text-2xl lg:text-4xl' strings={['Packaging, posters, pitch decks, and more']} typeSpeed={2} backSpeed={2} /> */}
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Iconography, UI components, branding for CAD software</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Misc3'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Misc & Early Days</span>
                        {/* <Typed className='px-1 py-1 hidden group-hover:block text-xl md:text-2xl lg:text-4xl' strings={['Packaging, posters, pitch decks, and more']} typeSpeed={2} backSpeed={2} /> */}
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Album art, 3D, posters, pitch decks, and more</span>
                    </CustomLink>

                    {/* <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/DoodleLabs2'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Doodle Labs New</span>
                        <span className='px-1 py-1 hidden group-hover:block duration-300 text-xl md:text-2xl lg:text-4xl'>Creative coder and designer for an NFT platform</span>
                    </CustomLink> */}

                    {/* <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/BlackGlass'>BLACK GLASS</CustomLink>
                    <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/CreativeBrands'>CREATIVE BRANDS</CustomLink> */}
                    {/* <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/Iworld'>iWORLD</CustomLink> */}
                    {/* <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/Framexpert'>FRAMEXPERT</CustomLink>
                    <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/Warner'>WARNER MUSIC CANADA</CustomLink>
                    <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-8xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/Misc'>MISC / EARLY DAYS</CustomLink> */}
                    {/* <CustomLink className='-mt-8 hover:text-gray-600 text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300' to='../pages/Packaging'>Print & Packaging</CustomLink> */}
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