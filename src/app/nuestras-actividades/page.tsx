'use client';

import Navigation from '../components/Navigation';

function NuestrasActividades() {
  return (
    <>
      <Navigation />
      <div
        className="min-h-screen p-8 pb-20 pt-24 flex items-center justify-center"
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

        <main className="max-w-2xl mx-auto relative z-10 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2C3E50] mb-6">
              Nuestras Actividades
            </h1>
            <div className="mb-8">
              <svg
                className="w-24 h-24 mx-auto text-[#E8DCC4]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <p className="text-2xl text-gray-700 font-semibold mb-4">
              Trabajo en Progreso
            </p>
            <p className="text-lg text-gray-600">
              Esta sección está en construcción. Pronto podrás conocer más sobre nuestras actividades.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default NuestrasActividades;
