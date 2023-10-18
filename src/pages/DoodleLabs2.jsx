import React, {useState} from 'react'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import DLHeader from '../assets/images/DLHeader.png'
import DLLanding from '../assets/images/DLLanding.png'
import DLProfilePage from '../assets/images/DLProfilePage.png'

import Gif1edited from '../assets/images/Gif1edited.mp4'
import Gif2edited from '../assets/images/Gif2edited.mp4'
import Gif3edited from '../assets/images/Gif3edited.mp4'

import IMRecordingEdit from '../assets/images/IMRecordingEdit.mp4'
import Deciphers from '../assets/images/4000944.png'
import Vistas from '../assets/images/6000024.png'

import DLSiteMap from '../assets/images/DLSiteMap.png'

import DLPrintShopUserFlow from '../assets/images/DLPrintShopUserFlow.png'
import DLPrintShopPrototype2 from '../assets/images/DLPrintShopPrototype2.mp4'

import DLMerch from '../assets/images/DLMerch.png'
import NeogenEdit from '../assets/images/NeogenEdit.mp4'

import PoapP1 from '../assets/images/PoapP1.png'
import PoapP2 from '../assets/images/PoapP2.png'

import BackArrow from '../assets/images/BackArrow.png'



function DoodleLabs2() {

  const [mutedVideo, setMutedVideo] = useState(true);

  return (

    <div className='w-screen'>

      <CustomLink to='/'>
        {/* <div className='fixed mr-4 px-4 z-10 border-r-solid border-r-2 border-r-black h-screen w-8 bg-[#FAFAFA] hover:bg-black duration-300'> */}
        <div className='fixed mr-4 px-4 z-10 h-screen w-16 hover:bg-black duration-300'>
          <img className='fixed left-0 top-6 -ml-2 px-4 h-[2.7rem] w-[4.5rem]' src={BackArrow} />
        </div>
      </CustomLink>

      <div className='max-w-[1240px] mx-auto px-0'>

        <img className='' src={DLHeader} alt='Doodle Labs Header' />

      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
        <div className='flex flex-col w-full'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Doodle Labs</h2>
          <p className='pt-2 md:pt-4'>Doodle Labs was a platform dedicated to bringing brands and artists into generative art space and releasing generative art projects on the Ethereum blockchain.</p>
        </div>
        <div className='flex flex-col w-full'>
          <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>My Role</h2>
          <p className='py-2 md:py-4'>At first I worked on developing and expanding the nascent brand, defining the user experience and interface of the platform, and creating a variety of content to spread the word. As the Doodle Labs platform took shape, I pivoted to developing concepts for our projects, taking some of them to successful releases while others never became more than a pitch deck and useful experience.</p>
        </div>
      </div>

      <div className='py-8'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-16'>
        <div className='flex flex-col w-full'>
          <p className='py-2 md:py-4'>Doodle Labs landing page</p>
          <img className='' src={DLLanding} />
        </div>
        <div className='flex flex-col w-full'>
          <p className='py-2 md:py-4'>A user profile and collection page.</p>
          <img className='' src={DLProfilePage} />
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid'>
        <div className='flex flex-col w-full'>
          <p className='py-2 md:py-4'>Process: an early site map for doodlelabs.io</p>
          <img className='' src={DLSiteMap} />
        </div>
      </div>

      <div className='py-8 pt-12'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='py-2 md:py-4'>As some features on the Doodle Labs platform required numerous steps, we aimed to make the experience as frictionless as possible. Our users had to log in by connecting their crypto wallets, which are often bulky interactions, and on top of that, we needed to present adequate information and give customers a moment to confirm their transactions; the UX flow for the print shop is below and demonstrates how even a simple transaction can get accumulate the number of steps very quickly.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid'>
        <div className='flex flex-col w-full'>
          <img className='' src={DLPrintShopUserFlow} />
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='py-2 md:py-4'>With these considerations in mind, I focused on making the rest of the transaction smooth and playful, yet with a sense of the serious - as is appropriate when purchasing art.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid'>
        <div className='flex flex-col w-full'>
          <video src={DLPrintShopPrototype2} type="video/mp4" autoPlay loop playsInline className='rounded-md' />
        </div>
      </div>

      <div className='py-8 pt-12'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          {/* <h2 className='pt-2 md:pt-4 text-2xl lg:text-3xl font-semibold'>Doodle Labs</h2> */}
          <p className='pt-2 md:pt-4'>Once the website had been designed and Doodle Labs had released its inaugural project (The Family Mooks), we worked with many prospective clients to find viable avenues for collaboration. Some brands and artists had their own vision for their entry into the generative art space, others wanted us to show them the value of the industry and the options available to them. I regularly put together pitches that included concept mockups and relevant research. Clients ranged from high fashion houses to major sports leagues.</p>
          <p className='pt-2 md:pt-4'>Below is an example of a pitch for an NFL project that responded to a team's performance during the season: the NFT would get more elaborate and unlock features if a team performed well. Three stages of 'excitement' are shown.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-8'>
        <div className='flex flex-col w-full'>
          <video className='drop-shadow-xl rounded-md' src={Gif1edited} type="video/mp4" autoPlay loop muted playsInline />
        </div>
        <div className='flex flex-col w-full'>
          <video className='drop-shadow-xl rounded-md' src={Gif2edited} type="video/mp4" autoPlay loop muted playsInline />
        </div>
        <div className='flex flex-col w-full'>
          <video className='drop-shadow-xl rounded-md' src={Gif3edited} type="video/mp4" autoPlay loop muted playsInline />
        </div>  
      </div>

      <div className='py-8 pt-12'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='pt-2 md:pt-4'>Certain projects lent themselves well to community engagement through memes, trailers, hype videos, while others needed to be marketed in a more elevated art world aesthetic. Below is a teaser for our "Neogen Space Monkeys" drop, a collaborative project bewteen Dalek and Generative Artworks.</p>
          <p className='pt-2 md:pt-4'>Since the artist had an established following, we decided to appeal to existing fans and captivate new ones with an online game, memes, illustrations, and several teasers. Click mute / unmute to hear audio.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid'>
        <div className='flex flex-col w-full'>
          <video src={NeogenEdit} type="video/mp4" muted={mutedVideo} autoPlay loop playsInline className='rounded-md' />
          <div className='flex flex-cols-2 w-full justify-end gap-2'>
            <button onClick={() => setMutedVideo(true)} className={( mutedVideo ? "active" : "")}>
              Mute
            </button>
            <button onClick={() => setMutedVideo(false)} className={(! mutedVideo ? "active" : "")}>
              Unmute
            </button>
          </div>
        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='pt-2 md:pt-4'>The NFT space also presented opportunities to distribute merch and other branded collateral.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid'>
        <div className='flex flex-col w-full'>
          <img className='rounded-md' src={DLMerch} />
        </div>
        <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Doodle Labs merch.</p>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-2 gap-0'>
        <div className='flex flex-col w-full' >
          <img className='pt-2 md:pt-4' src={PoapP1} alt='Doodle Labs Home Page' />
        </div>
        <div className='flex flex-col w-full' >
          <img className='pt-2 md:pt-4' src={PoapP2} alt='Doodle Labs Home Page' />
        </div>
        <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Prototyping POAP (Proof of Attendance Protocol) art for NFT NYC 2021.</p>
      </div>

      <div className='py-8 pt-12'>
        <div className='rounded-md border-2 border-black'></div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-16'>
        <div className='flex flex-col w-full col-span-2'>
          <p className='pt-2 md:pt-4'>This role was also an opportunity to make use of my Javascript knowledge and expand significantly. I used my knack for creative problem solving to code generative art projects, finding ways to translate our clients' ideas into short, blockchain-friendly scripts that generated unique artworks.</p>
        </div>
        <div className='flex flex-col w-full'>

        </div>
      </div>

      <div className='w-full max-w-[1240px] mx-auto py-2 md:py-4 px-12 md:px-16 grid md:grid-cols-3 gap-8'>
        <div className='flex flex-col w-full'>
          <a target="_blank" href='https://opensea.io/collection/industrial-melanism-by-neil-grayson'>
            <h4 className='py-4 font-medium'>Industrial Melanism</h4>
            <video className='rounded-md' src={IMRecordingEdit} autoPlay loop muted playsInline />
            {/* <iframe className='aspect-square rounded-md border' src='https://generator.artblocks.io/0x28f2d3805652fb5d359486dffb7d08320d403240/5000794' /> */}
            <p className='py-4 text-sm lg:text-base'>An extension of Neil Grayson's successful paintings done in oil and metals. Interactivity was introduced to simulate the physical properties of the art in the digital rendering.</p>
          </a>
        </div>
        <div className='flex flex-col w-full'>
          <a target="_blank" href='https://opensea.io/collection/deciphers-by-irene-mamiye'>
            <h4 className='py-4 font-medium'>DeCiphers</h4>
            <img className='rounded-md' src={Deciphers} />
            <p className='py-4 text-sm lg:text-base'>Based on her 'Ciphers' series, Irene Mamiye's introduction into on-chain generative art was a work of layered transparency, pattern, and geometry.</p>
          </a>
        </div>
        <div className='flex flex-col w-full'>
          <a target="_blank" href='https://opensea.io/collection/vistas-by-anton-ermakov'>
            <h4 className='py-4 font-medium'>Vistas</h4>
            <img className='rounded-md border' src={Vistas} />
            <p className='py-4 text-sm lg:text-base'>My own oil paintings translated into millions of simple shapes and lines that intersect and interact to create unique digital paintings.</p>
          </a>
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

export default DoodleLabs2