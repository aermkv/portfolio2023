import React from 'react'

import FXDesktop from '../assets/images/FXDesktop.png'
import FXLogo from '../assets/images/FXLogo.png'
import FXMain from '../assets/images/FXMain.png'
import FXIconLogo from '../assets/images/FXIconLogo.png'
import FXIcons1 from '../assets/images/FXIcons1.png'
import FXIcons2 from '../assets/images/FXIcons2.png'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Framexpert() {
  console.log('framexpert')
  return (
    <div className=''>
      <CustomLink to='/'>
        <div className='fixed mr-4 px-4 bg-gray-300 h-screen w-8 hover:bg-gray-500 duration-300'></div>
      </CustomLink>

      <div className='w-full max-w-[1240px] mx-auto ml-4 px-12 md:px-16 lg:px-20 py-16'>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 text-justify'>
            <h2 className='pt-4 text-3xl lg:text-4xl font-semibold'>Framexpert</h2>
            <p className='py-4 pt-8 text-sm lg:text-xl'>Framexpert and its key product MayCAD offers users the ability to design custom frames with T-slot aluminum profiles that are then machined and delivered with assembly instructions.</p>
            <p className='text-sm lg:text-xl'>I've been involved with Framexpert and its associated products since 2009 and was regularly active during 2015-19. My responsibilities changed as the product developed. I did a lot of technical work, mostly developing the database of 3D objects that are available to users. I was also constantly designing and redesigning the UI and its various components as the software evolved and when derivative versions were being considered. I have also designed several sets of icons, logos, and splash pages, as well as anything else that was needed over time.</p>
          </div>
        </div>

        <div className='py-8 pt-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='flex flex-col w-full md:col-span-2'>
            <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={FXMain} alt='MayCAD App' />
          </div>
          <div className='flex flex-col text-sm lg:text-xl md:col-span-1'>
            <div className='mt-0 md:my-auto font-medium'>
              <p className='text-sm lg:text-xl'>MayCAD was designed to simplify a complicated process. The product requires endless configuration options and thousands of detailed part specifications, so a major concern was to organize options by categories and arrange details in levels that allow users to find very specific things, but do not overwhelm with the entire listed catalogue.</p>
            </div>
          </div>
        </div>

        <div className='py-4'>
          <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 pt-0 mx-auto grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 text-justify'>
            <p className='py-4 pt-8 text-sm lg:text-xl'>Branding was updated several times over the course of my involvement with Framepert and MayCAD.</p>
          </div>
        </div>

        <div className='py-8 pt-0 mx-auto grid grid-cols-1'>
          <div className='flex flex-col w-full md:col-span-2'>
            <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={FXIconLogo} alt='MayCAD Logo' />
          </div>
        </div>

        <p className='pt-0 text-xs lg:text-sm text-zinc-600'>Desktop Icon and primary logo for MayCAD.</p>

        <div className='py-4'>
          <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 pt-0 mx-auto grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 text-justify'>
            <p className='py-4 pt-8 text-sm lg:text-xl'>The application relies heavily on icons to enable users to navigate the available tools and features. I've had to design several sets of numerous icons that aim to depict the process to be executed or accessory to be added.</p>
          </div>
        </div>

        <div className='py-8 pt-0 mx-auto grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col w-full'>
            <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={FXIcons1} alt='MayCAD Logo' />
          </div>
          <div className='flex flex-col w-full'>
            <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={FXIcons2} alt='MayCAD Logo' />
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

export default Framexpert