import { SectionWrapper } from "@/hoc";
import Image from "next/image";
import { logo, whatsapp } from "@/assets";

const Header = () => {
  return (
    <SectionWrapper>
        <div className="w-[1463px] flex justify-around items-center mt-[150px] mb-20 border border-[#0A0C0F] rounded-full bg-[#0A0C0F]">
          <div>
            <div className="w-[668px] h-[181px] flex justify-center items-center">
              <Image src={logo} alt="logo" />
            </div>
          </div>
          <div className="w-[795px] h-[181px] flex justify-center gap-12 items-center">
              <div className="">
                <button className="cta">Quero um projeto!</button>
              </div>
              <div className="border-white border border-solid rounded-[15px]">
                <button className="flex justify-center items-center w-[136px] h-[73px]"><Image src={whatsapp} alt="whatsapp" className="w-[37px] h-[37px]" /></button>
              </div>
            </div>
        </div>
    </SectionWrapper>
  )
}

export default Header