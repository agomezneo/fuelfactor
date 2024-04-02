'use client'
import React, { useRef, useState, useEffect, useContext } from 'react';
import styles from '@/styles/section_three.module.scss'
import { ProductData } from '@/data/ProductCardData'
import ProductCard from '../cards/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ProductsContext, useProducts } from '@/context/ProductsContext';

export default function SectionThree() {

    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);
    const {products} = useProducts();  

    const onAutoplayTimeLeft = (swiper: any, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', String(1 - progress));
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    const isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      };

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(isMobileDevice());
    }, []);
    

    return (
        <section className={styles.section_three} id='products'>
            <div className={styles.section_three_subtile}>
                <h2 className={styles.sub_title}>Todos Nuestros Productos</h2>
            </div>
            <div className={styles.products_container}>
                <Swiper
                    slidesPerView={isMobile ? 1.2 : 3 }
                    spaceBetween={30}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
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
        </section>
    );
}