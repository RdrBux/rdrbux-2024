import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Ballena Blanca | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Estudio Ballena Blanca</h1>
				<h2 className="text-white/60 font-medium my-1 uppercase tracking-wider">Audio Mixing and Mastering</h2>
			</div>

			<Image src="/projects/ballena-blanca/ballena-blanca.jpeg" alt="Utopia Website" width={3840} height={2160} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="grid lg:grid-cols-2 gap-20 lg:gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>The project involved designing and developing a website for the Ballena Blanca mixing and mastering studio, with the goal of boosting its online presence and attracting more potential clients.</p>
					<p className="mt-4">The site was designed to facilitate user interaction and provide quick access to relevant information, ensuring a seamless experience and simplifying the contact process.</p>
					<a className="text-teal-300 underline block mt-4 hover:text-teal-500 duration-200" href="https://ballenablanca.com.ar/" target="_blank" rel="noopener noreferrer">Visit site</a>
				</div>

				<div className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase whitespace-nowrap tracking-wider text-right">WORK DONE</h4>
					<p className="">Web Design <br /> Web Development</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECHNOLOGIES</h4>
					<p>Astro <br /> Tailwind <br /> GSAP</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">YEAR</h4>
					<p>2024</p>
				</div>
			</div>

			<Image src="/projects/ballena-blanca/servicios.png" alt="Ballena Blanca - Servicios" width={3510} height={1992} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Highlighted Features</h2>
				<p className="text-gray-400 mt-8">The website is a single-page application (SPA) featuring a dark, modern design with dynamic animations to enhance user experience and highlight key elements. The services offered by the studio are strategically positioned below the Hero section for quick and direct access.</p>
				<p className="mt-4 text-gray-400">Additionally, the integration of the Spotify API allows visitors to listen to samples of the client’s work directly from the website.</p>
			</div>

			<Image src="/projects/ballena-blanca/trabajos.png" alt="Ballena Blanca - Trabajos realizados" width={3510} height={1992} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Challenges and Solutions</h2>
				<p className="text-gray-400 mt-8">One of the main challenges was balancing an attractive design with fast loading times. This was addressed by optimizing animations and resource management to ensure speed. The integration of the Spotify API also posed a technical challenge, which was resolved by carefully configuring API calls and managing dynamic content efficiently.</p>
			</div>

			<Image src="/projects/ballena-blanca/contacto.png" alt="Ballena Blanca - contacto" width={3510} height={1992} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Results</h2>
				<p className="text-gray-400 mt-8">The client provided very positive feedback, noting that the site met and exceeded expectations. The clear structure and modern design effectively showcased the services, improving the studio’s visibility and appeal in the digital landscape.</p>
			</div>

			<Link href='/en/projects/dulcinea' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-rose-500 to-rose-800">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Next Project</h5>
				<p className="text-6xl tracking-tighter font-semibold">Dulcinea</p>
			</Link>

		</main>
	)
}