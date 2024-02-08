import HeroCards from "./hero-cards";

export default function Hero() {
	return (
		<section>
			<h1 className="text-5xl lg:text-6xl tracking-tighter font-semibold md:text-center">Transformando grandes ideas en <br /> experiencias digitales únicas</h1>
			<p className="text-gray-400 mt-4 max-w-lg md:text-center md:mx-auto">¡Hola! Soy Rodrigo, un Desarrollador
				Web Fullstack especializado en el Frontend,
				apasionado por la creación de experiencias
				digitales únicas
			</p>
			<HeroCards />

		</section>
	)
}