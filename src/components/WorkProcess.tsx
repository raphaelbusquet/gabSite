import { trianguleWorkProcess } from "@/assets"
import Image from "next/image"


const WorkProcess = () => {
  return (
    <div className="h-[1438px] w-screen bg-white">
      <div>
          <Image src={trianguleWorkProcess} alt="Triangule" /> 
          <h2 className="text-black">Processos de trabalho</h2>
      </div>
  </div>
  )
}

export default WorkProcess