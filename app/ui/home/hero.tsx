import HeroCards from "./hero-cards";

export default function Hero() {
	return (
		<section>
			<h1 className="text-[12vw] leading-none md:text-6xl tracking-tighter font-semibold md:text-center">Transformando grandes ideas en <br className="hidden lg:block" /> experiencias digitales únicas</h1>
			<p className="text-gray-400 mt-4 max-w-xl md:text-center md:mx-auto">
				¡Hola! Soy Rodrigo, un Desarrollador Web Fullstack especializado en el Frontend. Me apasiona llevar ideas creativas a la realidad en forma de productos y soluciones digitales innovadoras.
			</p>
			<HeroCards />

		</section>
	)
}