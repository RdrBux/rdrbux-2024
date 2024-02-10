import Link from "next/link";

export default function FeaturedProjects() {
	return (
		<section className="mt-36 flex flex-col gap-6 items-center">
			<div className="text-sm flex gap-3 justify-center items-center">
				<div className="h-[1px] w-20 lg:w-40 bg-gradient-to-r from-transparent to-white/60"></div>
				<div className="whitespace-nowrap text-gray-300 font-light">Proyecto seleccionado</div>
				<div className="h-[1px] w-20 lg:w-40 bg-gradient-to-l from-transparent to-white/60"></div>
			</div>
			<div className="relative">
				<h2 className="text-8xl leading-none font-bold tracking-tighter bg-gradient-to-b from-white/70 to-white bg-clip-text text-transparent">Utopía</h2>
			</div>
			<p className="text-gray-400">La red social que potencia tu bienestar y calidad de vida</p>

			<div className="grid lg:grid-cols-2 gap-8 w-full mt-8">
				<div className="w-full h-96 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-400"></div>
				<div className="w-full h-96 rounded-lg bg-gradient-to-tl from-teal-400 to-indigo-400"></div>
			</div>

			<div className="mt-8 h-12 w-64 rounded-lg relative overflow-hidden bg-white/10">
				<div className="absolute w-[150%] h-[600%] -left-1/4 -top-[250%] bg-[conic-gradient(#5EEAD4_20deg,transparent_120deg)] animate-slow-spin"></div>
				<Link href="/projects" className="absolute inset-[1px] rounded-lg bg-gray-950 hover:bg-gray-900 duration-200 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),inset_0_12px_24px_0_rgba(255,255,255,0.05)]"><div className="w-full h-full grid place-content-center rounded-lg">Ver todos mis proyectos</div></Link>
			</div>

		</section>
	)
}