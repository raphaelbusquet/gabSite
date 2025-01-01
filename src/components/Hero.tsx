'use client';

import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Images
import { heroImage, fileIcon, triangule } from '@/assets';

const Hero = () => {
    const [ref, inView] = useInView({ threshold: 0.5 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const followerTriangule = document.getElementById('followerTriangule');

            if (followerTriangule) {
                const tiltAmount = 40;
                const rotation = (scrollTop / 650) * tiltAmount;
                followerTriangule.style.transform = `rotate(${rotation}deg)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <SectionWrapper>
            <div ref={ref} className="flex w-full h-[798px]">
                <ContentSection inView={inView} />
                <HeroImage />
                <FollowerTriangule />
            </div>
        </SectionWrapper>
    );
};

const ContentSection = ({ inView }: { inView: boolean }) => (
    <div className="flex flex-col h-full w-[668px]">
        <HeroHeader />
        <ProjectCount inView={inView} />
    </div>
);

const HeroHeader = () => (
    <div className="flex-col w-full h-[547px] justify-center items-center text-center">
        <div className="flex flex-col max-h-full items-center">
            <h1 className="text-6xl font-extrabold m-[74px]">Bem-vindo!</h1>
            <div className="w-[504px]">
                <p className="pl-[84px] text-left text-[24px] text-zinc-400 leading-8">
                    Olá, eu sou <span className="text-white">Gabriel Busquet</span>, Web designer com +5
                    anos de experiência no mercado.
                    <br />
                    <br />
                    <span className="text-white">Guio empresas e agências em lançamentos digitais</span>,
                    impulsionando vendas e guiando-os para alcançar seu{' '}
                    <span className="text-white">potencial máximo</span>.
                </p>
            </div>
        </div>
    </div>
);

const ProjectCount = ({ inView }: { inView: boolean }) => (
    <div className="flex flex-col justify-between w-full h-[251px]">
        <div className="flex items-end ml-[19px] mt-[27px] gap-[10px]">
            <Image src={fileIcon} alt="file icon" />
            <span className="text-muted-foreground font-[16px]">Projetos entregues</span>
        </div>
        <div className="w-full h-full flex items-center justify-center">
            <div className="counter">
                {inView ? (
                    <CountUp className="lining-nums" prefix="+" start={0} end={147} duration={4} />
                ) : null}
            </div>
        </div>
    </div>
);

const HeroImage = () => (
    <div className="heroImage flex flex-1 items-center">
        <Image
            className="top-[0px] mt-[37px] right-[51px] absolute w-[832px] h-[729px] z-40"
            src={heroImage}
            alt="hero image"
        />
    </div>
);

const FollowerTriangule = () => (
    <div id="followerTriangule" className="z-50 triangule">
        <Image src={triangule} alt="triangule" />
    </div>
);

export default Hero;
