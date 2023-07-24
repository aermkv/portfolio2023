import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import BlackGlassMain from '../assets/images/BlackGlass-main.png'
import BGBranding from '../assets/images/BGBranding.png'
import BGP1 from '../assets/images/BGP1.png'
import BGP2 from '../assets/images/BGP2.png'
import BGP3 from '../assets/images/BGP3.png'
import BGGrid1 from '../assets/images/BGGrid1.jpg'
import BGGrid2 from '../assets/images/BGGrid2.jpg'
import BGGrid3 from '../assets/images/BGGrid3.jpg'
import BackArrow from '../assets/images/BackArrow.png'

function BlackGlass() {
  return (
    <div>
        <CustomLink to='/'>
            <div className='fixed mr-4 px-4 border-r-solid border-r-2 border-r-black h-screen w-8 hover:bg-black duration-300'>
                <img className='fixed left-0 top-6 -ml-3 px-4 h-[1.6rem] w-[3.4rem]' src={BackArrow} />
            </div>
        </CustomLink>
    <div className='w-full max-w-[1240px] mx-auto ml-4 px-12 md:px-16 lg:px-20 py-16'>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <h2 className='pt-4 text-3xl lg:text-4xl font-semibold'>Black Glass</h2>
                <p className='py-4 pt-8 text-sm lg:text-xl'>Branding and web design for a marketing consulting agency.</p>
                <p className='text-sm lg:text-xl'>I collaborated with another designer to develop an elegant aesthetic that suggests professionalism, efficiency, and a classy, modern attitude. We made use of constellation-like elements and icons throughout to symbolize the connections that turn parts into a whole with a greater significance.</p>
            </div>
        </div>

        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col w-full md:col-span-2'>
                <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={BlackGlassMain} alt='Black glass Home Page' />
            </div>
            <div className='flex flex-col mt-0 md:mt-24 text-sm lg:text-xl'>
                <h3 className='mt-4 text-xl lg:text-2xl font-semibold'>Our key goals were to:</h3>
                <div className='mt-4 rounded-md font-base'>
                    {/* <h3 className='mx-4 mt-4 lg:text-3xl font-bold'>THE GOAL</h3> */}
                    <p className='font-medium mb-4 lg:text-base'><strong>1 / Provide a platform that enables brands and artists to connect with new audiences</strong> in the generative art market, building a community of collectors.</p>
                </div>
                <div className='mt-4 rounded-md font-base'>
                    <p className='font-medium mb-4 lg:text-base'><strong>2 / Produce exceptional NFT projects that distinguish themselves in the industry</strong> and captivate the attention of prospective collectors through close collaboration with artists, effectively translating their artistic expressions into the generative medium.</p>
                </div>
            </div>
        </div>

        <div className='py-4'>
                <div className='rounded-md border-2 border-black'></div>
        </div>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <p className='text-sm lg:text-xl'>The brand guideline was broken down into details and examples. As the client placed emphasis on their need to produce numerous high-quality presentations, we provided modular templates with detailed suggestions for various types of pages and their possible variations.</p>
            </div>
        </div>
        <div className='py-8 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='flex flex-col w-full'>
                <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGP1} alt='Black glass Home Page' />
            </div>
            <div className='flex flex-col w-full'>
                <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGP2} alt='Black glass Home Page' />
            </div>
            <div className='flex flex-col w-full'>
                <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGP3} alt='Black glass Home Page' />
            </div>
        </div>
        <div className='py-8 mx-auto grid grid-cols-3 gap-4'>
            <div className='flex flex-col w-full'>
                <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGGrid1} alt='Black glass Home Page' />
            </div>
            <div className='flex flex-col w-full'>
                <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGGrid2} alt='Black glass Home Page' />
            </div>
            <div className='flex flex-col w-full'>
                <img className='drop-shadow-md rounded-sm hover:drop-shadow-xl duration-300' src={BGGrid3} alt='Black glass Home Page' />
            </div>
        </div>
        <div className='py-8 mx-auto'>
            <div className='flex flex-col w-full md:col-span-3'>
                <img className='drop-shadow-xl rounded-sm hover:drop-shadow-2xl duration-300' src={BGBranding} alt='Black glass Home Page' />
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

export default BlackGlass