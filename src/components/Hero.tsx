'use client'

import { SectionWrapper } from '@/hoc'

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Images
import { instagram, behance, linkedin, heroImage, fileIcon, socialsBackground } from '@/assets';

const Hero = () => {
    const [ref, inView] = useInView(
        {threshold: 0.5}
    )
  return (
    <SectionWrapper>
        <div ref={ref} className='flex w-full h-[1028px] mt-[108px]'>
            <div className='flex flex-col h-full w-[668px]'>
                <div className='flex-col w-full h-[599px] justify-center items-center text-center'>
                    <div className='flex flex-col max-h-full items-center'>
                        <h1 className='text-6xl font-extrabold m-[74px]'>Bem vindo!</h1>
                        <div className='w-[420px] h-[597px]'>
                            <p className='pl-12 text-left font-normal text-[24px]'>
                            Olá, eu sou Gabriel Busquet, Web designer
                            com +5 anos de
                            experiência no mercado.
                            <br /><br />
                            Guio empresas
                            e agências em lançamentos digitais, impulsionando vendas e guiando-os para
                            alcançar
                            seu potencial máximo.
                            </p>
                        </div>
                    </div>
                </div> 
                <div className='flex flex-col justify-between w-full h-[274px] font-thin'>
                    <div className='flex items-end ml-[19px] mt-[27px] gap-[10px]'>
                        <Image src={fileIcon} alt='file icon' />
                        <span className='text-muted-foreground font-[16px]'>Projetos entregues</span>
                    </div>
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='counter'>
                            {inView ? 
                                <CountUp className='lining-nums' prefix='+' start={0} end={147} duration={4} /> : '147'}
                        </div>
                    </div>
                </div>
                <div className='flex w-full h-[155px]'>
                    <div className='flex flex-col justify-evenly items-center w-[273px] social'>
                            <div>
                                <p>Estou por aqui também:</p>
                            </div>
                            <div className='flex gap-[14px]'>
                                <Image className='w-[48px] h-[48px]' src={instagram} alt='instagram' />
                                <Image className='w-[48px] h-[48px]' src={behance} alt='behance' />
                                <Image className='w-[48px] h-[48px]' src={linkedin} alt='linkedin' />
                            </div>
                    </div>
                    <div>
                        <Image src={socialsBackground} alt='background social medias' />
                    </div>
                </div>
            </div>
            <div className='heroImage flex items-center w-[795px] h-full '>
                <Image className='-right-[-24px] absolute w-[870px] h-[924px]' src={heroImage} alt='hero image' />
            </div>
        </div>
    </SectionWrapper>
  )
}

export default Hero