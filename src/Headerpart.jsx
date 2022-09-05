import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
import { Link } from "react-router-dom";


const Headpart = () => {
    return (

        <section className="bg-black text-white pb-5">
          <header className='flex justify-between items-center'>
            <Link to="/">
            <div className='flex justify-start'>
            <h1 className='flex-auto mx-6 font-Qwitcher text-7xl'>Eatery</h1>
            </div>
            </Link>
           <div className='flex justify-evenly'>
            <Link to="/" className='flex-auto mx-9 px-9 font-semibold font-Montserrat'>Home</Link>
            <Link to="Menu" className='flex-auto mx-9 px-9 font-semibold font-Montserrat'>Menu</Link>
            <Link to="About"className='flex-auto mx-9 px-9 font-semibold font-Montserrat'>About us</Link>
            <Link to="Contact"className='flex-auto mx-9 px-9 font-semibold font-Montserrat'>Contact</Link>
            </div>
            <div className='flex justify-evenly gap-x-8 mr-12'>
            <a href="https://www.instagram.com/"><FaInstagram className="object-contain h-6 w-6" /></a>
             <a href="https://www.facebook.com/"><FaFacebookF className="object-contain h-5 w-5"/></a>
              <a href="https://www.twitter.com/"><FaTwitter className="object-contain h-6 w-6"/></a>
              <a href="https://www.yelp.com/"><FaYelp className="object-contain h-6 w-6"/></a>
            </div>
          </header>
          </section>
          )
}

export default Headpart