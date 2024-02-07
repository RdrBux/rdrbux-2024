import { ReactLogo } from "../icons";

export default function HeroCards() {
	return (
		<div className="relative w-fit mx-auto mt-12 [perspective:100px]">
			<div className="h-56 w-fit p-4 lg:p-8 backdrop-blur-lg z-10 relative bg-white/5 border border-white/10 flex flex-col justify-center items-center gap-4 rounded-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),inset_0_12px_24px_0_rgba(255,255,255,0.05)]">
				<div className="w-20 lg:w-24 aspect-square rounded-full bg-gray-950 relative overflow-hidden grid place-content-center">
					<div className="absolute w-[150%] h-[150%] -left-1/4 -top-1/4 bg-[conic-gradient(rgb(203_213_225)_20deg,transparent_120deg)] animate-slow-spin"></div>
					<div className="absolute w-[150%] h-[150%] -left-1/4 -top-1/4 bg-[conic-gradient(from_180deg,rgb(203_213_225)_20deg,transparent_120deg)] animate-slow-spin"></div>
					<div className="absolute left-[3%] top-[3%] w-[94%] h-[94%] bg-gray-950 rounded-full z-10 grid place-content-center text-gray-300"><div className="bg-white/5 rounded-full w-full aspect-square p-5">{ReactLogo}</div></div>
				</div>
				<div className="text-sm lg:text-base text-center text-white/80">Trabajo principalmente <br /> con React y Next.js</div>
			</div>

			<div className="absolute [transform:rotateY(-2deg)] [transform-style:preserve-3d] w-36 lg:w-48 right-[80%] top-8 bottom-8 bg-white/5 border border-white/10 rounded-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),inset_0_12px_24px_0_rgba(255,255,255,0.05)]">
				<div className="text-white/80 grid place-content-center gap-2 h-full mr-4">
					<div className="text-4xl font-semibold p-2 lg:px-4 rounded-full bg-white/5 border border-white/10">40+</div>
					<p className="text-sm text-center">Proyectos <br /> en Github</p>
				</div>
			</div>

			<div className="absolute [transform:rotateY(3deg)] [transform-style:preserve-3d] w-36 lg:w-48 left-[80%] top-8 bottom-8 p-4 lg:pr-8 bg-white/5 border border-white/10 flex flex-col justify-center items-end rounded-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),inset_0_12px_24px_0_rgba(255,255,255,0.05)]">
				<div className="text-white/80 grid place-content-center gap-2 h-full ml-4">
					<div className="text-4xl font-semibold p-2 lg:px-4 rounded-full bg-white/5 border border-white/10 flex items-center gap-1">2 <span className="text-lg">años</span></div>
					<p className="text-sm text-center">Experiencia <br /> programando</p>
				</div>
			</div>
		</div>
	)
}