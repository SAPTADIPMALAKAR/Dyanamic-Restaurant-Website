import React from "react";

export default function Items(props) {
  const { data } = props;
  return (
    <div className="flex flex-wrap justify-evenly">
      {data.map((val) => {
        return (
          <section className="flex-auto w-1/5 h-96 m-10 mb-10 ">
            <article className="flex-auto bg-black p-3 ">
              <img src={val.img} alt={val.title} className="object-cover" />
              <div className="">
                <header className="flex justify-between">
                  <h1 className="flex-auto grow capitalize">{val.title}</h1>
                  <h1 className="flex-none">{val.price}</h1>
                </header>
                <div className=" flex-auto pt-10  px-3 text-justify">
                  <p className="object-fill pb-7 ">{val.desc}</p>
                </div>
              </div>
            </article>
          </section>
        );
      })}
    </div>
  );
}
