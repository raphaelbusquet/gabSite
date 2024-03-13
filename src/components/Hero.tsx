'use client'

import { SectionWrapper } from '@/hoc'

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Images
import { heroImage, fileIcon, triangule } from '@/assets';

const Hero = () => {
    const [ref, inView] = useInView(
        {threshold: 0.5}
    )

    window.addEventListener('scroll', () => {
        // Captura a posição de rolagem vertical da página
        const scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;
        
        // Seleciona o elemento a ser apontado
        const followerTriangule: HTMLElement | null = document.getElementById('followerTriangule');
        
        // Verifica se o elemento apontador existe
        if (followerTriangule) {
          // Calcula a rotação com base na posição de rolagem
          const tiltAmount: number = 40; // Define o quanto o elemento vai se inclinar
          const rotation: number = (scrollTop / 650) * tiltAmount; // Ajuste o divisor para controlar a sensibilidade ao scroll
          
          // Aplica a rotação ao elemento
          followerTriangule.style.transform = `rotate(${rotation}deg)`;
        }
      });

  return (
    <SectionWrapper>
        <div ref={ref} className='flex w-full h-[798px]'>
            <div className='flex flex-col h-full w-[668px]'>
                <div className='flex-col w-full h-[547px] justify-center items-center text-center'>
                    <div className='flex flex-col max-h-full items-center'>
                        <h1 className='text-6xl font-extrabold  m-[74px]'>Bem-vindo!</h1>
                        <div className='w-[504px]'>
                            <p className='pl-[84px] text-left text-[24px] text-zinc-400 leading-8'>
                            Olá, eu sou <span className='text-white'>Gabriel Busquet</span>, Web designer
                            com +5 anos de
                            experiência no mercado.
                            <br /><br />
                            <span className='text-white'>
                                Guio empresas
                                e agências em lançamentos digitais
                            </span>, impulsionando vendas e guiando-os para
                            alcançar
                            seu <span className='text-white'>potencial máximo</span>.
                            </p>
                        </div>
                    </div>
                </div> 
                <div className='flex flex-col justify-between w-full h-[251px]'>
                    <div className='flex items-end ml-[19px] mt-[27px] gap-[10px]'>
                        <Image src={fileIcon} alt='file icon' />
                        <span className='text-muted-foreground font-[16px]'>Projetos entregues</span>
                    </div>
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='counter'>
                            {inView ? 
                                <CountUp  className='lining-nums' prefix='+' start={0} end={147} duration={4} /> : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div className='heroImage flex flex-1 items-center'>
                <Image className='top-[0px] mt-[37px] right-[51px] absolute w-[832px] h-[729px] z-40' src={heroImage} alt='hero image' />
            </div>
            <div id='followerTriangule' className='z-50 triangule'>
                <Image src={triangule} alt='triagule' /> 
            </div>
        </div>
    </SectionWrapper>
  )
}

export default Hero