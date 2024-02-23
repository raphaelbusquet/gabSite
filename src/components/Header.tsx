import { SectionWrapper } from "@/hoc";
import Image from "next/image";
import { logo, whatsapp } from "@/assets";
import Link from "next/link";
import { boxTextItem } from "@/assets";

const Header = () => {
  return (
    <SectionWrapper>
        <div className="w-full flex justify-center">
          <div className="circleBlur -z-10"></div>
          <Image src={boxTextItem} alt="box text item" className="boxTextSvg left-[412px]  top-[11px] z-50 absolute" />
          <div  className="circularHeaderWrapper -z-20 w-[827px] h-[77px] bg-[#0A0C0F] rounded-full border absolute "></div>
          <div className="w-[770px] h-[77px] flex justify-around items-center mb-28">
            <div>
              <div className="w-[262px] h-[52px] pt-2 mr-2 flex justify-center items-center">
                <Image src={logo} alt="logo" className="z-10" />
              </div>
            </div>
            <div className="logoSeparator"></div>
            <div className="w-[400px] h-[77px] flex justify-center gap-[32px] items-center">
                <div>
                  <button className="cta">
                    <span>Quero um projeto!</span>
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
    </SectionWrapper>
  )
}

export default Header