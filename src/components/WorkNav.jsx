import React, { useState, useEffect, useRef } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const WorkNav = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const vh = window.innerHeight;
      const contentHeight = containerRef.current.scrollHeight;
      setScale(contentHeight > vh ? vh / contentHeight : 1);
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div
      ref={containerRef}
      className='z-[1] w-full py-2 px-2'
      style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
    >
        <div className='w-full grid grid-cols-1 gap-16'>
            <div className='w-full'>
                <ul>
                    <span className='mt-0 text-4xl md:text-6xl lg:text-7xl font-medium text-gray-600 hover:cursor-default'>Anton Ermakov</span>
                    <AutoTypedSubtitle text='Multidisciplinary designer focused on building thoughtful, brand-driven product experiences, with a skill set that ranges from traditional print design to the latest AI-powered tools.' />

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Danver' subtitle='Visual designer for a luxury outdoor kitchen manufacturer'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Danver</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/NetZero' subtitle='Product design and branding for a home energy management app'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>NetZero</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/DoodleLabs2' subtitle='Product and brand designer for an NFT platform'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Doodle Labs</span>
                    </CustomLink>

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/FX' subtitle='UX, UI, and branding for CAD software solutions'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>FrameXpert</span>
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

                    <CustomLink className='group -mt-8 hover:text-gray-600' to='../pages/Misc3' subtitle='Album art, 3D, posters, pitch decks, and more'>
                        <span className='text-4xl md:text-6xl lg:text-7xl ease-in-out tracking-tighter hover:tracking-wide hover:font-medium duration-300'>Misc & Early Days</span>
                    </CustomLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

// Types in on page load and stays
function AutoTypedSubtitle({ text }) {
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
        if (displayed.length < text.length) {
            const timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 5);
            return () => clearTimeout(timeout);
        }
    }, [displayed, text]);

    return (
        <span className='px-1 py-1 block text-xl md:text-2xl lg:text-4xl'>
            {displayed}
        </span>
    );
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
