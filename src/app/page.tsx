import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="h-[5186px] w-[1463px]">
      <div className="relative">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
        <div className="line5"></div>
        <div className="line6"></div>
        <div className="line7"></div>
        <div className="line8"></div>
      </div>
      <div className="bubble flex justify-center items-center">
              <div className="wrapper">
                <span className='textBox'>Excelente dia!</span>
              </div>
      </div>
      <Header />
      <Hero />
    </main>
  ); 
}
