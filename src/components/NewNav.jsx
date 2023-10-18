import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NewNav = () => {
  <div className='z-[1] w-screen'>
    <div className='max-w-[1240px] mx-auto px-0 grid grid-cols-1'>
      <div className='w-full'>
        <ul>
          <span className='mt-0 text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 hover:cursor-default'>Anton Ermakov</span>
        </ul>
      </div>
    </div>
  </div>
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

export default NewNav