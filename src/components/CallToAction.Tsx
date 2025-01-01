'use client'
import { SectionWrapper } from "@/hoc"
import Image from "next/image"
import { cilindro, losango } from "@/assets"

const CallToAction = () => {
  return (
    <SectionWrapper className="bg-callToActionImage h-[922px]">
      <main className="flex max-w-[1463px]">
        <Image src={losango} alt="Image"/>
        <section>
          <div className="card border rounded-md">
            <h1>Está pronto para começar seu projeto?</h1>
            <button>Estou Pronto!</button>
          </div>
        </section>
        <Image src={cilindro} alt="Image"/>
      </main>
    </SectionWrapper>
  )
}

export default CallToAction