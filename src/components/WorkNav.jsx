import React, { useState, useEffect } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const WorkNav = () => {
  return (
    <div className='z-[1] w-full py-2 px-2'>
        <div className='w-full grid grid-cols-1 gap-16'>
            <div className='w-full'>
                <ul>
                    <span className='mt-0 text-4xl md:text-6xl lg:text-7xl font-medium text-gray-600 hover:cursor-default'>Anton Ermakov</span>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Danver' subtitle='Visual designer for a luxury outdoor kitchen manufacturer'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Danver</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/NetZero' subtitle='Product design and branding for a home energy management app'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>NetZero</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/DoodleLabs2' subtitle='Product and brand designer for an NFT platform'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Doodle Labs</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Packaging' subtitle='Packaging design across categories'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Packaging</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/BlackGlass' subtitle='Style guide and templates for a business consultancy'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Black Glass</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Bonsai2' subtitle='Branding and design system for mentorship app'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Bonsai</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/FX' subtitle='UX, UI, and branding for CAD software solutions'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>FrameXpert</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Misc3' subtitle='Album art, 3D, posters, pitch decks, and more'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Misc & Early Days</span>
                    </CustomLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

// Types in on hover, deletes on mouse leave
function TypedSubtitle({ text, visible }) {
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
        if (!visible) {
            setDisplayed('');
            return;
        }
        if (displayed.length < text.length) {
            const timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 5);
            return () => clearTimeout(timeout);
        }
    }, [visible, displayed, text]);

    if (!visible) return null;

    return (
        <span className='px-1 py-1 block text-xl md:text-2xl lg:text-4xl'>
            {displayed}
        </span>
    );
}

function CustomLink({to, children, subtitle, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    const [isHovered, setIsHovered] = useState(false)
    return (
        <li className={isActive ? "active" : ""}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Link to={to} {...props}>
                {children}
                {subtitle && <TypedSubtitle text={subtitle} visible={isHovered} />}
            </Link>
        </li>
    )
}

export default WorkNav
