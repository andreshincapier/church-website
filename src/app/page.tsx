'use client';

import Navigation from './components/Navigation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  return (
    <>
      <Navigation />
      <div
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] pt-24 relative"
        style={{
          backgroundImage: 'url(/waterfalls.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center relative z-10 w-full max-w-4xl">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          className="w-full max-w-4xl"
        >
          <div className="flex flex-col items-center py-12 px-4">
            <img src="/slides/sunday.jpeg" alt="Sunday Service" className="max-h-[600px] w-auto object-contain" />
          </div>
          <div className="flex flex-col items-center py-12 px-4">
            <img src="/slides/bible_study.jpeg" alt="Bible Study" className="max-h-[600px] w-auto object-contain" />
          </div>
          <div className="flex flex-col items-center py-12 px-4">
            <img src="/slides/tusday.jpeg" alt="Tuesday Intercession" className="max-h-[600px] w-auto object-contain" />
          </div>
          <div className="flex flex-col items-center py-12 px-4">
            <img src="/slides/wenesday.jpeg" alt="Wednesday Intercession" className="max-h-[600px] w-auto object-contain" />
          </div>
        </Carousel>
      </main>
      <footer className="row-start-3 flex flex-col gap-2 items-center justify-center relative z-10">
        <p className="text-white text-lg sm:text-lg text-center italic">
          "Mas el que bebiere del agua que yo le daré, no tendrá sed jamás; sino que el agua que yo le daré será en él una fuente de agua que salte para vida eterna."
        </p>
        <p className="text-white text-base sm:text-xs text-center">
          Juan 4:14 - Reina-Valera 1960
        </p>
      </footer>
      </div>
    </>
  );
}

export default Home;
