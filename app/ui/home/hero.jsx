export default function Hero() {
  return (
    <div className="bg-amber-50">
      <section className="mx-[6vw] h-screen relative">
        <h1 className="text-h1 absolute right-0 top-1/2 -translate-y-1/2">
          RdrBux
        </h1>
        <div className="absolute w-full bottom-[6vw] flex justify-between items-end">
          <p className="text-[3.3vw] leading-none tracking-tight">
            Desarrollador <br /> Fullstack
          </p>
          <p className="text-body max-w-[24vw] text-end">
            ¡Hola! Soy Rodrigo Rodríguez Buxman, un Desarrollador Fullstack
            apasionado por la creación de experiencias digitales únicas
          </p>
        </div>
      </section>
    </div>
  );
}
