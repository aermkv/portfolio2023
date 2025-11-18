import React, {useState} from 'react'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import BackArrow from '../assets/images/BackArrow.png'

import netzero1 from '../assets/images/NetZero-logo-1.png'
import netzero2 from '../assets/images/NetZero-logo-2.png'
import netzero3 from '../assets/images/NetZero-logo-3.png'
import netzero4 from '../assets/images/NetZero-logo-4.png'
import netzero5 from '../assets/images/NetZero-logo-5.png'
import netzero6 from '../assets/images/NetZero-logo-6.png'
import nzWelcomePrototype from '../assets/images/nzWelcomePrototype.mp4'
import Connecting from '../assets/images/Connecting.mp4'

import nz_today from '../assets/images/nz_today.png'
import nz_month from '../assets/images/nz_month.png'
import nz_year from '../assets/images/nz_year.png'
import nz_lifetime from '../assets/images/nz_lifetime.png'

import netzeroHeader from '../assets/images/NetzeroHeader.jpg'

import nzflow from '../assets/images/nzflow.png'

function NetZero() {
  return (
    <div className='w-screen'>

      <CustomLink to='/'>
        <div className='fixed mr-4 px-4 z-10 h-screen w-16 hover:bg-black duration-300'>
          <img className='fixed left-0 top-6 -ml-2 px-4 h-[2.7rem] w-[4.5rem]' src={BackArrow} />
        </div>
      </CustomLink>

      <div className='max-w-[1240px] mx-auto px-0'>

        <img className='' src={netzeroHeader} alt='NetZero Header' />

      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
      <div className='flex flex-col w-full'>
        <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>NetZero</h2>
        <p className='pt-2 md:pt-4'>NetZero is a combined solar and EV energy use and storage tracking application that uses Tesla's API to provide extended Powerwall data, management, and automation options.</p>
      </div>
      <div className='flex flex-col w-full'>
        <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>My Role</h2>
        <p className='py-2 md:py-4'>I designed a new logo and updated the visual components of the application to create seamless, low-friction paths for user customization as well as improving data displays and visualizations.</p>
      </div>
    </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>


      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>NetZero Logo</h2>
          <p className='pt-2 md:pt-4'>My process in designing a logo for a combined solar and EV energy use and storage tracking application.</p>
        </div>
        <div className='flex flex-col w-full'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={netzero1} alt='Vinyl' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Initial visual ideation session.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={netzero6} alt='Vinyl' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Refined and expanded options after feedback.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={netzero3} alt='Vinyl' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Final round of presented options.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={netzero4} alt='Vinyl' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Selected logo with typography exploration.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={netzero5} alt='Vinyl' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Final result.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 grid-cols-1 gap-16'>
        <div className='flex flex-col w-full'>

        </div>
        <div className='flex flex-col w-full md:px-0 px-[15%]'>
          <video className='drop-shadow-xl rounded-md' src={nzWelcomePrototype} type="video/mp4" autoPlay loop muted playsInline />
        </div>
        <div className='flex flex-col w-full col-span-1 justify-center'>
          <p className='py-2 md:py-4'>A simple but attractive welcome carousel that guuides new users through the functions and features available in the application.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <p className='w-full max-w-[1240px] mx-auto py-4 md:py-8 px-12 md:px-16'>Data displays over different time periods.</p>
      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-4 grid-cols-2 gap-8'>
        <div className='flex flex-col w-full'>
          <img className='rounded-md' src={nz_today} />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600 text-center'>Day</p>
        </div>
        <div className='flex flex-col w-full'>
          <img className='rounded-md' src={nz_month} />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600 text-center'>Month</p>
        </div>
        <div className='flex flex-col w-full'>
          <img className='rounded-md' src={nz_year} />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600 text-center'>Year</p>
        </div>
        <div className='flex flex-col w-full'>
          <img className='rounded-md' src={nz_lifetime} />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600 text-center'>Lifetime</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <p className='w-full max-w-[1240px] mx-auto py-4 md:py-8 px-12 md:px-16'>Simple flow showing two examples of setting automations.</p>
      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={nzflow} alt='Automation Set Flow' />
          {/* <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Simple flow for setting automations.</p> */}
        </div>
      </div>



      <div className='py-12 w-full max-w-[1240px] mx-auto px-12 md:px-16 grid md:grid-cols-3 gap-8'>
      <CustomLink to='/'>
        <div className='md:col-span-2 text-justify border-black border-2 hover:text-white hover:bg-black duration-300'>
          <h4 className='mx-2 my-2 text-sm lg:text-xl'>return to home</h4>
        </div>
      </CustomLink>
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
  
  export default NetZero