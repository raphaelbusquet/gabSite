'use client';

import { useEffect, useState } from 'react';
import {
  trianguleWorkProcess,
  workProcessItem,
  bigTriangule,
  purpleBox,
  boxes,
  stacks,
  timer,
} from '@/assets';
import Image from 'next/image';

const WorkProcess = () => {
  const [rotation, setRotation] = useState(0);
  const [resetTimeout, setResetTimeout] = useState<NodeJS.Timeout | null>(null);
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Alinhamento inicial',
      content:
        'Definimos cores, elementos e estilos para a peça, além de momentos para receber links essenciais para o projeto.',
        associatedAngle: 0,
    },
    {
      id: 2,
      title: 'Desenvolvimento',
      content:
        'As entregas são feitas em "blocos", garantindo a coerência. Alterações seguem o briefing e são solicitadas numa listagem para a aplicação simultânea, antes de reenviar a peça.',
        associatedAngle: 120,
    },
    {
      id: 3,
      title: 'Prazos e Entrega',
      content:
        'Discutimos prazos, métodos de entrega e estabelecemos datas para garantir a assertividade na produtividade do projeto.',
        associatedAngle: 240,
    },
  ]);

  const handleCardClick = (id: number) => {
    const card = cards.find((c) => c.id === id);
    if (card) {
      setRotation(-card.associatedAngle);

      if (resetTimeout) {
        clearTimeout(resetTimeout);
      }

      const timeout = setTimeout(() => {
        setRotation(0);
      }, 6000);

      setResetTimeout(timeout);
    }
  };

  useEffect(() => {
    return () => {
      if (resetTimeout) {
        clearTimeout(resetTimeout);
      }
    };
  }, [resetTimeout]);


  return (
    <div className="h-[1428px] w-screen flex justify-center bg-white">
      <div className="h-full w-[1463px] relative">
        <div className="w-[500px] flex justify-center items-center gap-4 pt-32 pb-32">
          <div className="h-8 w-8 pt-[3px]">
            <Image src={trianguleWorkProcess} alt="Triangule" />
          </div>
          <h2 className="text-black text-4xl">Processos de trabalho</h2>
        </div>
        <div className="h-full">
          <div className="left-[10px] absolute">
            <Image src={bigTriangule} alt="Big Triangule" />

            <Image
              className="absolute left-[210px] top-[-40px]"
              src={purpleBox}
              alt="Purple Box"
            />
            <Image
              className="absolute left-[-30px] top-[350px]"
              src={purpleBox}
              alt="Purple Box"
            />
            <Image
              className="absolute left-[450px] top-[350px]"
              src={purpleBox}
              alt="Purple Box"
            />
            <Image
              className="absolute"
              src={boxes}
              alt="Purple Box"

              style={{
                left: '6px',
                top: '382px',
                transform: '',
              }}
            />
            <Image
              className="absolute"
              src={stacks}
              alt="Purple Box"

              style={{
                top: '380px',
                right: '6px',
              }}
            />
            <Image
              className="absolute"
              src={timer}
              alt="Purple Box"

              style={{
                left: '45%',
                top: '-10px',
              }}
            />
          </div>
          <div className="flex flex-col gap-8 absolute bottom-[200px] left-[700px]">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`card rounded-[26px] w-[694px] h-[263px] bg-[#EEEDEF] flex flex-col gap-8 justify-center items-start text-justify pl-6 cursor-pointer transition-transform duration-500 ${
                  rotation === -card.associatedAngle
                    ? 'z-10 transform scale-105 translate-y-[-64px]'
                    : ''
                }`}
                onClick={() => handleCardClick(card.id)}
              >
                <h3 className="text-2xl text-primary">{card.title}</h3>
                <p className="text-[22px] w-[540px] text-[#3A3A3A]">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image
            className="absolute left-[-400px] bottom-[-400px]"
            src={workProcessItem}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;