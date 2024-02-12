'use client'

import { SectionWrapper } from '@/hoc'

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Images
import { instagram, behance, linkedin, heroImage } from '@/assets';

const Hero = () => {
    const [ref, inView] = useInView(
        {threshold: 0.5}
    )
  return (
    <SectionWrapper>
        <div ref={ref} className='flex justify-between h-[1028px]'>
            <div className='flex-col items-stretch w-[668px]'>
                <div className='flex-col justify-center items-center text-center'>
                    <h1 className='text-6xl font-extrabold m-10'>Bem vindo!</h1>
                    <p className='text-muted-foreground text-justify ml-[28%] mb-10'>
                        Olá, eu sou <span className='text-foreground'>Gabriel Busquet</span>, Web <br /> designer
                        com +5 anos de <br />
                        experiência no mercado.
                    </p>
                    <p className='text-muted-foreground text-justify ml-[28%] mb-10'>
                        <span className='text-foreground'>
                            Guio empresas
                            e agências em <br />lançamentos digitais
                        </span>, impulsionando <br /> vendas e guiando-os para
                        alcançar <br />
                        seu <span className='text-foreground'>potencial máximo</span>.
                    </p>
                </div>
                <div>
                    <div>
                        <span className='mt-10 ml-12 text-muted-foreground'>Projetos entregues</span>
                    </div>
                    <div className='counter text-center'>
                        {inView ? 
                            <CountUp prefix='+' start={0} end={147} duration={4} /> : '147'}
                    </div>
                </div>
                <div>
                    <div className='social'>
                            <p>Estou por aqui também:</p>
                            <div className='flex gap-[14px]'>
                                <Image className='w-[48px] h-[48px]' src={instagram} alt='instagram' />
                                <Image className='w-[48px] h-[48px]' src={behance} alt='behance' />
                                <Image className='w-[48px] h-[48px]' src={linkedin} alt='linkedin' />
                            </div>
                    </div>
                </div>
            </div>
            <div>
                <Image className='w-[1024px] h-[924px] mr-[24px]' src={heroImage} alt='HeroImage' />
            </div>
        </div>
    </SectionWrapper>
  )
}

export default Hero