import { trianguleWorkProcess, workProcessItem } from "@/assets"
import Image from "next/image"


const WorkProcess = () => {
  return (
    <div className="h-[1428px] w-screen flex justify-center bg-white">
      <div className="h-full w-[1463px] relative">
        < div className="flex justify-center items-center pt-32 pb-32">
            <div className="h-8 w-8">
              <Image src={trianguleWorkProcess} alt="Triangule" /> 
            </div>
            <h2 className="text-black">Processos de trabalho</h2>
        </div>
        <div className="flex">
          <div className="text-black">
              Triangule
          </div>
          <div className="text-black">
            <div>
              <h3>Alinhamento inicial</h3>
              <p>Definimos cores, elementos e estilos para a peça, além de momentos para receber links essenciais para o projeto.</p>
            </div>
            <div>
              <h3>Desenvolvimento</h3>
              <p>As entregas sãp feitas em &apos;blocos&apos;, garantindo a coerência. Alterações seguem o briefing e são solicitadas numa listagem para a aplicação simultânea, antes de reenviar a peça.</p>
            </div>
            <div>
              <h3>Prazos e Entrega</h3>
              <p>Discutimos prazos, métodos de entrega e estabelecemos datas para garantir a assertividade na produtividade do projeto.</p>
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