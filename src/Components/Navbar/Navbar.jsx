import React, {useState} from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  // function to toggle navbar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  // function to close navbar
  const removeNav = ()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className='icon'/>Safari.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists grid">

          <li className="navItem">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={200}
                className="navLink"
                onClick={removeNav}
              >
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link
                to="main"
                spy={true}
                smooth={true}
                duration={200}
                className="navLink"
                onClick={removeNav}
              >
                Packages
              </Link>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <Link
                to="footer"
                spy={true}
                smooth={true}
                duration={200}
                className="navLink"
                onClick={removeNav}
              >
                Contact
              </Link>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
          <IoCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
        <PiDotsNineBold className='icon'/>
        </div>

      </header>
    </section>
  )
}

export default Navbar
