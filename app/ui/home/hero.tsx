export default function Hero() {
	return (
		<section className="py-20 flex flex-col items-center gap-4 min-h-screen">
			<div className="text-sm flex gap-3 justify-center items-center">
				<div className="h-[1px] w-40 bg-gradient-to-r from-transparent to-white/60"></div>
				<div className="whitespace-nowrap text-white/80 font-light">¡Hola! Soy Rodrigo</div>
				<div className="h-[1px] w-40 bg-gradient-to-l from-transparent to-white/60"></div>
			</div>
			<div className="relative">
				<h2 className="text-6xl leading-none text-center font-bold tracking-tighter bg-gradient-to-b from-cyan-100/60 to-white/90 bg-clip-text text-transparent">Trabajo en la creación de <br />experiencias digitales únicas</h2>
			</div>
		</section>
	)
}