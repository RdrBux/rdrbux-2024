import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {
	return (
		<section className="mt-36 flex flex-col gap-6 items-center">
			<div className="flex gap-3 justify-center items-center">
				<div className="h-[1px] w-20 lg:w-40 bg-gradient-to-r from-transparent to-white/60"></div>
				<div className="whitespace-nowrap text-gray-300 font-light">Trabajos realizados</div>
				<div className="h-[1px] w-20 lg:w-40 bg-gradient-to-l from-transparent to-white/60"></div>
			</div>

			<div className="relative mt-6">
				<h2 className="text-4xl lg:text-6xl leading-none font-bold tracking-tighter bg-gradient-to-b from-white/70 to-white bg-clip-text text-transparent">Saber Supercomplejo</h2>
			</div>
			<Link href="/projects/saber-supercomplejo" className="overflow-hidden rounded-2xl border-4 border-white/20">
				<Image src="/projects/saber-supercomplejo/saber-supercomplejo.jpeg" alt="Saber Supercomplejo Website" width={3840} height={2160} className="w-full hover:scale-110 duration-500" />
			</Link>

			<div className="relative mt-12 lg:mt-24">
				<h2 className="text-4xl lg:text-6xl leading-none font-bold tracking-tighter bg-gradient-to-b from-white/70 to-white bg-clip-text text-transparent">Ballena Blanca</h2>
			</div>
			<Link href="/projects/ballena-blanca" className="overflow-hidden rounded-2xl border-4 border-white/20">
				<Image src="/projects/ballena-blanca/ballena-blanca.jpeg" alt="Ballena Blanca Website" width={3840} height={2160} className="w-full hover:scale-110 duration-500" />
			</Link>

			<div className="relative mt-12 lg:mt-24">
				<h2 className="text-4xl lg:text-6xl leading-none font-bold tracking-tighter bg-gradient-to-b from-white/70 to-white bg-clip-text text-transparent">Dulcinea</h2>
			</div>
			<Link href="/projects/dulcinea" className="overflow-hidden rounded-2xl border-4 border-white/20">
				<Image src="/projects/dulcinea/dulcinea.jpg" alt="Utopia Website" width={3840} height={2160} className="w-full hover:scale-110 duration-500" />
			</Link>

			<div className="mt-8 h-12 w-64 rounded-lg relative overflow-hidden bg-white/10">
				<div className="absolute w-[150%] h-[600%] -left-1/4 -top-[250%] bg-[conic-gradient(#5EEAD4_20deg,transparent_120deg)] animate-slow-spin"></div>
				<Link href="/projects" className="absolute inset-[1px] rounded-lg bg-gray-950 hover:bg-gray-900 duration-200 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),inset_0_12px_24px_0_rgba(255,255,255,0.05)]"><div className="w-full h-full grid place-content-center rounded-lg">Ver más proyectos</div></Link>
			</div>

		</section>
	)
}