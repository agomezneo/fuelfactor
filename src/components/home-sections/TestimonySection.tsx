'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from '@/styles/testimony_section.module.scss'
import { TestimonialsData } from '@/data/TestimonialsCardData';
import TestimonyCard from '../cards/TestimonyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import VideoModal from '../modals/VideoModal';

export default function TestimonySection() {

    const [isMobile, setIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [testimonyVideo, setTestimonyVideo] = useState('')
    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);

    const onAutoplayTimeLeft = (swiper: any, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', String(1 - progress));
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    const isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      };

    useEffect(() => {
        setIsMobile(isMobileDevice());
    }, []);

    return (
        <section className={styles.testimony_section} id='contact'>

            <div className={styles.testimony_section_container}>
                <div className={styles.testimony_section_text}>
                    <h2 className={styles.sub_title}>Voces de Nuestros Clientes: Testimonios Reales</h2>
                </div>
                <div className={styles.testimonials_container}>
                    <Swiper
                        slidesPerView={isMobile ? 2.3 : 6 }
                        spaceBetween={30}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        {TestimonialsData.map((item, key) => (
                            <SwiperSlide key={key}>
                                <TestimonyCard 
                                    video={item.video}
                                    title={item.title}
                                    setShowModal={setShowModal}
                                    setTestimonyVideo={setTestimonyVideo}
                                    showModal={false} 
                                />
                            </SwiperSlide>
                        ))}
                        <div className={styles.autoplay_progress} slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>

            {showModal && (
                <VideoModal
                    setShowModal={setShowModal}
                > 
                    <div className={styles.video_modal_container} >
                        <video className={styles.video_modal} src={testimonyVideo} controls autoPlay  controlsList="nodownload"/>
                    </div>
                </VideoModal>
            )}

        </section>
    );
}