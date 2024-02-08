import Link from "next/link";

export default function FeaturedProjects() {
	return (
		<section className="my-36 flex flex-col gap-6 items-center">
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

			<Link href="/projects" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 duration-200 whitespace-nowrap">Ver todos los proyectos</Link>
		</section>
	)
}