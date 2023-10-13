import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <li>
                <Link  to="/">Home</Link >
            </li>
            <li>
                <Link  to="/usememo">Use Memo</Link >
            </li>
            <li>
                <Link  to="/usecallback">Use Callback</Link >
            </li>
            <li>
                <Link  to="/useref">Use Ref</Link >
            </li>
        </ul>
    </div>
  )
}

export default Navbar