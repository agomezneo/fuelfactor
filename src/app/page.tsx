'use client'
import React, { useState, useEffect } from 'react';
import HeroSection from "@/components/home-sections/HeroSection";
import SectionOne from "@/components/home-sections/SectionOne";
import SectionTwo from "@/components/home-sections/SectionTwo";
import SectionThree from "@/components/home-sections/SectionThree";
import SectionFour from "@/components/home-sections/SectionFour";
import SectionFive from "@/components/home-sections/SectionFive";
import SectionSix from "@/components/home-sections/SectionSix";
import SectionSeven from "@/components/home-sections/SectionSeven";
import SectionEight from '@/components/home-sections/SectionEight';
import TestimonySection from '@/components/home-sections/TestimonySection';
import PrincipalProductSection from '@/components/home-sections/PrincipalProductSection';
import CookieBanner from '@/components/cookies/CookieBanner';


export default function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const [videoEnded, setVideoEnded] = useState<boolean>(false);
  useEffect(() => {
    const videoFinalizado = localStorage.getItem('videoFinalizado');
    if (videoFinalizado === 'true') {
        setVideoEnded(true);
    }
}, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HeroSection />
        <SectionOne 
          videoEnded={videoEnded} 
          setVideoEnded={setVideoEnded} 
        />
        {videoEnded && (
            <>
              <SectionSix />
              <PrincipalProductSection />
              <SectionThree />
              <SectionTwo />
              <SectionEight />
              <SectionFour />
              <TestimonySection />
              <SectionFive />
              <SectionSix />
              <PrincipalProductSection />
              <SectionThree />
              <SectionSeven />
            </>
        )}
        <CookieBanner searchParams={searchParams}/>
    </main>
  );
}
