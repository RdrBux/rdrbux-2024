import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {
	return (
		<section className="mt-36 flex flex-col gap-6 items-center">
			<div className="text-sm flex gap-3 justify-center items-center">
				<div className="h-[1px] w-20 lg:w-40 bg-gradient-to-r from-transparent to-white/60"></div>
				<div className="whitespace-nowrap text-gray-300 font-light">Selected Project</div>
				<div className="h-[1px] w-20 lg:w-40 bg-gradient-to-l from-transparent to-white/60"></div>
			</div>
			<div className="relative">
				<h2 className="text-8xl leading-none font-bold tracking-tighter bg-gradient-to-b from-white/70 to-white bg-clip-text text-transparent">Utopia</h2>
			</div>
			<p className="text-gray-400 -mt-4">The social network that enhances your well-being and quality of life</p>
			<Link href="/projects/utopia" className="overflow-hidden rounded-2xl border-4 border-white/20">
				<Image src="/projects/utopia/project-utopia.jpg" alt="Utopia Website" width={3840} height={2160} className="w-full hover:scale-110 duration-500" />
			</Link>
			<div className="mt-8 h-12 w-64 rounded-lg relative overflow-hidden bg-white/10">
				<div className="absolute w-[150%] h-[600%] -left-1/4 -top-[250%] bg-[conic-gradient(#5EEAD4_20deg,transparent_120deg)] animate-slow-spin"></div>
				<Link href="/projects" className="absolute inset-[1px] rounded-lg bg-gray-950 hover:bg-gray-900 duration-200 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),inset_0_12px_24px_0_rgba(255,255,255,0.05)]"><div className="w-full h-full grid place-content-center rounded-lg">More projects</div></Link>
			</div>

		</section>
	)
}