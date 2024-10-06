import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const path = window.location.pathname
  return (
      <div className='bg-surface'>
          <nav className='flex items-center justify-center h-20'>
              <ul className='flex gap-5'>
                  <li><Link className={`text-lg hover:underline font-medium ${path === '/' ? 'text-blue-700' : ''}`} to='/'>Home</Link></li>
                  <li><Link className={`text-lg hover:underline font-medium ${path === '/gallery' ? 'text-blue-700' : ''}`} to="/gallery">Gallery</Link></li>
              </ul>
          </nav>
    </div>
  )
}

export default Navbar