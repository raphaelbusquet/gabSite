import { SectionWrapper } from "@/hoc";
import Image from "next/image";
import { logo, whatsapp } from "@/assets";
import Link from "next/link";
import { boxTextItem } from "@/assets";

const Header = () => {
  return (
    <SectionWrapper>
        <div className="w-full h-[181px] flex justify-center">
          <div className="circleBlur -z-10"></div>
          <Image src={boxTextItem} alt="box text item" className="left-[84px] top-[130px] z-50 absolute" />
          <div className="circularHeaderWrapper -z-20 w-[1427px] h-[133px] bg-[#0A0C0F] rounded-full border-[#0A0C0F] top-[133px] absolute "></div>
          <div className="w-[1427px] h-[133px] flex justify-around items-center mt-[133px] mb-28 top-[150px]">
            <div>
              <div className="w-[668px] h-[96px] flex justify-center items-center">
                <Image src={logo} alt="logo" className="z-10" />
              </div>
            </div>
            <div className="w-[795px] h-[181px] flex justify-center gap-12 items-center">
                <div>
                  <button className="cta">
                    <span>Quero um projeto!</span>
                  </button>
                </div>
                <div className="border-white border border-solid rounded-[15px] whatsappHeaderButton  hover:bg-[#9e9e9e3d]">
                  <Link href='https://www.whatsapp.com' target="_blank">
                    <button className="flex justify-center items-center w-[136px] h-[73px]"><Image src={whatsapp} alt="whatsapp" className="w-[37px] h-[37px]" /></button>
                  </Link>
                </div>
              </div>
          </div>
        </div>
    </SectionWrapper>
  )
}

export default Header