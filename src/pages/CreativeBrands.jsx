import React from 'react'

import Razors1 from '../assets/images/Razors1.png'
import Razors2 from '../assets/images/Razors2.png'
import BrookstoneGold1 from '../assets/images/BrookstoneGold1.png'
import BrookstoneBellHowell from '../assets/images/BrookstoneBellHowell.png'
import BrookstoneGoldRender from '../assets/images/BrookstoneGoldRender.png'
import BKEmergencyToolTech from '../assets/images/BKEmergencyToolTech.png'
import BKVac from '../assets/images/BKVac.jpeg'
import SellSheetSealy from '../assets/images/SellSheetSealy.png'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function CreativeBrands() {
  return (
    <div>
        <CustomLink to='/'>
            <div className='fixed mr-4 px-4 bg-gray-300 h-screen w-8 hover:bg-gray-500 duration-300'></div>
        </CustomLink>
    <div className='w-full max-w-[1240px] mx-auto ml-4 px-12 md:px-16 lg:px-20 py-16'>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <h2 className='pt-4 text-3xl lg:text-4xl font-semibold'>Creative Brands</h2>
                <p className='py-4 pt-8 text-sm lg:text-xl'>I was a senior packaging designer at Creative Brands LLC, a license holder for Brookstone, Sealy, Bell & Howell, and others.</p>
                <p className='text-sm lg:text-xl'>As the senior designer I worked on branding updates for product lines, determined the overarching scheme for a series, planned retail displays, and created pitch decks for sales. I ensured that the other designers were producing consistent high-quality worked that conformed to guidelines, whether established in-house or by license.</p>
            </div>
        </div>

        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col w-full md:col-span-2'>
                <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Razors1} alt='Black glass Home Page' />
            </div>
            <div className='flex flex-col text-sm lg:text-xl md:col-span-1'>
                <div className='mt-0 md:mt-24 font-medium'>
                    <p className='text-sm lg:text-xl'>Our licenses covered home goods, automotive products, electronics, and toiletries.</p>
                    <p className='pt-4 text-sm lg:text-xl'>Some items were sold under multiple licenses or different product lines.</p>
                </div>
            </div>
        </div>

        <div className='py-4'>
            <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <p className='text-sm lg:text-xl'>In light of increasing prices for shipping and packaging, some products were shifted to direct-to-consumer delivery. This resulted in opportunities to reduce packaging costs as designs not intended for retail shelves. I simplified the packaging for these products with limited use of colors, no foils or spot UV. While different from the requirements of eye-catching packaging intended for retail, I enjoyed this opportunity to develop good designs within constraints.</p>
            </div>
        </div>

        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-7 gap-4'>
            <div className='flex flex-col w-full md:col-span-3'>
                <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={BrookstoneGold1} alt='Brookstone die line' />
                <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Dieline works for both retail and D2C options: colors, foils, and hangtag are added for retail version.</p>
            </div>
            <div className='flex flex-col w-full md:col-span-4'>
                <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={BrookstoneGoldRender} alt='Brookstone render' />
                <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Limited color use or printing directly on cardboard can be done without compromising compelling design.</p>
            </div>
            {/* <div className='flex flex-col text-sm lg:text-xl'>
                <div className='my-auto text-blue-500 font-medium'>
                    <p className='text-sm lg:text-xl'>Our licenses covered household products, automotive, electronics, and toiletries.</p>
                    <p className='pt-4 text-sm lg:text-xl'>Some items were sold under multiple licenses or different product lines.</p>
                </div>
            </div> */}
        </div>

        <div className='py-4'>
            <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <p className='text-sm lg:text-xl'>An example of a product packaged for two different licenses. Shown with mock-up of product in plastic shell.</p>
            </div>
        </div>

        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='w-full md:col-span-1'>
                <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={BrookstoneBellHowell} alt='Black glass Home Page' />
            </div>
             <div className='w-full md:col-span-2'>
                <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={BKEmergencyToolTech} alt='Black glass Home Page' />
                <p className='pt-4 text-xs lg:text-sm md:text-right text-zinc-600'>Technical file for printing at factory. Brookstone version.</p>
            </div>
        </div>

        <div className='py-4'>
            <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <p className='text-sm lg:text-xl'>The role involved designing iconography to be used throughout a brand's product catalogue, as well as finding consistent terminology to describe features. Another interesting aspect of the job was designing and testing dielines that display well in-store, convey information, and are easy to ship.</p>
            </div>
        </div>

        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='w-full'>
                <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={BKVac} alt='Brookstone Vac' />
                <p className='pt-4 text-xs lg:text-sm md:text-right text-zinc-600'>Brookstone car vacuum dieline and visualizations.</p>
            </div>
             <div className='w-full'>
                <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={SellSheetSealy} alt='Sealy Sell Sheet' />
                <p className='pt-4 text-xs lg:text-sm md:text-right text-zinc-600'>Sealy hoodie pillow sell sheet.</p>
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

export default CreativeBrands