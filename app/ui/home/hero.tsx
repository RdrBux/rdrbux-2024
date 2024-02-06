import { ReactLogo } from "../icons";

export default function Hero() {
	return (
		<section className="relative py-20 flex flex-col items-center min-h-screen">
			<div className="absolute inset-0 -z-10 h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>

			<h1 className="text-4xl lg:text-6xl leading-none text-center max-w-2xl font-bold tracking-tighter bg-gradient-to-b from-white/70 to-white bg-clip-text text-transparent">Transformando grandes ideas en experiencias digitales únicas</h1>

			<p className="mt-4 text-white/60 leading-none text-sm lg:text-lg max-w-xl text-center">¡Hola! Soy Rodrigo, un Desarrollador
				Web Fullstack especializado en el Frontend, apasionado por la creación de experiencias
				digitales únicas</p>

			<div className="mt-12 h-64 p-8 bg-white/5 border border-white/10 flex flex-col justify-center items-center gap-4 rounded-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),inset_0_12px_24px_0_rgba(255,255,255,0.05)]">
				<div className="w-24 aspect-square rounded-full bg-slate-950 relative overflow-hidden grid place-content-center">
					<div className="absolute w-[150%] h-[150%] -left-1/4 -top-1/4 bg-[conic-gradient(rgb(203_213_225)_20deg,transparent_120deg)] animate-slow-spin"></div>
					<div className="absolute w-[150%] h-[150%] -left-1/4 -top-1/4 bg-[conic-gradient(from_180deg,rgb(203_213_225)_20deg,transparent_120deg)] animate-slow-spin"></div>
					<div className="absolute left-[3%] top-[3%] w-[94%] h-[94%] bg-slate-950 rounded-full z-10 grid place-content-center text-slate-300"><div className="bg-white/5 rounded-full w-full aspect-square p-5">{ReactLogo}</div></div>
				</div>
				<div className="text-center text-white/80">Trabajo principalmente <br /> con React y Next.js</div>
			</div>

		</section>
	)
}