import Navigation from './components/Navigation';

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
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center relative z-10">
        <h1 className="text-white text-3xl sm:text-4xl font-bold uppercase text-center">
          JUAN 4:14
        </h1>
        <p className="text-white text-lg sm:text-xl text-center font-[family-name:var(--font-geist-mono)] max-w-4xl uppercase leading-relaxed">
          14 MAS EL QUE BEBIERE DEL AGUA QUE YO LE DARÉ, NO TENDRÁ SED JAMÁS; SINO QUE EL AGUA QUE YO LE DARÉ SERÁ EN ÉL UNA FUENTE DE AGUA QUE SALTE PARA VIDA ETERNA.
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center relative z-10">
      </footer>
      </div>
    </>
  );
}

export default Home;
