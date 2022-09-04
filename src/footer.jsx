import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";

export default function Footer(){
    return (
    <div className="bg-black px-20 text-white text-center">
        <section className="grid pt-14 gap-x-32 grid-cols-2">
            <div className="">
            <h1 className='col-start-10 mx-6 font-Qwitcher text-9xl'>Eatery</h1>
            </div>
            <div className="col-end-10 " >
                <p className=" justify-items-end">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Voluptatibus quia, nulla! Maiores et perferendis eaque, 
                exercitationem praesentium nihil.
                </p>
            </div>
        </section>
        <hr className="mt-10"></hr>
        <section className="flex flex-row justify-center text-center pt-10">

        <div className='flex justify-evenly gap-x-8'>
              <a href="https://www.instagram.com/"><FaInstagram className="object-contain h-6 w-6" /></a>
             <a href="https://www.facebook.com/"><FaFacebookF className="object-contain h-5 w-5"/></a>
              <a href="https://www.twitter.com/"><FaTwitter className="object-contain h-6 w-6"/></a>
              <a href="https://www.yelp.com/"><FaYelp className="object-contain h-6 w-6"/></a>
            </div>
        </section>
        <h1  className="py-10">Made by Saptadip Malakar</h1>
        
    </div>
    )
}