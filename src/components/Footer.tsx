import { behance, comercial, instagram, linkedin, miniLogo } from "@/assets"
import Image from "next/image"

const Footer = () => {
  return (
    <section className="w-full bg-[#0A0C0FD9]">
        <section className="max-w-[1463px] h-[121px] flex items-center justify-between">
            <div>
                <Image src={miniLogo} alt="Logo Footer"/>
            </div>

            <div className="flex gap-2 place-items-center">
                <Image src={comercial} alt="comercial simbol"/>
                <span className="!font-extralight">2024 Busquet Design-Todos os direitos reservados</span>
            </div>
                
            <div className="flex gap-2">   
                <Image src={instagram} alt="Social media image"/>
                <Image src={behance} alt="Social media image"/>
                <Image src={linkedin} alt="Social media image"/>
            </div>
        </section>
    </section>
  )
}

export default Footer