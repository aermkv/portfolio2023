import React from 'react'

import BackIcon  from './../assets/images/BackIcon.png'
import BackArrow from '../assets/images/BackArrow.png'

import GateauMain from '../assets/images/GateauMain.png'
import GateauAlt from '../assets/images/GateauAlt.png'

import MiscPack1 from '../assets/images/MiscPack1.png'
import MiscPack2 from '../assets/images/MiscPack2.jpeg'
import MiscAleva1 from '../assets/images/MiscAleva1.png'
import MiscAleva2 from '../assets/images/MiscAleva2.png'

import Razors1 from '../assets/images/Razors1.png'
import Razors2 from '../assets/images/Razors2.png'
import BrookstoneGold1 from '../assets/images/BrookstoneGold1.png'
import BrookstoneBellHowell from '../assets/images/BrookstoneBellHowell.png'
import BrookstoneGoldRender from '../assets/images/BrookstoneGoldRender.png'
import BKEmergencyToolTech from '../assets/images/BKEmergencyToolTech.png'
import BKVac from '../assets/images/BKVac.jpeg'
import SellSheetSealy from '../assets/images/SellSheetSealy.png'

import Tzumi1 from '../assets/images/Tzumi1.png'
import Tzumi2 from '../assets/images/Tzumi2.png'

import Kodak2 from '../assets/images/Kodak2.png'
import KodakFactoryFile from '../assets/images/KodakFactoryFile.png'

import PC1 from '../assets/images/PC1.png'
import PC2 from '../assets/images/PC2.png'

import OnaWine from '../assets/images/OnaWine.png'
import CacaoJuiceStrawberry from '../assets/images/CacaoJuiceStrawberry.png'

import Musical1 from '../assets/images/Musical1.jpeg'
import Musical2 from '../assets/images/Musical2.jpeg'
import Musical3 from '../assets/images/Musical3.jpeg'

import Deckgif from '../assets/images/Deckgif.gif'
import Deckgif2 from '../assets/images/Deckgif2.gif'
import Deck from '../assets/images/Deck.png'

import BnD1 from '../assets/images/BnD1.jpeg'
import BnD2 from '../assets/images/BnD2.jpeg'

import CNYCWebProto from '../assets/images/CNYCWebProto.png'
import CNYCSocial from '../assets/images/CNYCSocial.png'
import CNYCIcons from '../assets/images/CNYCIcons.png'
import PlayNStayLogos from '../assets/images/PlayNStayLogos.png'
import BrainBowls from '../assets/images/BrainBowls.gif'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

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

function Misc2() {
  return (
    <div>
        <CustomLink to='/'>
            <div className='fixed mr-4 px-4 border-r-solid border-r-2 border-r-black h-screen w-8 hover:bg-black duration-300'>
                <img className='fixed left-0 top-6 -ml-3 px-4 h-[1.6rem] w-[3.4rem]' src={BackArrow} />
            </div>
        </CustomLink>

        <div className='w-full max-w-[1240px] mx-auto ml-4 px-12 md:px-16 lg:px-20 py-16'>

            <div className='py-4 pt-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                    <h2 className='pt-4 text-3xl lg:text-4xl font-semibold'>Early Days & Misc</h2>
                    <p className='py-4 pt-8 text-sm lg:text-xl'>My earliest freelance jobs were packaging designs for consumer goods and posters for musicals. From there I went on to extend my work in print to consumer electronics, soft goods, packaging for items to be shipped directly to consumers, and collateral branding materials that went into print.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto flex flex-col sm:flex-row gap-8'>
                <div className=''>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={GateauMain} alt='Gateau final' />
                    <p className='pt-4 text-xs text-left lg:text-sm text-zinc-600'>Final product.</p> 
                </div>
                <div className='text-sm lg:text-xl'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={GateauAlt} alt='Gateau alt' />  
                    <p className='pt-4 text-xs sm:text-right lg:text-sm text-zinc-600'>Alternative proposal.</p> 
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                    <p className='py-4 pt-8 text-sm lg:text-xl'>A few musical posters and album art projects were among my first graphic design projects while I was in school.</p>
                </div>
            </div>

            <div className='py-8 pt-4 mx-auto flex flex-col sm:flex-row gap-8'>
                <div className=''>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Musical1} alt='Gateau final' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>The Frogs</p> 
                </div>
                <div className='text-sm lg:text-xl'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Musical2} alt='Gateau alt' />  
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Squat</p> 
                </div>
                <div className='text-sm lg:text-xl'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Musical3} alt='Gateau alt' />  
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Into The Woods</p> 
                </div>
            </div>

            <div className='py-4'>
                <div className='rounded-md border-2 border-black'></div>
            </div>

            <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                   <p className='text-sm lg:text-xl'>In my early days of freelancing (mostly while still in school), I worked on a variety of projects, some of which never got produced. I learned to work with different dielines, how to work with Canadian and U.S. information requirements, and the technical aspects of artwork that goes into print.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscPack1} alt='Misc Packaging 1' />
                </div>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscAleva1} alt='Misc Packaging 1' />
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscAleva2} alt='Misc Packaging 1' />
                </div>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={MiscPack2} alt='Misc Packaging 1' />
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={OnaWine} alt='Misc Packaging 1' />
                </div>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={CacaoJuiceStrawberry} alt='Misc Packaging 1' />
                </div>
            </div>

            <div className='py-4 pt-8'>
                <div className='rounded-md border-2 border-black'></div>
            </div>

            {/* <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                    <h2 className='pt-4 text-xl lg:text-2xl font-semibold'>Creative Brands</h2>
                    <p className='py-4 pt-8 text-sm lg:text-xl'>I was a senior packaging designer at Creative Brands LLC, a license holder for Goodyear, Brookstone, Sealy, Bell & Howell, and others.</p>
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

            <div className='py-4 pt-8'>
                <div className='rounded-md border-2 border-black'></div>
            </div> */}

            <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                    <h2 className='pt-4 text-xl lg:text-2xl font-semibold'>iWorld & Tzumi</h2>
                    <p className='py-4 pt-8 text-sm lg:text-xl'>I worked as an in-house packaging and brandind designer at Tzumi and iWorld. Both jobs were high-volume, fast-paced environments that sharpened my approaches to efficiency and organization.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto grid grid-cols-1 md:grid-cols-11 gap-8'>
                <div className='flex flex-col md:col-span-7'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Tzumi1} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Tzumi portable power station.</p>
                </div>
                <div className='flex flex-col md:col-span-4'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Tzumi2} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Tzumi wired earbuds.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 text-justify'>
                    <p className='py-4 pt-8 text-sm lg:text-xl'>iWorld provided opportunities to work with a wider range of products, to develop in-house brands, and to work with licensed brands as I designed packaging for a line of Kodak products.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto grid grid-col md:grid-cols-8 gap-8'>
                <div className='flex flex-col md:col-span-3'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Kodak2} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Packaging visualization.</p>
                </div>
                <div className='flex flex-col md:col-span-5'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={KodakFactoryFile} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Factory print file.</p>
                </div>
            </div>

            <div className='py-4 pt-8 mx-auto grid grid-col md:grid-cols-2 gap-8'>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={PC1} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Packaging visualization.</p>
                </div>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={PC2} alt='Misc Packaging 1' />
                    <p className='pt-4 text-xs lg:text-sm text-zinc-600'>Factory print file.</p>
                </div>
            </div>

            <div className='py-4 pt-8'>
                <div className='rounded-md border-2 border-black'></div>
            </div>

            <div className='py-4 pt-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col md:col-span-2'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Deckgif} alt='Deck Gif 1' />
                </div>
                <div className='flex flex-col  md:col-span-1'>
                    <p className='flex flex-col w-full mt-0 md:my-auto text-sm lg:text-xl'>I've always thought that pitch decks can be much more captivating than the ones we're accustomed to seeing. I've put together several template decks that have helped me build others in my professional experience.</p>
                </div>
            </div>
            <div className='py-4 mx-auto grid grid-cols-1'>
                <div className='flex flex-col'>
                    <img className='drop-shadow-md rounded-md hover:drop-shadow-lg duration-300' src={Deck} alt='Deck' />
                </div>
            </div>

            <div className='py-4 pt-8'>
                <div className='rounded-md border-2 border-black'></div>
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

            <div className='py-4 pt-8'>
                <div className='rounded-md border-2 border-black'></div>
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

export default Misc2