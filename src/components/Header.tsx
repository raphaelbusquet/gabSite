'use client'

import Image from "next/image";
import { logo, whatsapp } from "@/assets";
import Link from "next/link";
import { boxTextItem } from "@/assets";
import { useEffect } from 'react';
import { SectionWrapper } from "@/hoc";

const Header: React.FC = () => {
  useEffect(() => {
    const updateGreetingText = () => {
      // Make sure we're on the client side before accessing the document
      if (typeof window !== 'undefined') {
        const now = new Date();
        const hour = now.getHours();

        const greetingText = document.getElementById('greetingText');

        if (greetingText) {
          if (hour >= 6 && hour < 12) {
            greetingText.textContent = 'Exelente dia!';
          } else if (hour >= 12 && hour < 18) {
            greetingText.textContent = 'Exelente tarde!';
          } else {
            greetingText.textContent = 'Exelente noite!';
          }
        }
      }
    };

    // Call the function initially to set up the greeting text
    updateGreetingText();

    // Call the function every minute to update the text
    const intervalId = setInterval(updateGreetingText, 1800000);

    return () => {
      clearInterval(intervalId); // Clear the range when disassembling the component
    };
  }, []);

  return (
    <SectionWrapper>
        <div className="h-[150px]">
          <div>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
            <div className="line5"></div>
            <div className="line6"></div>
          </div>
          <div className="circleBlur1 -z-10"></div>
          <div className="w-full flex items-center justify-center h-full pt-8">
            <div className="w-[770px] h-[77px] flex justify-around items-center">
              <div  className="circularHeaderWrapper -z-20 w-[827px] h-[77px] bg-[#0A0C0F] rounded-full border absolute ">
                <div className="absolute">
                  <div className="bubble flex justify-center items-center">
                    <div className="wrapper">
                      <span id="greetingText" className='textBox'>Excelente dia!</span>
                    </div>
                    <Image src={boxTextItem} alt="box text item" className="boxTextSvg left-[8px] top-[17px] absolute" />
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[262px] h-[52px] pt-2 mr-2 flex justify-center items-center">
                  <Image src={logo} alt="logo" className="z-10" />
                </div>
              </div>
              <div className="logoSeparator"></div>
              <div className="w-[400px] h-[77px] flex justify-center gap-[32px] items-center">
                  <div>
                    <button className="cta flex items-center text-nowrap mb-1">
                      <span className="pt-1 text-[16px]">Quero um projeto!</span>
                    </button>
                  </div>
                  <div className="border-white border border-solid rounded-[15px] whatsappHeaderButton  hover:bg-[#9e9e9e3d]">
                    <Link href='https://www.whatsapp.com' target="_blank">
                      <button className="flex justify-center items-center w-[79px] h-[43px]"><Image src={whatsapp} alt="whatsapp" className="w-[23px] h-[23px]" /></button>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </SectionWrapper>
  )
}

export default Header