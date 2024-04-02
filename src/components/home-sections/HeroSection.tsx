'use client'
import styles from '@/styles/hero_section.module.scss'
import Button from '../buttons/PrimaryButton';

const HeroSection = () => {
    return (
        <section
            className={styles.hero_section}
        >
           <div className={styles.hero_section_container}>
                <div className={styles.hero_section_content}>
                    <h1 className={styles.title}>
                        FFX | Tratamiento integral para tu combustible.
                    </h1>
                    <p className={styles.description}>
                        Ahorra hasta un 30% en tu factura de combustible. Excelente para tu motor, para tu bolsillo y sobre todo para el planeta.
                    </p>
                    <Button
                        primary
                        href='#video_section'
                    >
                        <h3>Más información</h3>
                    </Button>
                </div>
           </div>
        </section>
    )
}

export default  HeroSection;