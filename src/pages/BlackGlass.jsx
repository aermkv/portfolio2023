import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import BlackGlassMain from '../assets/images/BlackGlass-main.png'
import BlackGlassMainAlt from '../assets/images/BlackGlass-mainAlt.png'
import BGBranding from '../assets/images/BGBranding.png'
import BGP1 from '../assets/images/BGP1.png'
import BGP2 from '../assets/images/BGP2.png'
import BGP3 from '../assets/images/BGP3.png'
import BGGrid1 from '../assets/images/BGGrid1.jpg'
import BGGrid2 from '../assets/images/BGGrid2.jpg'
import BGGrid3 from '../assets/images/BGGrid3.jpg'
import BackArrow from '../assets/images/BackArrow.png'

import BlackGlassHeader from '../assets/images/BlackGlassHeader.png'

import BlackGlassLanding from '../assets/images/BlackGlassLanding.png'
import BlackGlassSecondary from '../assets/images/BlackGlassSecondary.png'

import BlackGlassIcons1 from '../assets/images/BlackGlassIcons1.png'
import BlackGlassIcons2 from '../assets/images/BlackGlassIcons2.png'

import BlackGlassSchedule1 from '../assets/images/BlackGlassSchedule1.png'
import BlackGlassSchedule2 from '../assets/images/BlackGlassSchedule2.png'
import BlackGlassSchedule3 from '../assets/images/BlackGlassSchedule3.png'

function BlackGlass() {
  return (
    <div className='w-screen'>

    <CustomLink to='/'>
      {/* <div className='fixed mr-4 px-4 z-10 border-r-solid border-r-2 border-r-black h-screen w-8 bg-[#FAFAFA] hover:bg-black duration-300'> */}
      <div className='fixed mr-4 px-4 z-10 h-screen w-16 hover:bg-black duration-300'>
        <img className='fixed left-0 top-6 -ml-2 px-4 h-[2.7rem] w-[4.5rem]' src={BackArrow} />
      </div>
    </CustomLink>

    <div className='max-w-[1240px] mx-auto px-0'>

      <img className='' src={BlackGlassHeader} alt='Black Glass Header' />

    </div>

    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
      <div className='flex flex-col w-full'>
        <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Black Glass</h2>
        <p className='pt-2 md:pt-4'>Black Glass is a digital consultancy that connects CMOs and aims to be ahead of the curve in the rapidly-evolving world of marketing.</p>
      </div>
      <div className='flex flex-col w-full'>
        <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>My Role</h2>
        <p className='py-2 md:py-4'>This freelance project involved the Black Glass visual identity and providing them with their web design, brand style guide, and presentation templates. The brand needed an elevated aesthetic that was distinct, but within corporate style conventions.</p>
      </div>
    </div>

    <div className='py-8'>
      <div className='rounded-md border-2 border-black'></div>
    </div>

    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-5 gap-16'>
      <div className='flex flex-col w-full md:col-span-2'>
        <p className='py-2 md:py-4'>Black Glass landing page</p>
        <img className='' src={BlackGlassLanding} />
      </div>
      <div className='flex flex-col w-full md:col-span-3'>
        <p className='py-2 md:py-4'>Alternative styling as applied to secondary page (mobile & desktop)</p>
        <img className='' src={BlackGlassSecondary} />
      </div>
    </div>

    <p className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16'>A set of icons designed to represent new connections, growing networks, and constellations. It was important that the icons should be easy to animate.</p>
    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-0'>
      <div className='flex flex-col w-full'>
        <img className='' src={BlackGlassIcons1} />
      </div>
      <div className='flex flex-col w-full'>
        <img className='' src={BlackGlassIcons2} />
      </div>
    </div>

    <div className='py-8 pt-12'>
      <div className='rounded-md border-2 border-black'></div>
    </div>

    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
      <div className='flex flex-col w-full col-span-2'>
        <p className='py-2 md:py-4'>The brand guideline was broken down into details and examples. As the client placed emphasis on their need to produce numerous high-quality presentations, we provided modular templates with detailed suggestions for various types of pages and their possible variations.</p>
      </div>
    </div>

    <p className='w-full max-w-[1240px] mx-auto px-12 md:px-16'>Definition of different layout options on standard web grid.</p>
    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-8'>
      <div className='flex flex-col w-full'>
        <img className='rounded py-2 md:py-4' src={BGGrid1} alt='Black glass grid 1' />
      </div>
      <div className='flex flex-col w-full'>
        <img className='rounded py-2 md:py-4' src={BGGrid2} alt='Black glass grid 2' />
      </div>
      <div className='flex flex-col w-full'>
        <img className='rounded py-2 md:py-4' src={BGGrid3} alt='Black glass grid 3' />
      </div>
    </div>

    <p className='w-full max-w-[1240px] mx-auto px-12 md:px-16'>Guides for use of photography.</p>
    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-8'>
      <div className='flex flex-col w-full'>
        <img className='rounded py-2 md:py-4' src={BGP1} alt='Black glass photography guide 1' />
      </div>
      <div className='flex flex-col w-full'>
        <img className='rounded py-2 md:py-4' src={BGP2} alt='Black glass photography guide 2' />
      </div>
      <div className='flex flex-col w-full'>
        <img className='rounded py-2 md:py-4' src={BGP3} alt='Black glass photography guide 3' />
      </div>
    </div>

    <p className='w-full max-w-[1240px] mx-auto px-12 md:px-16'>Brand style guide with template slides for presentations.</p>
    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
      <div className='flex flex-col w-full'>
        <img className='py-2 md:py-4' src={BGBranding} alt='Black glass presentation templates' />
      </div>
    </div>

    <p className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 px-12 md:px-16'>A complex problem was providing options for timelines and schedules, so several modular templates were offered to accommodate.</p>
    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid lg:grid-cols-3 gap-8'>
      <div className='flex flex-col w-full'>
        <img className='rounded py-2 md:py-4' src={BlackGlassSchedule1} alt='Black glass grid 1' />
      </div>
      <div className='flex flex-col w-full'>
        <img className='rounded py-2 md:py-4' src={BlackGlassSchedule2} alt='Black glass grid 2' />
      </div>
      <div className='flex flex-col w-full'>
        <img className='rounded py-2 md:py-4' src={BlackGlassSchedule3} alt='Black glass grid 3' />
      </div>
    </div>

    <div className='py-12 w-full max-w-[1240px] mx-auto px-12 md:px-16 grid md:grid-cols-3 gap-8'>
      <CustomLink to='/'>
        <div className='md:col-span-2 text-justify border-black border-2 hover:text-white hover:bg-black duration-300'>
          <p className='mx-2 my-2 text-sm lg:text-xl'>return to home</p>
        </div>
      </CustomLink>
    </div>

  </div>

    // <div className='w-screen'>
    //   <CustomLink to='/'>
    //     {/* <div className='fixed mr-4 px-4 z-10 border-r-solid border-r-2 border-r-black h-screen w-8 bg-[#FAFAFA] hover:bg-black duration-300'> */}
    //     <div className='fixed mr-4 px-4 z-10 h-screen w-16 hover:bg-black duration-300'>
    //       <img className='fixed left-0 top-6 -ml-2 px-4 h-[2.7rem] w-[4.5rem]' src={BackArrow} />
    //     </div>
    //   </CustomLink>

    // <div className='w-full max-w-[1240px] mx-auto ml-4 px-12 md:px-16 lg:px-20 py-16'>

    //     <div className='py-4 pt-8 mx-auto grid md:grid-cols-3 gap-8'>
    //         <div className='md:col-span-2 text-justify'>
    //             <h2 className='pt-4 text-3xl lg:text-4xl font-semibold'>Black Glass</h2>
    //             <p className='py-4 pt-8 text-sm lg:text-xl'>Branding and web design for a marketing consulting agency.</p>
    //             <p className='text-sm lg:text-xl'>I collaborated with another designer to develop an elegant aesthetic that suggests professionalism, efficiency, and a classy, modern attitude. We made use of constellation-like elements and icons throughout to symbolize the connections that turn parts into a whole with a greater significance.</p>
    //         </div>
    //     </div>

    //     <div className='py-8 mx-auto grid md:grid-cols-2 gap-8'>
    //         <div className='flex flex-col w-full'>
    //             <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Main page.</p>
    //             <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BlackGlassMain} alt='Black glass Home Page' />
    //         </div>
    //         <div className='flex flex-col w-full'>
    //             <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Secondary page in alternate color scheme.</p>
    //             <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BlackGlassMainAlt} alt='Black glass Home Page' />
    //         </div>
    //     </div>

    //     <div className='py-4'>
    //             <div className='rounded-md border-2 border-black'></div>
    //     </div>

    //     <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
    //         <div className='md:col-span-2 text-justify'>
    //             <p className='text-sm lg:text-xl'>The brand guideline was broken down into details and examples. As the client placed emphasis on their need to produce numerous high-quality presentations, we provided modular templates with detailed suggestions for various types of pages and their possible variations.</p>
    //         </div>
    //     </div>

    //     <p className='pt-8 text-xs lg:text-sm text-zinc-600'>Photography use guidelines.</p>
    //     <div className='py-4 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4'>
    //         <div className='flex flex-col w-full'>
    //             <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGP1} alt='Black glass Home Page' />
    //         </div>
    //         <div className='flex flex-col w-full'>
    //             <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGP2} alt='Black glass Home Page' />
    //         </div>
    //         <div className='flex flex-col w-full'>
    //             <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGP3} alt='Black glass Home Page' />
    //         </div>
    //     </div>

    //     <p className='pt-8 text-xs lg:text-sm text-zinc-600'>Column layout guidelines.</p>
    //     <div className='py-4 mx-auto grid grid-cols-3 gap-4'>
    //         <div className='flex flex-col w-full'>
    //             <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGGrid1} alt='Black glass Home Page' />
    //         </div>
    //         <div className='flex flex-col w-full'>
    //             <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGGrid2} alt='Black glass Home Page' />
    //         </div>
    //         <div className='flex flex-col w-full'>
    //             <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGGrid3} alt='Black glass Home Page' />
    //         </div>
    //     </div>

    //     <p className='pt-8 text-xs lg:text-sm text-zinc-600'>Pitch deck template slides.</p>
    //     <div className='py-4 mx-auto'>
    //         <div className='flex flex-col w-full md:col-span-3'>
    //             <img className='drop-shadow-xl rounded-sm hover:drop-shadow-2xl duration-300' src={BGBranding} alt='Black glass Home Page' />
    //         </div>
    //     </div>

    //     <div className='py-12 mx-auto grid md:grid-cols-3 gap-8'>
    //         <CustomLink to='/'>
    //             <div className='md:col-span-2 text-justify border-black border-2 hover:text-white hover:bg-black duration-300'>
    //                 <p className='mx-2 my-2 text-sm lg:text-xl'>return to home</p>
    //             </div>
    //         </CustomLink>
    //     </div>

    // </div>
    // </div>
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

export default BlackGlass