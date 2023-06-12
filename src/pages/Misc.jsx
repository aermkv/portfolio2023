import React from 'react'

import GateauMain from '../assets/images/GateauMain.png'
import GateauAlt from '../assets/images/GateauAlt.png'
import Deckgif from '../assets/images/Deckgif.gif'
import Deckgif2 from '../assets/images/Deckgif2.gif'
import Deck from '../assets/images/Deck.png'
import MiscPack1 from '../assets/images/MiscPack1.png'
import MiscPack2 from '../assets/images/MiscPack2.jpeg'
import MiscAleva1 from '../assets/images/MiscAleva1.png'
import MiscAleva2 from '../assets/images/MiscAleva2.png'
import BnD1 from '../assets/images/BnD1.jpeg'
import BnD2 from '../assets/images/BnD2.jpeg'
import Tzumi1 from '../assets/images/Tzumi1.png'
import Tzumi2 from '../assets/images/Tzumi2.png'
import CNYCWebProto from '../assets/images/CNYCWebProto.png'
import CNYCSocial from '../assets/images/CNYCSocial.png'
import CNYCIcons from '../assets/images/CNYCIcons.png'
import PlayNStayLogos from '../assets/images/PlayNStayLogos.png'
import BrainBowls from '../assets/images/BrainBowls.gif'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Misc() {
  return (
    <div>

        <CustomLink to='/'>
            <div className='fixed mr-4 px-4 bg-gray-300 h-screen w-8 hover:bg-gray-500 duration-300'></div>
        </CustomLink>

        <div className='w-full max-w-[1240px] mx-auto ml-4 px-12 md:px-16 lg:px-20 py-16'>

            <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                    <h2 className='pt-4 text-3xl lg:text-4xl font-semibold'>Early Days / Miscellaneous</h2>
                    <p className='py-4 pt-8 text-sm lg:text-xl'>For several years I focused primarily on oil painting and did design work as a freelancer. I started taking on projects while still in school and acquired various skills that I continued to hone over the years. I did an extended apprenticeship as 2D/3D designer with a boutique residential arhitecture firm and took several freelance jobs that ranged between a few weeks and several months in duration.</p>
                    <p className='text-sm lg:text-xl'>One of my first paid design projects was packaging for 'Gateau Royale' Pound Cakes that were distributed widely through Canadian grocery stores.</p>
                </div>
            </div>
            
            <div className='py-8 pt-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col max-h-[300] md:col-span-2'>
                    <img className='object-contain drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={GateauMain} alt='Black glass Home Page' />
                </div>
                <div className='flex flex-col max-h-[300] text-sm lg:text-xl md:col-span-1'>
                    <img className='object-fit drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={GateauAlt} alt='Black glass Home Page' />  
                    <p className='pt-4 text-xs md:text-right lg:text-sm text-zinc-600'>Alternative proposal.</p> 
                </div>
            </div>

            <div className='py-4'>
                <div className='rounded-md border-4 border-blue-100'></div>
            </div>

            <div className='py-4 pt-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col md:col-span-2'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Deckgif} alt='Deck Gif 1' />
                </div>
                <div className='flex flex-col  md:col-span-1'>
                    <p className='flex flex-col w-full mt-0 md:mt-24 text-sm lg:text-xl'>I've always thought that pitch decks can be much more captivating than the ones we're accustomed to seeing. I've put together several template decks that have helped me build others in my professional experience.</p>
                    {/* <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Deckgif2} alt='Deck Gif 2' />    */}
                </div>
            </div>
            <div className='py-4 mx-auto grid grid-cols-1'>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Deck} alt='Deck' />
                </div>
            </div>

            <div className='py-4'>
                <div className='rounded-md border-4 border-blue-100'></div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                   <p className='text-sm lg:text-xl'>Before I had built on experience and developed a packaging design portfolio, I would hone my skills with sample projects that I could show to to potential clients.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col md:col-span-2'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscPack1} alt='Misc Packaging 1' />
                </div>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscAleva1} alt='Misc Packaging 1' />
                </div>
            </div>

            <div className='py-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col md:col-span-2'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscPack2} alt='Misc Packaging 1' />
                </div>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscAleva2} alt='Misc Packaging 1' />
                </div>
            </div>

            <div className='py-4'>
                <div className='rounded-md border-4 border-blue-100'></div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                   <p className='text-sm lg:text-xl'>Eventually I did get more packaging design contracts and projects and for few years it was my focus. My first job in New York was a packaging job where I was exposed to 'the bigger picture' - cross-functional teams, long-term marketing strategies, design for a whole line of products as well as their retail displays. Prior to this, most of my packaging work had been done in a fairly narrow context that did not look far beyond the product in question.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col md:col-span-2'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Tzumi1} alt='Misc Packaging 1' />
                </div>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Tzumi2} alt='Misc Packaging 1' />
                </div>
            </div>

            <div className='py-4'>
                <div className='rounded-md border-4 border-blue-100'></div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                   <p className='text-sm lg:text-xl'>In 2010-11 I did a ten-month apprenticeship with a boutique architecture firm that I had interned at the two previous summers. During the apprenticeship I did graphic design for various pamphlets and presentations, some layouts in AutoCAD, but mostly I developed my 3D modeling and rendering abilities and was responsible for visualizing interiors.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={BnD1} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Home theater render.</p>
                </div>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={BnD2} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Turkish bath render.</p>
                </div>
            </div>

            <div className='py-4'>
                <div className='rounded-md border-4 border-blue-100'></div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                   <p className='text-sm lg:text-xl'>I worked for Chess NYC where I updated the branding and logos for the main company as well as some of its products such as 'Play N Stay' and 'Brain Bowls.' I also designed various marketing materials for ads, social media, and prototyped website updates.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col md:col-span-2'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={CNYCWebProto} alt='Misc Packaging 1' />
                </div>
                <div className='flex flex-col'>
                    <p className='flex flex-col w-full mt-0 pt-2 md:pt-4 lg:mt-12 text-sm lg:text-xl'>I sought to modernize the website while maintaining the playful aesthetic aimed at kids.</p>
                    <img className='pt-4 md:pt-4 lg:pt-8 drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={CNYCIcons} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Icons for new website.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={CNYCSocial} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Social posts aimed at engaging young chess players.</p>
                    <img className='pt-8 drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={BrainBowls} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Animation promoting Brain Bowls contests.</p>
                </div>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={PlayNStayLogos} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Explorations of new Play N Stay logo.</p>
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

export default Misc