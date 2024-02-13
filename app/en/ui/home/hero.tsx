import HeroCards from "./hero-cards";

export default function Hero() {
	return (
		<section>
			<h1 className="text-[12vw] leading-none md:text-6xl tracking-tighter font-semibold md:text-center">Transforming Great Ideas Into <br className="hidden lg:block" /> Unique Digital Experiences</h1>
			<p className="text-gray-400 mt-4 max-w-xl md:text-center md:mx-auto">
				Hi! I&apos;m Rodrigo, a Fullstack Web Developer specialized in the Frontend. I&apos;m passionate about bringing creative ideas to reality in the form of innovative digital products and solutions.
			</p>
			<HeroCards />

		</section>
	)
}