import React from "react";
import pizza from "./pizza.jpg";
import shakes from "./shakes.jpg";
import pancakes from "./pancakes.jpg";

export default function Cards() {
  return (
    <div className="bg-neutral-900 text-white text-center pt-20">
      <h1 className="text-7xl font-bold">Explore our speciality</h1>
      <section className="bg-neutral-900 grid grid-cols-3 justify-items-center py-28">
        <div className="bg-black p-3 max-w-xl rounded overflow-hidden shadow-lg">
          <img className="w-full" src={pizza} alt="Pizza" />
          <div className="bg-black  px-6 py-4">
            <div className="font-bold text-white text-xl mb-2">
              The Classic Pizza
            </div>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className=" bg-black px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="bg-black p-3 max-w-xl rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={pancakes}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className=" text-white font-bold text-xl mb-2">
              The Honey Drip Pancakes
            </div>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="bg-black p-3 max-w-xl rounded overflow-hidden shadow-lg">
          <img className="w-full" src={shakes} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="text-white font-bold text-xl mb-2">
              The Oreo Dream
            </div>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
