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
  return (
    <div className="h-[1428px] w-screen flex justify-center bg-white">
      <div className="h-full w-[1463px] relative">
        < div className="w-[500px] flex justify-center items-center gap-4 pt-32 pb-32">
            <div className="h-8 w-8">
              <Image src={trianguleWorkProcess} alt="Triangule" /> 
            </div>
            <h2 className="pt-4 text-black text-4xl">Processos de trabalho</h2>
        </div>
        <div className="flex h-full">
          <div className="relative">
              <Image src={bigTriangule} alt="Big Triangule" />
              <Image className="absolute left-[10px] bottom-80px]" src={purpleBox} alt="Purple Box"/>
              <Image className="absolute left-[5px] bottom-80px]" src={purpleBox} alt="Purple Box"/>
              <Image className="absolute left-[0px] bottom-80px]" src={purpleBox} alt="Purple Box"/>
          </div>
          <div className="text-black flex flex-col gap-8">
            <div className="rounded-[26px] w-[694px] h-[263px] bg-[#EEEDEF] flex flex-col gap-8 justify-center items-start text-justify pl-6">
              <h3 className="text-2xl text-primary">Alinhamento inicial</h3>
              <p className="text-[22px] w-[540px]">Definimos cores, elementos e estilos para a peça, além de momentos para receber links essenciais para o projeto.</p>
            </div>
            <div className="rounded-[26px] w-[694px] h-[263px] bg-[#EEEDEF] flex flex-col gap-8 justify-center items-start text-justify pl-6">
              <h3 className="text-2xl text-primary">Desenvolvimento</h3>
              <p className="text-[22px] w-[540px]">As entregas são feitas em &apos;blocos&apos;, garantindo a coerência. Alterações seguem o briefing e são solicitadas numa listagem para a aplicação simultânea, antes de reenviar a peça.</p>
            </div>
            <div className="rounded-[26px] w-[694px] h-[263px] bg-[#EEEDEF] flex flex-col gap-8 justify-center items-start text-justify pl-6">
              <h3 className="text-2xl text-primary">Prazos e Entrega</h3>
              <p className="text-[22px] w-[540px]">Discutimos prazos, métodos de entrega e estabelecemos datas para garantir a assertividade na produtividade do projeto.</p>
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

export default WorkProcess 