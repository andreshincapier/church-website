'use client';

import Navigation from '../components/Navigation';

function Estudios() {
  return (
    <>
      <Navigation />
      <div
        className="min-h-screen p-8 pb-20 pt-24"
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

        <main className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
              Estudios Bíblicos
            </h1>
            <p className="text-white text-lg sm:text-xl">
              Mira nuestros estudios bíblicos y mensajes
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/S2F5-u8ytec"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Estudio Bíblico 1"
                ></iframe>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/NNpSxvJkh5A"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Estudio Bíblico 2"
                ></iframe>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/B0ipeHuUGgg"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Estudio Bíblico 3"
                ></iframe>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/CFbCKtfYNBc"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Estudio Bíblico 4"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.youtube.com/@IGLESIAJESUCRISTOMANANTIALVIDA/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
            >
              Ver más videos en YouTube
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export default Estudios;
