import Link from "next/link";

export default function Home() {
	return (
		<main className="mb-24">
			<h1 className="text-[12vw] leading-none md:text-6xl tracking-tighter font-semibold lg:text-center">Proyectos realizados</h1>
			<div className="grid lg:grid-cols-2 gap-8 w-full mt-8">

				<Link href="/projects/utopia" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg"><div className="w-full h-96 rounded-t-lg bg-gradient-to-br from-teal-400 to-indigo-400 group-hover:scale-110 duration-300"></div></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Utopía</h3>
						<p className="text-white/60 text-sm">La red social que potencia tu bienestar y calidad de vida</p>
					</div>
				</Link>

				<Link href="/projects/dulcinea" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg"><div className="w-full h-96 rounded-t-lg bg-gradient-to-br from-teal-400 to-indigo-400 group-hover:scale-110 duration-300"></div></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Dulcinea</h3>
						<p className="text-white/60 text-sm">Bailarina de ballet y profesora de francés - Portfolio profesional</p>
					</div>
				</Link>

				<Link href="/projects/cv-design" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg"><div className="w-full h-96 rounded-t-lg bg-gradient-to-br from-teal-400 to-indigo-400 group-hover:scale-110 duration-300"></div></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">CV Design</h3>
						<p className="text-white/60 text-sm">Tu creador de Curriculum Vitae profesionales en cinco minutos</p>
					</div>
				</Link>

				<Link href="/projects/copy-saver" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg"><div className="w-full h-96 rounded-t-lg bg-gradient-to-br from-teal-400 to-indigo-400 group-hover:scale-110 duration-300"></div></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Copy Saver</h3>
						<p className="text-white/60 text-sm">Extensión de Google Chrome para el manejo del portapapeles</p>
					</div>
				</Link>

			</div>
		</main>
	)
}