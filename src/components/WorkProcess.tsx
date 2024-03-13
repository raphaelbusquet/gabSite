import { trianguleWorkProcess, workProcessItem } from "@/assets"
import Image from "next/image"


const WorkProcess = () => {
  return (
    <div className="h-[1428px] w-screen flex justify-center bg-white">
      <div className="flex gap-2">
          <Image className="h-8 w-8" src={trianguleWorkProcess} alt="Triangule" /> 
          <h2 className="text-black">Processos de trabalho</h2>
      </div>
      <div>
        <Image src={workProcessItem} alt="image" />
      </div>
    </div>
  )
}

export default WorkProcess 