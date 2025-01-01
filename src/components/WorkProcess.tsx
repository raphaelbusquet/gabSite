'use client'

import { useEffect } from 'react'; // Import useEffect hook
import { trianguleWorkProcess, 
  workProcessItem,
  bigTriangule,
  purpleBox,
  boxes,
  stacks,
  timer
} from "@/assets"
import Image from "next/image"

const WorkProcess = () => {
  
  // Use useEffect hook to execute code after component is mounted
  useEffect(() => {
    let cards = document.querySelectorAll(".card");
    let stackArea = document.querySelector(".stack-area");

    function rotateCards() {
      let angle = 0;
      cards.forEach((card) => {
        // Cast the card to HTMLElement to access the style property
        const element = card as HTMLElement;

        if (element.classList.contains("active")) {
          element.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
        } else {
          element.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }
      });
    }

    rotateCards();

    // Add non-null assertion to stackArea, telling TypeScript it's guaranteed to be non-null here
    if (stackArea) {
      window.addEventListener("scroll", () => {
        // Use the non-null assertion here
        let proportion =
          (stackArea as HTMLElement).getBoundingClientRect().top / window.innerHeight;
        if (proportion <= 0) {
          let n = cards.length;
          let index = Math.ceil((proportion * n) / 2);
          index = Math.abs(index) - 1;
          for (let i = 0; i < n; i++) {
            if (i <= index) {
              cards[i].classList.add("active");
            } else {
              cards[i].classList.remove("active");
            }
          }
          rotateCards();
        }
      });
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div className="h-[1428px] w-screen flex justify-center bg-white">
      <div className="h-full w-[1463px] relative">
        <div className="w-[500px] flex justify-center items-center gap-4 pt-32 pb-32">
          <div className="h-8 w-8">
            <Image src={trianguleWorkProcess} alt="Triangule" /> 
          </div>
          <h2 className="pt-4 text-black text-4xl">Processos de trabalho</h2>
        </div>
        <div className="flex h-full">
          <div className="relative">
            <Image src={bigTriangule} alt="Big Triangule" />
            <Image className="absolute left-[210px] top-[-40px]" src={purpleBox} alt="Purple Box"/>
            <Image className="absolute left-[-30px] top-[350px]" src={purpleBox} alt="Purple Box"/>
            <Image className="absolute left-[450px] top-[350px]" src={purpleBox} alt="Purple Box"/>
            <Image className="absolute left-[3px] top-[380px]" src={boxes} alt="Purple Box"/>
            <Image className="absolute left-[483px] top-[380px]" src={stacks} alt="Purple Box"/>
            <Image className="absolute left-[242px] top-[-10px]" src={timer} alt="Purple Box"/>
          </div>
          <div className="text-black flex flex-col gap-8 stack-area">
            <div className="card rounded-[26px] w-[694px] h-[263px] bg-[#EEEDEF] flex flex-col gap-8 justify-center items-start text-justify pl-6">
              <h3 className="text-2xl text-primary">Alinhamento inicial</h3>
              <p className="text-[22px] w-[540px] text-[#3A3A3A]">Definimos cores, elementos e estilos para a peça, além de momentos para receber links essenciais para o projeto.</p>
            </div>
            <div className="card rounded-[26px] w-[694px] h-[263px] bg-[#EEEDEF] flex flex-col gap-8 justify-center items-start text-justify pl-6">
              <h3 className="text-2xl text-primary">Desenvolvimento</h3>
              <p className="text-[22px] w-[540px] text-[#3A3A3A]">As entregas são feitas em &apos;blocos&apos;, garantindo a coerência. Alterações seguem o briefing e são solicitadas numa listagem para a aplicação simultânea, antes de reenviar a peça.</p>
              
            </div>
            <div className="card rounded-[26px] w-[694px] h-[263px] bg-[#EEEDEF] flex flex-col gap-8 justify-center items-start text-justify pl-6">
              <h3 className="text-2xl text-primary">Prazos e Entrega</h3>
              <p className="text-[22px] w-[540px] text-[#3A3A3A]">Discutimos prazos, métodos de entrega e estabelecemos datas para garantir a assertividade na produtividade do projeto.</p>
            </div>
          </div>
        </div>
        <div>
          <Image className="absolute left-[-400px] bottom-[-400px]" src={workProcessItem} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default WorkProcess;
