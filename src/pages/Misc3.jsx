import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import BackArrow from '../assets/images/BackArrow.png'

import MiscHeader2 from '../assets/images/MiscHeader2.png'

import BeforeSunriseVinyl from '../assets/images/BeforeSunriseVinyl.jpeg'
import BeforeSunriseCD from '../assets/images/BeforeSunriseCD.jpeg'
import BeforeSunriseTechPack from '../assets/images/BeforeSunriseTechPack.png'

import WarOnFun from '../assets/images/WarOnFun.jpeg'
import SWGPoster from '../assets/images/SWGPoster.png'
import SWGPosterProcess from '../assets/images/SWGPosterProcess.png'

import Deckgif from '../assets/images/Deckgif.gif'
import Deck from '../assets/images/Deck.png'

import BnD1 from '../assets/images/BnD1.jpeg'
import BnD2 from '../assets/images/BnD2.jpeg'

import CNYCWebProto from '../assets/images/CNYCWebProto.png'
import CNYCSocial from '../assets/images/CNYCSocial.png'
import CNYCIcons from '../assets/images/CNYCIcons.png'
import PlayNStayLogos from '../assets/images/PlayNStayLogos.png'
import BrainBowlsReduced from '../assets/images/BrainBowlsReduced.mp4'

import BioversePrototypeMobile from '../assets/images/BioversePrototypeMobile.mp4'
import BioverseLogoUpdate from '../assets/images/BioverseLogoUpdate.png'

import netzero1 from '../assets/images/NetZero-logo-1.png'
import netzero2 from '../assets/images/NetZero-logo-2.png'
import netzero3 from '../assets/images/NetZero-logo-3.png'
import netzero4 from '../assets/images/NetZero-logo-4.png'
import netzero5 from '../assets/images/NetZero-logo-5.png'
import netzero6 from '../assets/images/NetZero-logo-6.png'

function Misc3() {
  return (
    <div className='w-screen'>

      <CustomLink to='/'>
        <div className='fixed mr-4 px-4 z-10 h-screen w-16 hover:bg-black duration-300'>
          <img className='fixed left-0 top-6 -ml-2 px-4 h-[2.7rem] w-[4.5rem]' src={BackArrow} />
        </div>
      </CustomLink>

      <div className='max-w-[1240px] mx-auto px-0'>

        <img className='' src={MiscHeader2} alt='Doodle Labs Header' />

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
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Warner Music Canada / Modern Space</h2>
          <p className='pt-2 md:pt-4'>After having done several album covers and other art for Toronto bands, I was hired to do the art for Modern Space's first album 'Before Sunrise.'</p>
          <p className='pt-2 md:pt-4'>The key piece of art is a collage of many hand-painted and hand-drawn elements meant to convey an abstract, confused vision of city and suburbs evoking a late night out as seen by young people out partying.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={BeforeSunriseVinyl} alt='Vinyl' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Vinyl front and back fold-out.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='pt-2 md:pt-4'>The vinyl labels got an art deco treatment evocative of classic '60s records, while the CD print used one of the paintings from the cover collage.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={BeforeSunriseTechPack} alt='Tech Pack' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Vinyl and CD labels.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='pt-2 md:pt-4'>Initial plans involved a booklet that came with the CD, but since vinyl records outsell CDs and streaming is more important than either, we went with a simple art deco background pattern.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={BeforeSunriseCD} alt='CD' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>CD tech pack.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='pt-2 md:pt-4'>Concept art for a Modern Space's single 'The War on Fun': two options that were also considered as a wrap-around poster or sticker. The single was never released.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={WarOnFun} alt='Tech Pack' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Vinyl and CD labels.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='pt-2 md:pt-4'>Warner and Modern Space parted ways after two albums, but I've occasionally been asked to do some work for associated acts. Below are some promotional materials for a livestream performance by one of Modern Space member's during Covid lockdowns when artists were unable to perform in public.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col w-full '>
          <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={SWGPoster} alt='Sean Watson Graham Poster' />
        </div>
        <div className='flex flex-col w-full '>
          <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={SWGPosterProcess} alt='Sean Watson Graham - Process' />
          <p className='pt-4 text-xs lg:text-sm md:text-right text-zinc-600'>Mobile prototype preview.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full md:col-span-2'>
          <p className='pt-2 md:pt-4'>A quick project for a telehealth prescription and supplement provider that involved modernizing an existing logo as well a product-specific landing page designed for high conversion by segueing into a rapid onboarding funnel.</p>
          <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300 py-12' src={BioverseLogoUpdate} alt='Bioverse Logo Update' />
        </div>
        <div className='flex flex-col w-full md:col-span-1'>
          <video src={BioversePrototypeMobile} type="video/mp4" autoPlay loop playsInline className='rounded-md' />
          <p className='pt-4 text-xs lg:text-sm md:text-right text-zinc-600'>Process and dark poster version.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      {/* ////////// NETZERO */}

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>NetZero Logo</h2>
          <p className='pt-2 md:pt-4'>My process in designing a logo for a combined solar and EV energy use and storage application.</p>
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

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Pitch Deck Templates</h2>
          <p className='pt-2 md:pt-4'>I've always thought that pitch decks can be much more captivating than the ones we're accustomed to seeing. I've put together several template decks that have helped me build others in my professional experience.</p>
        </div>
        <div className='flex flex-col w-full'>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={Deckgif} alt='Tech Pack' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Sample pitch deck template run-through.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={Deck} alt='Tech Pack' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Individual template pages.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>3D Work</h2>
          <p className='pt-2 md:pt-4'>My internships in interior design / architectural visualization got me into 3D modeling and rendering, which has remained an occasionally useful skill for me in nearly every job I've held since.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={BnD1} alt='3D-1' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Home theater render.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={BnD2} alt='3D-2' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Turkish bath render.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Chess NYC</h2>
          <p className='pt-2 md:pt-4'>I worked for Chess NYC where I updated the branding and logos for the main company as well as some of its products such as 'Play N Stay' and 'Brain Bowls.' I also designed various marketing materials for ads, social media, and prototyped website updates.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='flex flex-col md:col-span-2'>
          <img className='rounded-md' src={CNYCWebProto} alt='Misc Packaging 1' />
        </div>
        <div className='flex flex-col'>
          <p className='flex flex-col w-full mt-0 pt-2 md:pt-4 lg:mt-12'>I sought to modernize the website while maintaining the playful aesthetic aimed at kids.</p>
          <img className='pt-4 md:pt-4 lg:pt-8 rounded-md' src={CNYCIcons} alt='Misc Packaging 1' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Icons for new website.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16'>
        <div className='flex flex-col w-full col-span-2'>
          <img className='rounded-md' src={CNYCSocial} alt='Tech Pack' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Social posts aimed at engaging young chess players.</p>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col'>
          <img className='rounded-md' src={PlayNStayLogos} alt='Play N Saty Logo Exploration' />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Explorations of new Play N Stay logo.</p>
        </div>
        <div className='flex flex-col'>
          <video className='rounded-md' src={BrainBowlsReduced} type="video/mp4" autoPlay loop playsInline />
          <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Animation promoting Brain Bowls contests.</p>
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

export default Misc3