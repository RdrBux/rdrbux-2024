import Link from "next/link";

export default function Home() {
	return (
		<main className="">
			<h1 className="text-5xl lg:text-6xl tracking-tighter font-semibold lg:text-center">Proyectos realizados</h1>
			<div className="grid lg:grid-cols-2 gap-8 w-full mt-16">

				<Link href="/projects/utopia" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg"><div className="w-full h-96 rounded-t-lg bg-gradient-to-br from-teal-400 to-indigo-400 group-hover:scale-110 duration-300"></div></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Utopía</h3>
						<p className="text-white/60 text-sm">La red social que potencia tu bienestar y calidad de vida</p>
					</div>
				</Link>

				<Link href="/projects/utopia" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg"><div className="w-full h-96 rounded-t-lg bg-gradient-to-br from-teal-400 to-indigo-400 group-hover:scale-110 duration-300"></div></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Utopía</h3>
						<p className="text-white/60 text-sm">La red social que potencia tu bienestar y calidad de vida</p>
					</div>
				</Link>

				<Link href="/projects/utopia" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg"><div className="w-full h-96 rounded-t-lg bg-gradient-to-br from-teal-400 to-indigo-400 group-hover:scale-110 duration-300"></div></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Utopía</h3>
						<p className="text-white/60 text-sm">La red social que potencia tu bienestar y calidad de vida</p>
					</div>
				</Link>

				<Link href="/projects/utopia" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg"><div className="w-full h-96 rounded-t-lg bg-gradient-to-br from-teal-400 to-indigo-400 group-hover:scale-110 duration-300"></div></div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Utopía</h3>
						<p className="text-white/60 text-sm">La red social que potencia tu bienestar y calidad de vida</p>
					</div>
				</Link>

			</div>
		</main>
	)
}