import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Projects | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="mb-24">
			<h1 className="text-[12vw] leading-none md:text-6xl tracking-tighter font-semibold lg:text-center">Selected Projects</h1>
			<div className="grid lg:grid-cols-2 gap-8 w-full mt-8">

				<Link href="/en/projects/utopia" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg">
						<Image src="/projects/utopia/utopia.jpg" alt="Utopia Website" width={1800} height={1172} className="w-full rounded-t-lg group-hover:scale-110 duration-500" />
					</div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Utopia</h3>
						<p className="text-white/60 text-sm">The social network that enhances your well-being and quality of life</p>
					</div>
				</Link>

				<Link href="/en/projects/dulcinea" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg">
						<Image src="/projects/dulcinea/dulcinea.jpg" alt="Dulcinea Website" width={1800} height={1172} className="w-full rounded-t-lg group-hover:scale-110 duration-500" />
					</div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Dulcinea</h3>
						<p className="text-white/60 text-sm">Ballet dancer and French teacher - Professional portfolio</p>
					</div>
				</Link>

				<Link href="/en/projects/cv-design" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg">
						<Image src="/projects/cv-design/cv-design.jpg" alt="CV Design Website" width={1800} height={1172} className="w-full rounded-t-lg group-hover:scale-110 duration-500" />
					</div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">CV Design</h3>
						<p className="text-white/60 text-sm">Create your professional CV in five minutes</p>
					</div>
				</Link>

				<Link href="/en/projects/copy-saver" className="bg-white/5 border border-white/10 rounded-lg group">
					<div className="overflow-hidden rounded-t-lg">
						<Image src="/projects/copy-saver/copy-saver-home.jpg" alt="Copy Saver Chrome Extension" width={1800} height={1172} className="w-full rounded-t-lg group-hover:scale-110 duration-500" />
					</div>
					<div className="p-4">
						<h3 className="text-xl font-semibold group-hover:underline">Copy Saver</h3>
						<p className="text-white/60 text-sm">Google Chrome extension for clipboard management</p>
					</div>
				</Link>

			</div>
		</main>
	)
}