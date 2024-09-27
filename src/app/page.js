"use client";
import { useState } from "react";

export default function Home() {
  const [ copy, setCopy ] = useState(false);
  const onClick = () => {
    const copyText = document.getElementById("url");
    navigator.clipboard.writeText(copyText.value);
    setCopy(true);
  }
  return (
    <main className="bg-white flex min-h-screen items-center justify-center">
      <div className="bg-[#CFF9FF] flex flex-col gap-6 p-16 justify-center items-center rounded-[40px] shadow-md hover:shadow-lg transition duration-200 mobile:p-12">
        <div className="text-black text-3xl text-center font-bold mobile:text-xl ">
          Найзууддаа сорилоо хуваалцаарай
        </div>
        <div className="flex gap-9 flex-wrap justify-center items-center mobile:gap-4">
          <a href="" className="h-20 w-20 flex justify-center items-center bg-[#F8F8F8] hover:border-2 rounded-full hover:border-black transition duration-300 mobile:h-16 mobile:w-16"> <img className="mobile:h-[22px] mobile:w-[22px]" src="/twitter.svg"/></a>
          <a href="" className="h-20 w-20 flex justify-center items-center bg-[#F8F8F8] hover:border-2 rounded-full hover:border-black transition duration-300 mobile:h-16 mobile:w-16"> <img className="mobile:h-[22px] mobile:w-[22px]" src="/linkedin.svg" /></a>
          <a href="" className="h-20 w-20 flex justify-center items-center bg-[#F8F8F8] hover:border-2 rounded-full hover:border-black transition duration-300 mobile:h-16 mobile:w-16"> <img className="mobile:h-[22px] mobile:w-[22px]" src="/facebook.svg" /></a>
          <a href="" className="h-20 w-20 flex justify-center items-center bg-[#F8F8F8] hover:border-2 rounded-full hover:border-black transition duration-300 mobile:h-16 mobile:w-16"> <img className="mobile:h-[22px] mobile:w-[22px]" src="/instagram.svg" /></a>
          <a href="" className="h-20 w-20 flex justify-center items-center bg-[#F8F8F8] hover:border-2 rounded-full hover:border-black transition duration-300 mobile:h-16 mobile:w-16"> <img className="mobile:h-[22px] mobile:w-[22px]" src="/pinterest.svg" /></a>
          <a href="" className="h-20 w-20 flex justify-center items-center bg-[#F8F8F8] hover:border-2 rounded-full hover:border-black transition duration-300 mobile:h-16 mobile:w-16"> <img className="mobile:h-[22px] mobile:w-[22px]" src="/telegram.svg" /></a>
        </div>
        <div className="text-lg text-black font-semibold mobile:text-base">
          Эсвэл
        </div>
        <div className="bg-[#F8F8F8] w-full flex gap-14 px-9 py-5 text-black rounded-xl mobile:gap-6 mobile:flex-col justify-center items-center">
          <div className="w-full">
            <input id="url" className="bg-[#F8F8F8] w-full" readOnly value="https://www.youtube.com"/>
          </div>
          <div className="font-bold">
            <button onClick={() => onClick()} className="mobile:text-sm">
              {copy ? (<div>Хуулагдсан</div>) : (<div>Хуулах</div>)}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
