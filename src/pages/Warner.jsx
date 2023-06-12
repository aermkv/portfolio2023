import React from 'react'

import BeforeSunriseCD from '../assets/images/BeforeSunriseCD.jpeg'
import BeforeSunriseTechPack from '../assets/images/BeforeSunriseTechPack.png'
import BeforeSunriseVinyl from '../assets/images/BeforeSunriseVinyl.jpeg'
import WarOnFun from '../assets/images/WarOnFun.jpeg'
import SWGPoster from '../assets/images/SWGPoster.png'
import SWGPosterProcess from '../assets/images/SWGPosterProcess.png'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Warner() {
  return (
    <div>

      <CustomLink to='/'>
        <div className='fixed mr-4 px-4 bg-gray-300 h-screen w-8 hover:bg-gray-500 duration-300'></div>
      </CustomLink>

      <div className='w-full max-w-[1240px] mx-auto ml-4 px-12 md:px-16 lg:px-20 py-16'>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2'>
            <h2 className='pt-4 text-3xl lg:text-4xl font-semibold'>Warner Music Canada / Modern Space</h2>
            <p className='py-4 pt-8 text-justify text-sm lg:text-xl'>After having done several album covers and other art for Toronto bands, I was hired to do the art for Modern Space's first album 'Before Sunrise.'</p>
            <p className='text-sm text-justify lg:text-xl'>The key piece of art is a collage of many hand-painted and hand-drawn elements meant to convey an abstract, confused vision of city and suburbs evoking a late night out as seen by young people out partying.</p>
          </div>
        </div>

        <div className='py-4 mx-auto grid grid-cols-1'>
          <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BeforeSunriseVinyl} alt='Before Sunrise Vinyl' />
          <p className='pt-4 text-xs lg:text-sm md:text-right text-zinc-600'>Vinyl front and back fold-out.</p>
        </div>

        <div className='py-4'>
          <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='w-full md:col-span-2'>
              <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={BeforeSunriseTechPack} alt='Before Sunrise Labels' />
            </div>
             <div className='w-full my-auto md:col-span-1'>
             <p className='text-sm lg:text-xl'>The vinyl labels got an art deco treatment evocative of classic '60s records, while the CD print used one of the paintings from the cover collage.</p>
            </div>
        </div>

        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='w-full md:col-span-2'>
              <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={BeforeSunriseCD} alt='Before Sunrise Tech Pack' />
            </div>
             <div className='w-full mt-0 md:mt-24'>
             <p className='text-sm lg:text-xl'>Initial plans involved a booklet that came with the CD, but since vinyl records outsell CDs and streaming is more important than either, we went with a simple art deco background pattern.</p>
            </div>
        </div>

        <div className='py-4'>
          <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='w-full md:col-span-2'>
            <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={WarOnFun} alt='War On Fun foldout' />
          </div>
          <div className='w-full my-auto md:col-span-1'>
            <p className='text-sm lg:text-xl'>Concept art for a Modern Space's single 'The War on Fun': two options that were also considered as a wrap-around poster or sticker. The single was never released.</p>
          </div>
        </div>

        <div className='py-4'>
          <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 text-justify'>
            <p className='text-sm lg:text-xl'>Warner and Modern Space parted ways after two albums, but I've occasionally been asked to do some work for associated acts. Below are some promotional materials for a livestream performance by one of Modern Space member's during Covid lockdowns when artists were unable to perform in public.</p>
          </div>
        </div>
        
        <div className='py-8 pt-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='w-full'>
            <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={SWGPoster} alt='Sean Watson Graham Poster' />
          </div>
          <div className='w-full'>
            <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={SWGPosterProcess} alt='Sean Watson Graham - Process' />
            <p className='pt-4 text-xs lg:text-sm md:text-right text-zinc-600'>Process and dark poster version.</p>
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

export default Warner