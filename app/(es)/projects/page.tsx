import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Proyectos | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="mb-24">
			<h1 className="text-[12vw] leading-none md:text-6xl tracking-tighter font-semibold lg:text-center">Proyectos realizados</h1>
			<div className="grid lg:grid-cols-2 gap-8 w-full mt-8">

				<Link href="/projects/saber-supercomplejo" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg">
						<Image src="/projects/saber-supercomplejo/saber-supercomplejo.jpeg" alt="Saber Supercomplejo Website" width={1800} height={1172} className="w-full rounded-t-lg group-hover:scale-110 duration-500" />
					</div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Saber Supercomplejo</h3>
						<p className="text-white/60 text-sm">Sitio web de la Comunidad del Saber Supercomplejo</p>
					</div>
				</Link>

				<Link href="/projects/ballena-blanca" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg">
						<Image src="/projects/ballena-blanca/ballena-blanca.jpeg" alt="Ballena Blanca Website" width={1800} height={1172} className="w-full rounded-t-lg group-hover:scale-110 duration-500" />
					</div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Estudio Ballena Blanca</h3>
						<p className="text-white/60 text-sm">Mezclas y masterización ONLINE</p>
					</div>
				</Link>

				<Link href="/projects/dulcinea" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg">
						<Image src="/projects/dulcinea/dulcinea.jpg" alt="Dulcinea Website" width={1800} height={1172} className="w-full rounded-t-lg group-hover:scale-110 duration-500" />
					</div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Dulcinea</h3>
						<p className="text-white/60 text-sm">Bailarina de ballet y profesora de francés - Portfolio profesional</p>
					</div>
				</Link>

				<Link href="/projects/utopia" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg">
						<Image src="/projects/utopia/utopia.jpg" alt="Utopia Website" width={1800} height={1172} className="w-full rounded-t-lg group-hover:scale-110 duration-500" />
					</div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Utopía</h3>
						<p className="text-white/60 text-sm">La red social que potencia tu bienestar y calidad de vida</p>
					</div>
				</Link>

				<Link href="/projects/cv-design" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg">
						<Image src="/projects/cv-design/cv-design.jpg" alt="CV Design Website" width={1800} height={1172} className="w-full rounded-t-lg group-hover:scale-110 duration-500" />
					</div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">CV Design</h3>
						<p className="text-white/60 text-sm">Tu creador de Curriculum Vitae profesionales en cinco minutos</p>
					</div>
				</Link>

				<Link href="/projects/copy-saver" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg">
						<Image src="/projects/copy-saver/copy-saver-home.jpg" alt="Copy Saver Chrome Extension" width={1800} height={1172} className="w-full rounded-t-lg group-hover:scale-110 duration-500" />
					</div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Copy Saver</h3>
						<p className="text-white/60 text-sm">Extensión de Google Chrome para el manejo del portapapeles</p>
					</div>
				</Link>

			</div>
		</main>
	)
}