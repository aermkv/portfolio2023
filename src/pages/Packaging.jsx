import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import BackArrow from '../assets/images/BackArrow.png'

import PackagingHeader from '../assets/images/PackagingHeader.png'

import BrookstoneGold1 from '../assets/images/BrookstoneGold1.png'
import BrookstoneGoldRender from '../assets/images/BrookstoneGoldRender.png'

import BrookstoneBellHowell from '../assets/images/BrookstoneBellHowell.png'
import BKEmergencyToolTech from '../assets/images/BKEmergencyToolTech.png'

import Razors1 from '../assets/images/Razors1.png'

import MiscPack1 from '../assets/images/MiscPack1.png'
import MiscPack2 from '../assets/images/MiscPack2.jpeg'
import MiscAleva1 from '../assets/images/MiscAleva1.png'
import MiscAleva2 from '../assets/images/MiscAleva2.png'

import OnaWine from '../assets/images/OnaWine.png'
import CacaoJuiceStrawberry from '../assets/images/CacaoJuiceStrawberry.png'

import Kodak2 from '../assets/images/Kodak2.png'
import KodakFactoryFile from '../assets/images/KodakFactoryFile.png'

import PC1 from '../assets/images/PC1.png'
import PC2 from '../assets/images/PC2.png'

import Tzumi1 from '../assets/images/Tzumi1.png'
import Tzumi2 from '../assets/images/Tzumi2.png'

import GateauMain from '../assets/images/GateauMain.png'
import GateauAlt from '../assets/images/GateauAlt.png'

function Packaging() {
  return (
    <div className='w-screen'>
    
      <CustomLink to='/'>
        {/* <div className='fixed mr-4 px-4 z-10 border-r-solid border-r-2 border-r-black h-screen w-8 bg-[#FAFAFA] hover:bg-black duration-300'> */}
        <div className='fixed mr-4 px-4 z-10 h-screen w-16 hover:bg-black duration-300'>
          <img className='fixed left-0 top-6 -ml-2 px-4 h-[2.7rem] w-[4.5rem]' src={BackArrow} />
        </div>
      </CustomLink>

      <div className='max-w-[1240px] mx-auto px-0'>

        <img className='' src={PackagingHeader} alt='Packaging Header' />

      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='pt-2 md:pt-4'>My experience in packaging design ranges over small upstart products with no branding to established global brands with style guides that have a significant history. I have worked as an in-house packaging designer as well as a freelancer, have lead a team of packaging designers, and have developed brand updates and created asset libraries with templates for layouts.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Creative Brands LLC</h2>
          <p className='pt-2 md:pt-4'>I was the senior designer for Creative Brands where lead a small team working with licensed brands across several categories including home, beauty/hygiene, automotive, and soft goods. Our main licenses were Sealy, Goodyear, Samsonite, Brookstone, and Bell & Howell. I designed brand updates for new product lines, packaging templates, Amazon product descriptions, made sales presentations, and created templates for others to use.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={Razors1} alt='Brookstone Razors' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Designs for 6-pack and 8-pack Brookstone razors.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-8'>
        <div className='md:col-span-2'>
          <p className=''>In light of increasing prices for shipping and packaging, some products were shifted to direct-to-consumer delivery. This resulted in opportunities to reduce packaging costs as designs not intended for retail shelves. I simplified the packaging for these products with limited use of colors, no foils or spot UV. While different from the requirements of eye-catching packaging intended for retail, I enjoyed this opportunity to develop good designs within constraints.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-7 gap-4'>
        <div className='flex flex-col w-full md:col-span-3'>
          <img className='rounded-md' src={BrookstoneGold1} alt='Brookstone die line' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Dieline works for both retail and D2C options: colors, foils, and hangtag are added for retail version.</p>
        </div>
        <div className='flex flex-col w-full md:col-span-4'>
          <img className='rounded-md' src={BrookstoneGoldRender} alt='Brookstone render' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Limited color use or printing directly on cardboard can be done without compromising compelling design.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-8'>
        <div className='md:col-span-2 text-justify'>
          <p className=''>An example of a product packaged for two different licenses. Shown with mock-up of product in plastic shell.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='w-full md:col-span-1'>
          <img className='rounded-md' src={BrookstoneBellHowell} alt='Black glass Home Page' />
        </div>
        <div className='w-full md:col-span-2'>
          <img className='rounded-md' src={BKEmergencyToolTech} alt='Black glass Home Page' />
          <p className='pt-4 text-xs lg:text-sm md:text-right text-zinc-600'>Technical file for printing at factory. Brookstone version.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>iWorld</h2>
          <p className='pt-2 md:pt-4'>At iWorld I worked with proprietary as well as licensed brands. Most of my work was with consumer electronics, and deliverables - aside from packaging - included 3D models/renders, retail collateral, and sales presentations.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid grid-col md:grid-cols-8 gap-8'>
        <div className='flex flex-col md:col-span-3'>
          <img className='rounded-md' src={Kodak2} alt='Misc Packaging 1' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Packaging visualization.</p>
        </div>
        <div className='flex flex-col md:col-span-5'>
          <img className='rounded-md' src={KodakFactoryFile} alt='Misc Packaging 1' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Factory print file.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid grid-col md:grid-cols-2 gap-8'>
        <div className='flex flex-col'>
          <img className='rounded-md' src={PC1} alt='Misc Packaging 1' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Packaging visualization.</p>
        </div>
        <div className='flex flex-col'>
          <img className='rounded-md' src={PC2} alt='Misc Packaging 1' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Factory print file.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Tzumi</h2>
          <p className='pt-2 md:pt-4'>Tzumi was my first full-time packaging design job, as well as my first job in New York. While previous packaging work was usually project-based freelance work, Tzumi taught me to think systematically on a larger scale, to create layouts that worked across an entire brand, and to bring packaging into the bigger picture of a brand identity.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid grid-cols-1 md:grid-cols-11 gap-8'>
        <div className='flex flex-col md:col-span-7'>
          <img className='rounded-md' src={Tzumi1} alt='Misc Packaging 1' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Tzumi portable power station.</p>
        </div>
        <div className='flex flex-col md:col-span-4'>
          <img className='rounded-md' src={Tzumi2} alt='Misc Packaging 1' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Tzumi wired earbuds.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-8'>
        <div className='md:col-span-2'>
          <p className=''>In my early days of freelancing (mostly while still in school), I worked on a variety of projects, some of which never got produced. I learned to work with different dielines, how to work with Canadian and U.S. information requirements, and the technical aspects of artwork that goes into print.</p>
          <p className='pt-4'>Gateau Royal was my first packaging project to go into wide circulation in Canadian stores.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 flex flex-col sm:flex-row gap-8'>
        <div className=''>
          <img className='rounded-md' src={GateauMain} alt='Gateau final' />
          <p className='pt-4 text-xs text-left lg:text-sm text-zinc-600'>Final product.</p> 
        </div>
        <div className=''>
          <img className='rounded-md' src={GateauAlt} alt='Gateau alt' />  
          <p className='pt-4 text-xs sm:text-right lg:text-sm text-zinc-600'>Alternative proposal.</p> 
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 flex flex-col md:flex-row gap-8'>
        <div className='flex flex-col'>
          <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscPack1} alt='Misc Packaging 1' />
        </div>
        <div className='flex flex-col'>
          <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscAleva1} alt='Misc Packaging 1' />
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 flex flex-col md:flex-row gap-8'>
        <div className='flex flex-col'>
          <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscAleva2} alt='Misc Packaging 1' />
        </div>
        <div className='flex flex-col'>
          <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscPack2} alt='Misc Packaging 1' />
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto pt-8 md:pt-12 py-2 md:py-4 px-12 md:px-16 flex flex-col md:flex-row gap-8'>
        <div className='flex flex-col'>
          <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={OnaWine} alt='Misc Packaging 1' />
        </div>
        <div className='flex flex-col'>
          <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={CacaoJuiceStrawberry} alt='Misc Packaging 1' />
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

export default Packaging