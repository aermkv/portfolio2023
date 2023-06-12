import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function SideNav() {
  return (
    <div className='z-[1] w-full py-2 px-2'>
      <div className='w-full grid grid-cols-1 gap-16'>
        <div className='w-full'>
          <ul>
            <CustomLink className='my-0 py-0 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600' to='/'>ANTON ERMAKOV</CustomLink>
            <CustomLink className='my-0 py-0 hover:text-gray-600 text-3xl md:text-4xl lg:text-5xl ease-in-out tracking-tighter hover:tracking-wide duration-300' to='../pages/DoodleLabs'>DOODLE LABS</CustomLink>
            <CustomLink className='my-0 py-0 hover:text-gray-600 text-3xl md:text-4xl lg:text-5xl ease-in-out tracking-tighter hover:tracking-wide duration-300' to='../pages/CreativeBrands'>CREATIVE BRANDS</CustomLink>
            <CustomLink className='my-0 py-0 hover:text-gray-600 text-3xl md:text-4xl lg:text-5xl ease-in-out tracking-tighter hover:tracking-wide duration-300' to='../pages/Iworld'>iWORLD</CustomLink>
            <CustomLink className='my-0 py-0 hover:text-gray-600 text-3xl md:text-4xl lg:text-5xl ease-in-out tracking-tighter hover:tracking-wide duration-300' to='../pages/Framexpert'>FRAMEXPERT</CustomLink>
            <CustomLink className='my-0 py-0 hover:text-gray-600 text-3xl md:text-4xl lg:text-5xl ease-in-out tracking-tighter hover:tracking-wide duration-300' to='../pages/Warner'>WARNER MUSIC CANADA</CustomLink>
          </ul>
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

export default SideNav