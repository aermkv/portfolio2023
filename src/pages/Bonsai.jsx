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

import BackArrow from '../assets/images/BackArrow.png'

function Bonsai() {
  return (
    <div>
        <CustomLink to='/'>
            <div className='fixed mr-4 px-4 border-r-solid border-r-2 border-r-black h-screen w-8 hover:bg-black duration-300'>
                <img className='fixed left-0 top-6 -ml-3 px-4 h-[1.6rem] w-[3.4rem]' src={BackArrow} />
            </div>
        </CustomLink>

        <div className='w-full max-w-[1240px] mx-auto ml-4 px-12 md:px-16 lg:px-20 py-16'>

            <div className='pt-8 py-4 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                    <h2 className='pt-4 text-3xl lg:text-4xl font-semibold'>Bonsai</h2>
                    <p className='py-4 pt-8 text-sm lg:text-xl'>Freelance work developing branding, building out parts of the design system, and creating UI components for a professional mentorship and networking app.</p>
                    <p className='py-4 text-sm lg:text-xl'>I helped extend initial branding ideas into detailed style guides.</p>
                    {/* <p className='text-sm lg:text-xl'>.</p> */}
                </div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-2 gap-8'>
                <div className='flex flex-col w-full'>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiType1} alt='Bonsaie Type' />
                </div>
                <div className='flex flex-col w-full'>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiType2} alt='Bonsaie Type' />
                </div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-2 gap-8'>
                <div className='flex flex-col w-full'>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiChecks} alt='Bonsaie Checks' />
                </div>
                <div className='flex flex-col w-full'>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiRadio} alt='Bonsaie Radio' />
                </div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-2 gap-8'>
                <div className='flex flex-col w-full'>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiToggles} alt='Bonsaie Toggles' />
                </div>
                <div className='flex flex-col w-full'>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiButtons} alt='Bonsaie Buttons' />
                </div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-2 gap-8'>
                <div className='flex flex-col w-full'>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiForms} alt='Bonsaie Forms' />
                </div>
                <div className='flex flex-col w-full'>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiToasts} alt='Bonsaie Toasts' />
                </div>
            </div>

            <div className='py-4'>
                <div className='rounded-md border-2 border-black'></div>
            </div>

            <div className='pt-8 py-4 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                    <p className='py-4 pt-8 text-sm lg:text-xl'>Email templates were necessary for welcoming users, confirming meetings, reminders, and more  -  for both mentees and mentors.</p>
                </div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-11 gap-8'>
                <div className='flex flex-col w-full md:col-span-6'>
                    <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Initial welcome email.</p>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiEmail1} alt='Black glass Home Page' />
                </div>
                <div className='flex flex-col w-full md:col-span-5'>
                    <p className='pb-4 text-xs lg:text-sm text-zinc-600'>Scheduling confirmation email.</p>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiEmail2} alt='Black glass Home Page' />
                    <p className='pt-8 pb-4 text-xs lg:text-sm text-zinc-600'>Post-meeting email.</p>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiEmail3} alt='Black glass Home Page' />
                </div>
            </div>

            <div className='py-4'>
                <div className='rounded-md border-2 border-black'></div>
            </div>

            <div className='pt-8 py-4 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                    <p className='py-4 pt-8 text-sm lg:text-xl'>I also extended the library of illustrative icons.</p>
                </div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-2 gap-8'>
                <div className='flex flex-col w-full'>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiIll1} alt='Illustrations' />
                </div>
                <div className='flex flex-col w-full'>
                    <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BonsaiIll2} alt='Illustrations' />
                </div>
            </div>

            <div className='py-12 mx-auto grid md:grid-cols-3 gap-8'>
                <CustomLink to='/'>
                    <div className='md:col-span-2 text-justify border-black border-2 hover:text-white hover:bg-black duration-300'>
                        <p className='mx-2 my-2 text-sm lg:text-xl'>return to home</p>
                    </div>
                </CustomLink>
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

export default Bonsai