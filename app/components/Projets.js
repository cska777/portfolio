"use client";

import { Section } from './Section';
import Image from 'next/image';
import "../styles/projets.css";
import '../styles/arrow.css';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projets() {
    const [projets, setProjets] = useState([]);

    useEffect(() => {
        async function fetchProjets() {
            try {
                const isLocal = window.location.hostname === 'localhost';
                const basePath = isLocal ? '/data/projets.json' : '/portfolio/data/projets.json'; // Gestion des chemins locaux et production

                const res = await fetch(basePath, { cache: 'no-cache' });

                if (!res.ok) {
                    throw new Error('Erreur lors de la récupération des projets');
                }

                const data = await res.json();
                setProjets(data);
            } catch (error) {
                console.error('Erreur:', error);
            }
        }
        fetchProjets();
    }, []);

    return (
        <Section className="section-projets" id="projets">
            {projets.map((projet) => (
                <ProjetItem key={projet.id} projet={projet} />
            ))}
            <div className="div-arrow-flex">
                <div className="div-arrow">
                    <div className="arrow arrowSliding delay1"></div>
                    <div className="arrow arrowSliding delay2"></div>
                    <div className="arrow arrowSliding delay3"></div>
                </div>
            </div>
        </Section>
    );
}

function ProjetItem({ projet }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const isImpair = projet.id % 2 !== 0;
    const impairPlusGrandQueUn = projet.id % 2 !== 0 && projet.id > 1;
    const technologies = projet.techno;

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className={`div-projets-${isImpair ? "impair" : "pair"} ${impairPlusGrandQueUn ? "impairPlusQue1" : ""}`}>
            {isImpair ? (
                <>
                    <div className="gauche-projets-impair">
                        <div className='div-projets-h2-impair'>
                            <h2>{projet.nom}</h2>
                            <hr />
                        </div>
                        <p>{projet.desc}</p>
                        <div className='div-techno-impair'>
                            {technologies.map((tech, index) => (
                                <button key={index} className='button-techno'>{tech}</button>
                            ))}
                        </div>
                    </div>
                    <div className="droite-projets-impair">
                        <Carousel 
                            emblaRef={emblaRef} 
                            images={[projet.illu_url1, projet.illu_url2, projet.illu_url3, projet.illu_url4]} 
                            nom={projet.nom} 
                            className="illu-pair"
                            scrollPrev={scrollPrev}
                            scrollNext={scrollNext}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="gauche-projets-pair">
                        <Carousel 
                            emblaRef={emblaRef} 
                            images={[projet.illu_url1, projet.illu_url2, projet.illu_url3, projet.illu_url4]} 
                            nom={projet.nom} 
                            className="illu-impair"
                            scrollPrev={scrollPrev}
                            scrollNext={scrollNext}
                        />
                    </div>
                    <div className="droite-projets-pair">
                        <div className='div-projets-h2-pair'>
                            <hr />
                            <h2>{projet.nom}</h2>
                        </div>
                        <p>{projet.desc}</p>
                        <div className='div-techno-pair'>
                            {technologies.map((tech, index) => (
                                <button key={index} className='button-techno'>{tech}</button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

function Carousel({ emblaRef, images, nom, className, scrollPrev, scrollNext }) {
    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((image, index) => (
                        <div key={index} className="embla__slide">
                            <Image 
                                src={image}
                                alt={`Illustration ${index + 1} pour le projet ${nom}`}
                                width={500}
                                height={300} 
                                layout="responsive"
                                className={`illu${index + 1}-projets-${className} ${className}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}>
                <ChevronLeft />
            </button>
            <button className="embla__next" onClick={scrollNext}>
                <ChevronRight />
            </button>
        </div>
    );
}
