import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
	title: 'Dulcinea | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-white/60 font-medium text-lg my-1 uppercase tracking-wider">DULCINEA RODRÍGUEZ</h1>
				<h2 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Ballet, Culture and Well-being: Explore The World of Dulcinea</h2>
			</div>

			<Image src="/projects/dulcinea/hero.jpg" alt="Dulcinea Rodríguez Website" width={1494} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="grid lg:grid-cols-2 gap-20 lg:gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>Dulcinea Rodríguez, prominent ballet dancer, French teacher and specialist in Ayurvedic medicine and kinesiology, now has a digital presence that reflects all her skills.</p>
					<p className="mt-4">This work consisted of creating her personal website, a stylish space that not only showcases her talents, but also features sections dedicated to the services she offers and a store with products from collaborators.</p>
					<a className="text-teal-300 underline inline-block w-fit mt-4 hover:text-teal-500 duration-200" href="https://dulcinearodriguez.com.ar/" target="_blank" rel="noopener noreferrer">Visit site</a>
				</div>

				<div className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">WORK DONE</h4>
					<p className="">Design <br /> Web Development</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECHNOLOGIES</h4>
					<p>React <br /> React Router <br /> Tailwind <br /> EmailJs</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">LANGUAGES</h4>
					<p>Spanish</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">YEAR</h4>
					<p>2023</p>
				</div>
			</div>

			<div className="h-[60vh] lg:h-auto py-6 flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 lg:gap-16" >
				<Image src="/projects/dulcinea/phone1.jpg" alt="Dulcinea Rodríguez Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
				<Image src="/projects/dulcinea/phone2.jpg" alt="Dulcinea Rodríguez Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
				<Image src="/projects/dulcinea/phone3.jpg" alt="Dulcinea Rodríguez Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
			</div>

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">CHALLENGES AND SOLUTIONS</h2>
				<div className="mt-8 text-gray-400">
					<p>The main challenge was building a website that balanced simplicity with elegant details. The focus was on creating a visually engaging experience, highlighting Dulcinea&apos;s presence through numerous personal images.</p>
					<p className="mt-4">The solution involved careful design planning and implementing visual elements that harmoniously complemented their skills.</p>
				</div>
			</div>

			<Image src="/projects/dulcinea/about.jpg" alt="Dulcinea Rodríguez website" width={1494} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">RESULTS</h2>
				<p className="text-gray-400 mt-8">The results were extremely successful. The site has achieved outstanding SEO positioning and has experienced a constant flow of traffic, especially at times when Dulcinea has received media exposure for its own merits and popularity.</p>
			</div>

			<Link href='/en/projects/cv-design' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-800">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Next Project</h5>
				<p className="text-6xl tracking-tighter font-semibold">CV Design</p>
			</Link>

		</main>
	)
}