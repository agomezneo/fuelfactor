'use client'

import React, { useState, useEffect } from 'react';
import styles from '@/styles/section_one.module.scss';
import Image from 'next/legacy/image';
import Loader from '@/components/loaders/3points'

interface SectionOneProps {
  videoEnded: boolean;
  setVideoEnded: React.Dispatch<React.SetStateAction<boolean>>;
}

const SectionOne: React.FC<SectionOneProps> = ({ videoEnded, setVideoEnded }) => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement>(null);
  const [videoStarted, setVideoStarted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [callToAction, setCallToAction] = useState<string>('');

  useEffect(() => {
    let videoEl = document.getElementById('video') as HTMLVideoElement;
    setVideoElement(videoEl);
  }, []);
  
  useEffect(() => {
    const handleVideoPlay = () => {
      setVideoStarted(true);
    };
    
    const handleTimeUpdate = () => {
      let percentPlayed: number = 0;
      percentPlayed = (videoElement.currentTime / videoElement.duration) * 100;
      setCurrentTime(videoElement.currentTime);

      if (percentPlayed >= 90) {
        setVideoEnded(true);
        localStorage.setItem('videoFinalizado', 'true');
      }

      if(percentPlayed >= 0 && percentPlayed < 30 ){
        setCallToAction('¡Transforma tu experiencia de conducción hoy mismo con FFX! ¡Aprovecha al máximo cada gota de combustible y potencia tu motor como nunca antes!');
      }else if (percentPlayed >=30 && percentPlayed < 60) {
        setCallToAction('¡Descubre el secreto detrás de un motor más potente y eficiente! Elige FFX y siente la diferencia en cada kilómetro recorrido.');
      } else if (percentPlayed >= 60 && percentPlayed < 90) {
        setCallToAction('¡Optimiza el rendimiento de tu vehículo y contribuye a un futuro más limpio! Con FFX, cada viaje es una oportunidad para cuidar de tu motor y del medio ambiente.');
      } else if (percentPlayed >= 90 && percentPlayed < 100) {
        setCallToAction('¿Quieres saber más sobre cómo FFX puede revolucionar tu experiencia de manejo? ¡Desplázate hacia abajo y descubre todo lo que necesitas saber para tomar la mejor decisión para tu vehículo!');
      }
    };

    if (videoElement) {
      videoElement.addEventListener('play', handleVideoPlay);
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('play', handleVideoPlay);
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [videoElement, setVideoEnded]);

  return (
    <section className={styles.section_one} id='video_section'>
      <div className={styles.section_one_container}>
        <div className={styles.section_one_text}>
          {!videoStarted && <h2 className={styles.sub_title}> {`Toda la infomación que necesitas acerca de Fuel Factor X la tendrás en exclusiva después de ver el siguiente video `} </h2>}
          <h2 className={styles.sub_title}>{callToAction}</h2>
        </div>
        <div className={styles.section_one_video}>
          <video
            id="video"
            className={styles.video}
            controls
            controlsList="nodownload"
            poster="/images/05.webp"
          >
            <source src="https://firebasestorage.googleapis.com/v0/b/c4f-backend-c3e81.appspot.com/o/landing_ffx_01mp4.mp4?alt=media&token=e39a8c0c-59f5-4aee-971a-7df479bf4303" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!videoEnded && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
              <p style={{padding: '1rem'}}>¡En un momento tendrás el acceso exclusivo a FFX!...   </p>
              <Loader />
            </div>
          )}
        </div>

      </div>
      {videoEnded && (
        <div className={styles.arrow}>
          <Image src={'/images/small-cards/17.webp'} alt='scroll image' width={150} height={150}/>
        </div>
      )}
    </section>
  );
};

export default SectionOne;
