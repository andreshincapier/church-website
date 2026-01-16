'use client';

import Navigation from '../components/Navigation';

function AgendaSemanal() {
  const schedule = [
    {
      day: 'Domingo',
      events: [
        {
          title: 'Intercesión',
          type: 'PRESENCIAL',
          time: '7:00 a.m.',
          description: 'Tiempo de oración y búsqueda de Dios'
        },
        {
          title: 'Servicios',
          type: 'DOS CULTOS',
          time: '8:00 a.m. - 10:30 a.m.',
          description: '"Este es el día que hizo el Señor; nos gozaremos y alegraremos en él."',
          verse: 'Salmos 118:24'
        }
      ]
    },
    {
      day: 'Martes',
      events: [
        {
          title: 'Intercesión',
          type: 'VIRTUAL',
          time: '4:30 a.m. - 5:30 a.m.',
          description: 'Tiempo de oración matutina'
        }
      ]
    },
    {
      day: 'Miércoles',
      events: [
        {
          title: 'Servicio',
          type: 'PRESENCIAL',
          time: '7:00 p.m.',
          description: '"Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán."',
          verse: 'Isaías 40:31'
        }
      ]
    },
    {
      day: 'Jueves',
      events: [
        {
          title: 'Intercesión',
          type: 'VIRTUAL',
          time: '4:30 a.m. - 5:30 a.m.',
          description: 'Tiempo de oración matutina'
        },
        {
          title: 'Estudio Bíblico',
          type: 'MEET',
          time: '7:30 p.m.',
          description: 'Conectados con la PALABRA - Un espacio para aprender, preguntar y crecer en la Fe'
        }
      ]
    }
  ];

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

        <main className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
              Agenda Semanal
            </h1>
            <p className="text-white text-lg sm:text-xl">
              Nuestras actividades semanales
            </p>
          </div>

          <div className="space-y-6">
            {schedule.map((day, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6"
              >
                <h2 className="text-3xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#E8DCC4] pb-2">
                  {day.day}
                </h2>
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="border-l-4 border-[#E8DCC4] pl-4 py-2"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold text-[#2C3E50]">
                          {event.title}
                        </h3>
                        <span className="bg-[#E8DCC4] text-[#2C3E50] px-4 py-1 rounded-full text-sm font-bold uppercase">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-xl font-bold text-[#2C3E50] mb-2">
                        {event.time}
                      </p>
                      <p className="text-gray-700 italic">
                        {event.description}
                      </p>
                      {event.verse && (
                        <p className="text-gray-600 text-sm mt-1 font-medium">
                          {event.verse}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note about schedule */}
          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center">
            <p className="text-gray-700 text-lg">
              Para más información, visita nuestra sección de contacto
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default AgendaSemanal;
