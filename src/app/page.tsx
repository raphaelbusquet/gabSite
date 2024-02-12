import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { boxTextItem } from "@/assets";

export default function Home() {
  return (
    <main className="mx-100 w-full h-[5746px] relative">
      <div className="bubble flex justify-center items-center">
              <div className="wrapper">
                <span className='textBox'>Excelente dia!</span>
              </div>
      </div>
      <Image src={boxTextItem} alt="box text item" className="left-[85px] top-[208px] z-10 absolute" />
      <Header />
      <Hero />
    </main>
  ); 
}
