import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import BackArrow from '../assets/images/BackArrow.png'

import FXHeader from '../assets/images/FXHeader.png'

import FXMain from '../assets/images/FXMain.png'
import FXIconLogo from '../assets/images/FXIconLogo.png'
import FXIcons1 from '../assets/images/FXIcons1.png'
import FXIcons2 from '../assets/images/FXIcons2.png'

import FXAction from '../assets/images/FXAction.png'

import FXLandingMockup from '../assets/images/FXLandingMockup.png'

function FX() {
  return (

    <div className='w-screen'>

      <CustomLink to='/'>
        <div className='fixed mr-4 px-4 z-10 h-screen w-16 hover:bg-black duration-300'>
          <img className='fixed left-0 top-6 -ml-2 px-4 h-[2.7rem] w-[4.5rem]' src={BackArrow} />
        </div>
      </CustomLink>

      <div className='max-w-[1240px] mx-auto px-0'>

        <img className='' src={FXHeader} alt='Doodle Labs Header' />

      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
        <div className='flex flex-col w-full'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Framexpert</h2>
          <p className='pt-2 md:pt-4'>FrameXpert partnered with MayTec to use the latter's parts catalogue and manufacturing facilities to deliver custom T-slot aluminum frame designs. The product is a 3D CAD application that allows customers to build their designs, have them reviewed by an expert, and have them shipped to their door with detailed assembly instructions.</p>
        </div>
        <div className='flex flex-col w-full'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>My Role</h2>
          <p className='py-2 md:py-4'>I was involved with FrameXpert on a regular basis for more than six years, providing designs for the various in-app components as well as branding and incidental design work. Additionally I helped build out the library of 3D models available as parts in the application.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <p className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>I had opportunities to work on the branding of various FrameXpert products, including logos, desktop icons, favicons, typography, iconography, and more.</p>
      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid grid-cols-1'>
        <div className='flex flex-col w-full md:col-span-2'>
          <img className='rounded-md' src={FXIconLogo} alt='MayCAD Logo' />
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <p className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>While FrameXpert's products have a dedicated, technically-proficient niche following, I wanted to make the brand appear more user-friendly from the landing page and into the application itself.</p>
      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid grid-cols-1'>
        <div className='flex flex-col w-full md:col-span-2'>
          <img className='rounded-md' src={FXLandingMockup} alt='MayCAD App' />
        </div>
      </div>
      <p className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>I designed a variety of components and icons for use in the application, as well as the modular toolbars.</p>
      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid grid-cols-1'>
        <div className='flex flex-col w-full md:col-span-2'>
          <img className='rounded-md' src={FXAction} alt='MayCAD App' />
        </div>
      </div>
      <p className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>During my involvement with FrameXpert, I created multiple sets of icons to communicate the various tools and tasks available to the user.</p>
      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <img className='rounded-md' src={FXIcons1} alt='MayCAD Logo' />
        </div>
        <div className=''>
          <img className='rounded-md' src={FXIcons2} alt='MayCAD Logo' />
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

export default FX