import { SectionWrapper } from '@/hoc'
import Image from 'next/image'
import Link from 'next/link'
import { servicesIcon, arrowLink, scrollDownIcon, objectIconServices1, objectIconServices2 } from "@/assets"

const Services = () => { 
  return (
    <SectionWrapper>
        <div className='w-full h-[1768px] flex flex-col items-center'>
            <div className='mt-[61px]'>
                <Image src={scrollDownIcon} alt='Scroll Down Button' />
            </div>
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
                    <Link href="#">
                        <Image src={arrowLink} alt='Link whatsapp' />
                    </Link>
                </div>
                <div className='backgroundBlur w-[456px] h-[564px] border border-[#7A40FF] rounded-[16px] flex flex-col justify-center pl-16 gap-4 text-left'>
                    <h2 className='text-3xl left-16'>Web Design</h2>
                    <p className= 'w-[320px] text-zinc-400 mb-4'>Esse serviço envolve a criação de uma <span className='text-white'>página web profissionaç e atraente</span> que represente a identidade e os valores da empresa, com foco na <span className='text-white'>apresentação de informações sobre a organização, seus produtos e serviços.</span></p>
                    <Link href="#">
                        <Image src={arrowLink} alt='Link whatsapp' />
                    </Link>
                </div>
                <div className='backgroundBlur w-[456px] h-[564px] border border-[#7A40FF] rounded-[16px] flex flex-col justify-center pl-16 gap-4 text-left'>
                    <h2 className='text-3xl left-16'>Web Checkup</h2>
                    <p className= 'w-[320px] text-zinc-400 mb-4'>Esse serviço envolve a <span className='text-white'>análise e avaliação de um site existente</span>, com o objetivo de identificar problemas técnicos, de usabilidade, conteúdo e SEO, a fim de melhorar a experiência do usuário e aumenta a eficácia do site.</p>
                    <Link href="#">
                        <Image src={arrowLink} alt='Link whatsapp' />
                    </Link>
                </div>
            </div>
            <div className='mt-64'>
                <button>
                    <span>Serviços adicionais +</span>
                </button>
                <div>
                    <h3>Temos uma equipe <span>completa e qualificada</span> que está preparada para impulsionar o nosso serviço/negócio no digital.</h3>
                    <ul>
                        <li>Social Media: Gerenciamento estratégico de postagens para redes sociais.</li>
                        <li>Web Design: Criação de interfaces digitais atrativas e funcionais para websites.</li>
                        <li>Programação: Soluções digitais personalizadas e programação de sistemas. (Full Stack)</li>
                        <li>Motion Design: Animações e elementos visuais em movimento para vídeos e mídias digitais.</li>
                        <li>Tráfego Pago: Anúncios de alta conversão utilizando plataformas como o facebook e Google.</li>
                        <li>3D Design: Criação de elementos, mascotes, personagens e ambientes em três dimensões.</li>
                        <li>Ilustração: Temos uma equipe completa e qualificada que vai impulsionar o seu negócio.</li>
                        <li>Diagramação: Organização de elementos em peças gráficas, como revistas ou folhetos.</li>
                        <li>Edição de Vídeos: Montagem de vídeos dinâmicos para conteúdos e intituições.</li>
                    </ul>
                </div>
            </div>
            <div className="circleBlur2 -z-10"></div>
            <div className="circleBlur3 -z-10"></div>
            <Image src={objectIconServices1} className='objectIconServices1' alt='Object Image Services 1' />
            <Image src={objectIconServices2} className='objectIconServices2' alt='Object Image Services 2' />
        </div>
    </SectionWrapper>
  )
}

export default Services