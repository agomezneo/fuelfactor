'use client'
import styles from '@/styles/section_six.module.scss'
import WhatsAppButton from '@/components/buttons/WhatsAppButton'
import TelegramButton from '../buttons/TelegramButton';


export default function SectionSix() {

    return (
        <section className={styles.section_six} id='contact'>
            <div className={styles.section_six_container}>
                {/* <div className={styles.section_six_video}>
                    <video
                        id="video"
                        className={styles.video}
                        controls
                        controlsList="nodownload"
                        poster="/images/05.webp"
                    >
                        <source src="https://firebasestorage.googleapis.com/v0/b/c4f-backend-c3e81.appspot.com/o/03.mp4?alt=media&token=4ad3d59d-f40b-4e2f-93fe-460fb2e6634e" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div> */}
                <div className={styles.section_six_text}>
                    <h2 className={styles.description}>Accede a toda la información EXCLUSIVA a través de nuestro canales de WhatsApp o Telegram.
                        <br/>
                        <br/>
                        Ahorra hasta un 30% en tu factura de combustible. Excelente para tu motor, para tu bolsillo y por supuesto, para el planeta
                    </h2>
                </div>
                <div className={styles.buttons_container}>
                    <WhatsAppButton
                        href='https://chat.whatsapp.com/D71KokwLXiT5zrjr6tXned'
                    >
                        <span>¡ ACCEDE A TRAVÉS DE WHATSAPP ! </span>    
                    </WhatsAppButton>

                    <TelegramButton 
                        href='https://t.me/ahorracombustible30'
                    >
                        <span> ¡ ACCEDE A TRAVÉS DE TELEGRAM ! </span>
                    </TelegramButton>
                    <a 
                        href="mailto:goalcasor@gmail.com"
                        target="_blank" 
                    >
                        <h3>fuelfactorx@gmx.es</h3>
                    </a>
                </div>
            </div>
        </section>
    );
}