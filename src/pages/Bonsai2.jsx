import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import BonsaiEmail1 from '../assets/images/BonsaiEmail1.png'
import BonsaiEmail2 from '../assets/images/BonsaiEmail2.png'
import BonsaiEmail3 from '../assets/images/BonsaiEmail3.png'

import BonsaiType1 from '../assets/images/BonsaiType1.png'
import BonsaiType2 from '../assets/images/BonsaiType2.png'

import BonsaiChecks from '../assets/images/BonsaiChecks.png'
import BonsaiRadio from '../assets/images/BonsaiRadio.png'
import BonsaiToggles from '../assets/images/BonsaiToggles.png'

import BonsaiButtons from '../assets/images/BonsaiButtons.png'
import BonsaiForms from '../assets/images/BonsaiForms.png'
import BonsaiToasts from '../assets/images/BonsaiToasts.png'

import BonsaiIll1 from '../assets/images/BonsaiIll1.png'
import BonsaiIll2 from '../assets/images/BonsaiIll2.png'

import BonsaiHeader from '../assets/images/BonsaiHeader.png'

import BackArrow from '../assets/images/BackArrow.png'

function Bonsai2() {
  return (

    <div className='w-screen'>

      <CustomLink to='/'>
        {/* <div className='fixed mr-4 px-4 z-10 border-r-solid border-r-2 border-r-black h-screen w-8 bg-[#FAFAFA] hover:bg-black duration-300'> */}
        <div className='fixed mr-4 px-4 z-10 h-screen w-16 hover:bg-black duration-300'>
          <img className='fixed left-0 top-6 -ml-2 px-4 h-[2.7rem] w-[4.5rem]' src={BackArrow} />
        </div>
      </CustomLink>

      <div className='max-w-[1240px] mx-auto px-0'>

        <img className='' src={BonsaiHeader} alt='Doodle Labs Header' />

      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
        <div className='flex flex-col w-full'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Bonsai</h2>
          <p className='pt-2 md:pt-4'>A mentorship app designed to democratize access to professional networks and career advancement.</p>
        </div>
        <div className='flex flex-col w-full'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>My Role</h2>
          <p className='py-2 md:py-4'>Freelance work developing branding, building out parts of the design system, creating UI components, and elaborating on the library of fun and engaging illustrations.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <p className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 px-12 md:px-16'>I helped extend initial branding ideas into detailed style guides.</p>
      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
        <div className='flex flex-col w-full'>
          <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Heading typography.</p>
          <img className='rounded-md' src={BonsaiType1} />
        </div>
        <div className='flex flex-col w-full'>
          <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Paragraph typography.</p>
          <img className='rounded-md' src={BonsaiType2} />
        </div>
      </div>
      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
        <div className='flex flex-col w-full'>
          <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Checkboxes.</p>
          <img className='rounded-md' src={BonsaiChecks} />
        </div>
        <div className='flex flex-col w-full'>
          <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Radio buttons.</p>
          <img className='rounded-md' src={BonsaiRadio} />
        </div>
      </div>
      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
        <div className='flex flex-col w-full'>
          <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Toggles.</p>
          <img className='rounded-md' src={BonsaiToggles} />
        </div>
        <div className='flex flex-col w-full'>
          <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Buttons.</p>
          <img className='rounded-md' src={BonsaiButtons} />
        </div>
      </div>
      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
        <div className='flex flex-col w-full'>
          <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Forms.</p>
          <img className='rounded-md' src={BonsaiForms} />
        </div>
        <div className='flex flex-col w-full'>
          <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Toasts.</p>
          <img className='rounded-md' src={BonsaiToasts} />
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <p className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 px-12 md:px-16'>Email templates were necessary for welcoming users, confirming meetings, reminders, and more  -  for both mentees and mentors.</p>
      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-11 gap-8'>
        <div className='flex flex-col w-full md:col-span-6'>
          <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Initial welcome email.</p>
          <img className='rounded-md' src={BonsaiEmail1} alt='Black glass Home Page' />
        </div>
        <div className='flex flex-col w-full md:col-span-5'>
          <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Scheduling confirmation email.</p>
          <img className='rounded-md' src={BonsaiEmail2} alt='Black glass Home Page' />
          <p className='pt-8 pb-4 text-xs lg:text-sm text-zinc-600'>Post-meeting email.</p>
          <img className='rounded-md' src={BonsaiEmail3} alt='Black glass Home Page' />
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <p className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 px-12 md:px-16'>I also extended the library of illustrative icons.</p>
      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
        <div className='flex flex-col w-full'>
          <img className='rounded-md' src={BonsaiIll1} />
        </div>
        <div className='flex flex-col w-full'>
          <img className='rounded-md' src={BonsaiIll2} />
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

export default Bonsai2