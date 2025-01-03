import { SectionWrapper } from "@/hoc"
import Image from "next/image"
import { cilindro, losango } from "@/assets"
import ButtonCallToAction from "./ButtonCallToAction"

const CallToAction = () => {
  return (
    <SectionWrapper className="h-[922px]">
      <main className="flex relative justify-center items-center h-full max-w-[1463px]">
        <div className="circleBlur4"></div>
        <Image className="z-10 absolute -left-10 scale-90" src={losango} alt="Losango"/>
        <Image className="absolute top-[220px] -z-20 right-[260px] scale-90" src={cilindro} alt="Cilindro"/>
          <div className="z-0 flex flex-col justify-center items-center border rounded-xl border-secondary w-[600px] h-[280px] bg-[#0000004d] backdrop-blur-md">
            <div className="flex flex-col justify-center items-center p-20 text-center max-w-[500px]">
              <h1 className="text-3xl font-light">Está pronto para começar seu projeto?</h1>
              <ButtonCallToAction />
            </div>
          </div>
      </main>
    </SectionWrapper>
  )
}

export default CallToAction