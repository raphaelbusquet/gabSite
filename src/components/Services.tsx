'use client'

import { SectionWrapper } from '@/hoc'
import Image from 'next/image'
import Link from 'next/link'
import { servicesIcon, arrowLink, objectIconServices1, objectIconServices2, itemLeftArrow, metalObject } from "@/assets"
import { motion } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Services = () => {
    
    const openList = () => {
        const showList = document.getElementById('showList');

        if (showList?.style.display === 'flex') {
            showList.style.display = 'none';
        } else {
            showList.style.display = 'flex';
        }
    };

  return (
    <SectionWrapper>
        <div id='services' className='w-full h-[1768px] flex flex-col items-center pt-16'>
            <Link href="#services">
                <div className='w-[35px] h-[43px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
                <motion.div 
                    animate={{
                    y: [-4, 12, -4]
                    }}
                    transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    }}
                    className='w-2 h-2 rounded-full bg-white mb-1'
                    
                />
                </div>
            </Link>
            <div className='mt-[55px] mb-[102px] text-5xl'>
                <div className='flex gap-2 justify-center items-center'>
                    <Image src={servicesIcon} alt='Service icon' />
                    <h2>Serviços</h2>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='backgroundBlur w-[456px] h-[564px] border border-[#7A40FF] rounded-[16px] flex flex-col justify-center pl-16 gap-4 text-left'>
                    <h2 className='text-3xl left-16'>Landing Page</h2>
                    <p className= 'w-[320px] text-zinc-400 mb-16'>Página web criada com o objetivo de <span className='text-white'>converter visitantes em leads ou clientes,</span> geralmente por meio de um formulário de contato ou botão de ação.</p>
                    <div className='w-[200px] hover:w-[300px] transition-all duration-150 bottom-32 absolute'>
                        <Link href="#" >
                            <Image src={arrowLink} alt='Link whatsapp' />
                        </Link>
                    </div>
                </div>
                <div className='backgroundBlur w-[456px] h-[564px] border border-[#7A40FF] rounded-[16px] flex flex-col justify-center pl-16 gap-4 text-left'>
                    <h2 className='text-3xl left-16'>Web Design</h2>
                    <p className= 'w-[320px] text-zinc-400 mb-4'>Esse serviço envolve a criação de uma <span className='text-white'>página web profissionaç e atraente</span> que represente a identidade e os valores da empresa, com foco na <span className='text-white'>apresentação de informações sobre a organização, seus produtos e serviços.</span></p>
                    <div className='w-[200px] hover:w-[300px] transition-all duration-150 bottom-32 absolute'>
                        <Link href="#" >
                            <Image src={arrowLink} alt='Link whatsapp' />
                        </Link>
                    </div>
                </div>
                <div className='backgroundBlur w-[456px] h-[564px] border border-[#7A40FF] rounded-[16px] flex flex-col justify-center pl-16 gap-4 text-left'>
                    <h2 className='text-3xl left-16'>Web Checkup</h2>
                    <p className= 'w-[320px] text-zinc-400 mb-4'>Esse serviço envolve a <span className='text-white'>análise e avaliação de um site existente</span>, com o objetivo de identificar problemas técnicos, de usabilidade, conteúdo e SEO, a fim de melhorar a experiência do usuário e aumenta a eficácia do site.</p>
                    <div className='w-[200px] hover:w-[300px] transition-all duration-150 bottom-32 absolute'>
                        <Link href="#" >
                            <Image src={arrowLink} alt='Link whatsapp' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <button onClick={openList} className='my-[81px] w-[456px] h-[117px] rounded-[34px] bg-secondary flex items-center justify-center pt-2 transition-all duration-150 hover:bg-[#240777]'>
                    <span className='text-[24px] uppercase'>Serviços adicionais +</span>
                </button>
                <div id='showList' className='hidden backgroundBlur w-[1140px] h-[495px] flex-col items-center border border-primary rounded-[20px]'>
                    <div className='flex items-center justify-center w-[1108px] h-[90px] mt-[19.5px] mb-[60px] rounded-[75px] bg-[#0F0F0F] text-lg'>
                        <h3 className='max-w-[600px] text-center    '>Temos uma equipe <span className='text-primary'>completa e qualificada</span> que está preparada para impulsionar o nosso serviço/negócio no digital.</h3>
                    </div>
                    <Accordion type='multiple' className='w-[960px] '>
                        <AccordionItem value='item1' className='flex items-center border-none h-8'>
                            <AccordionTrigger className='text-primary'><h2 className='mt-2'>Social Media:</h2></AccordionTrigger> <AccordionContent>Gerenciamento estratégico de postagens para redes sociais.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item2' className='flex items-center border-none h-8'>
                            <AccordionTrigger className='text-primary'><h2 className='mt-2'>Web Design:</h2></AccordionTrigger> 
                            <AccordionContent>Criação de interfaces digitais atrativas e funcionais para websites.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item3' className='flex items-center border-none h-8'>
                            <AccordionTrigger className='text-primary'><h2 className='mt-2'>Programação:</h2></AccordionTrigger> <AccordionContent>Soluções digitais personaAccordionItemzadas e programação de sistemas. (Full Stack)</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item4' className='flex items-center border-none h-8'>
                            <AccordionTrigger className='text-primary'><h2 className='mt-2'>Motion Design:</h2></AccordionTrigger> <AccordionContent>Animações e elementos visuais em movimento para vídeos e mídias digitais.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item5' className='flex items-center border-none h-8'>
                            <AccordionTrigger className='text-primary'><h2 className='mt-2'>Tráfego Pago:</h2></AccordionTrigger> <AccordionContent>Anúncios de alta conversão utizando plataformas como o facebook e Google.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item6' className='flex items-center border-none h-8'>
                            <AccordionTrigger className='text-primary'><h2 className='mt-2'>3D Design:</h2></AccordionTrigger> <AccordionContent>Criação de elementos, mascotes, personagens e ambientes em três dimensões.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item7' className='flex items-center border-none h-8'>
                            <AccordionTrigger className='text-primary'><h2 className='mt-2'>Ilustração:</h2></AccordionTrigger>
                            <AccordionContent>Temos uma equipe completa e quaAccordionItemficada que vai impulsionar o seu negócio.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item8' className='flex items-center border-none h-8'>
                            <AccordionTrigger className='text-primary'><h2 className='mt-2'>Diagramação:</h2></AccordionTrigger> <AccordionContent>Organização de elementos em peças gráficas, como revistas ou folhetos.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item9' className='flex items-center border-none h-8'>
                            <AccordionTrigger className='text-primary'><h2 className='mt-2'>Edição de Vídeos:</h2></AccordionTrigger> <AccordionContent>Montagem de vídeos dinâmicos para conteúdos e intituições.</AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="circleBlur2 -z-10"></div>
            <div className="circleBlur3 -z-10"></div>
            <Image src={objectIconServices1} className='objectIconServices1' alt='Object Image Services 1' />
            <Image src={objectIconServices2} className='objectIconServices2' alt='Object Image Services 2' />
            <Image src={metalObject} alt='Espiral' className='absolute bottom-[-400px] right-[-600px]'/>
        </div>
    </SectionWrapper>
  )
}

export default Services