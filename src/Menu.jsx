import React, { useState } from "react";
import Data from "./data";
import Items from "./items";

export default function Menu() {
  const ucategories = ["all"];
  ucategories.push(...new Set(Data.map((data) => data.category)));

  const [filters, setfilter] = useState("all");

  function changefilter(fil) {
    setfilter(fil);
  }

  return (
    <div className="bg-slate-800 text-white py-10 items-center">
      <header className="flex justify-center gap-x-12 ">
        {ucategories.map((category) => {
          return (
            <button
              className="font-Montserrat text-xl capitalize "
              onClick={() => changefilter(category)}
            >
              {category === filters ? (
                <span className="underline underline-offset-8">{category}</span>
              ) : (
                <span>{category}</span>
              )}
            </button>
          );
        })}
      </header>
      <div className="flex justify-center my-10">
        <hr className="flex-none w-3/5" />
      </div>
      <Items data={Data.filter((val) => val.category !== filters)} />
    </div>
  );
}
