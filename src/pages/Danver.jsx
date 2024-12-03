import React, {useState} from 'react'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import DanverHeader from '../assets/images/2024_IBS_Presskit_Cover.jpg'
import DanverCover2 from '../assets/images/DanverCover2.png'
import Trex_mockup from '../assets/images/Trex_mockup.png'
import Trex_desktop from '../assets/images/Trex_desktop.png'
import Trex_mobile from '../assets/images/Trex_mobile.png'
import Trex_both from '../assets/images/Trex_both.png'
import TrexConfigurator from '../assets/images/TrexConfigurator.mp4'
import DanverRecordingNew from '../assets/images/Danver-newRecording.mp4'
import DanverBuilders from '../assets/images/DanverBuildersSideBySide.png'
import DanverBuildersMobile from '../assets/images/DanverBuildersMobile.jpg'

import BackArrow from '../assets/images/BackArrow.png'

function Danver() {

  return(

  <div className='w-screen'>

    <CustomLink to='/'>
      {/* <div className='fixed mr-4 px-4 z-10 border-r-solid border-r-2 border-r-black h-screen w-8 bg-[#FAFAFA] hover:bg-black duration-300'> */}
      <div className='fixed mr-4 px-4 z-10 h-screen w-16 hover:bg-black duration-300'>
        <img className='fixed left-0 top-6 -ml-2 px-4 h-[2.7rem] w-[4.5rem]' src={BackArrow} />
      </div>
    </CustomLink>

    <div className='max-w-[1240px] mx-auto px-0'>

      <img className='' src={Trex_mockup} alt='Danver Header' />

    </div>

    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
      <div className='flex flex-col w-full'>
        <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Danver</h2>
        <p className='pt-2 md:pt-4'>Danver Outdoor Kitchens is an established leader in the luxury stainless steel kitchen industry. Licensing partneships with Brown Jordan and Trex allow Danver to diversify its products and target demographics, but the core value of high-quality cabinetry paired with elevated style defines the approach to marketing for all three brands.</p>
      </div>
      <div className='flex flex-col w-full'>
        <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>My Role</h2>
        <p className='py-2 md:py-4'>My role focused on developing the visual identities of the Danver brand as well as its licenses, and the design of digital products associated with the brands or product lines. I also had opportunities to do some editorial design for materials that needed to be available in print and digital formats.</p>
      </div>
    </div>

    <div className='py-8'>
      <div className='rounded-md border-2 border-black'></div>
    </div>

    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
      <div className='flex flex-col w-full'>
        <p className='pt-2 md:pt-4'>In updating the Danver brand and redesigning the website I sought to elevate the brand by opting for an elegant aesthetic with an editorial approach to layout. On pages where I needed to display a lot of content, I used interactive elements that responded to hover and active states and wrote elegant CSS animations for the buttons, helping users focus on one element at a time.</p>
      </div>
      <div className='flex flex-col w-full'>
        <p className='pt-2 md:pt-4'>I made use of extensive negative space and offset images to break up content sections and provide additional 'breathing room' where traditional text and image layouts would have become too dense to flow smoothly.</p>
      </div>
    </div>

    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid'>
      <div className='flex flex-col w-full'>
        <p className='py-2 md:py-4'>Subtle CSS features on updated Danver Trades website, Danver's partnership program portal for dealers, builders, designers, and architects.</p>
        <video src={DanverRecordingNew} type="video/mp4" autoPlay loop playsInline className='rounded-md' />
      </div>
    </div>

    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid'>
      <div className='flex flex-col w-full'>
        <p className='py-2 md:py-4'>Desktop and mobile versions of the Danver Builders page.</p>
        <img className='rounded-md' src={DanverBuilders} />
      </div>
    </div>

    <div className='py-8'>
      <div className='rounded-md border-2 border-black'></div>
    </div>

    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid'>
      <div className='flex flex-col w-full'>
        <p className='py-2 md:py-4'>Brown Jordan Outdoor Kitchens cabinetry guide: a branded document designed to introduce the modular cabinetry options offered as well as the brand's aesthetic range.</p>
        <div className='relative py-4 w-full mx-auto rounded-md'><iframe className='relative border-none w-full min-h-[640px] left-0 top-0 rounded-md' src="https://online.fliphtml5.com/wnqio/znnv/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>
      </div>
    </div>

    <div className='py-8'>
      <div className='rounded-md border-2 border-black'></div>
    </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid'>
        <div className='flex flex-col w-full'>
          <p className='py-2 md:py-4'>Desktop and mobile versions of Trex Ready configurator.</p>
          <img className='' src={Trex_both} />
        </div>
      </div>

    <div className='py-8'>
      <div className='rounded-md border-2 border-black'></div>
    </div>

    <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid'>
      <div className='flex flex-col w-full'>
        <p className='py-2 md:py-4'>Trex configurator hover and active state demo.</p>
        <video src={TrexConfigurator} type="video/mp4" autoPlay loop playsInline className='rounded-md' />
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

export default Danver