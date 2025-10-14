import React, {useState} from 'react'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import BackArrow from '../assets/images/BackArrow.png'

import netzero1 from '../assets/images/NetZero-logo-1.png'
import netzero2 from '../assets/images/NetZero-logo-2.png'
import netzero3 from '../assets/images/NetZero-logo-3.png'
import netzero4 from '../assets/images/NetZero-logo-4.png'
import netzero5 from '../assets/images/NetZero-logo-5.png'
import netzero6 from '../assets/images/NetZero-logo-6.png'

function NetZero() {
  return (
    <div className='w-screen'>

      <CustomLink to='/'>
        <div className='fixed mr-4 px-4 z-10 h-screen w-16 hover:bg-black duration-300'>
          <img className='fixed left-0 top-6 -ml-2 px-4 h-[2.7rem] w-[4.5rem]' src={BackArrow} />
        </div>
      </CustomLink>

      <div className='max-w-[1240px] mx-auto px-0'>

        {/* <img className='' src={MiscHeader2} alt='Doodle Labs Header' /> */}

      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='pt-2 md:pt-4'>My earliest design work was on small individual projects including posters for musicals, album artwork for bands (including work for Warner Music Canada), packaging for food and beverage products, as well as several interships with an upscale residential architecture boutique where I worked as a designer and 3D technical artist.</p>
        </div>
        <div className='flex flex-col w-full'>

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



      <div className='py-12 w-full max-w-[1240px] mx-auto px-12 md:px-16 grid md:grid-cols-3 gap-8'>
      <CustomLink to='/'>
        <div className='md:col-span-2 text-justify border-black border-2 hover:text-white hover:bg-black duration-300'>
          <p className='mx-2 my-2 text-sm lg:text-xl'>return to home</p>
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