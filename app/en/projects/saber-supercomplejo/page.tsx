import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Comunidad del Saber Supercomplejo | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Comunidad del Saber Supercomplejo</h1>
			</div>

			<Image src="/projects/saber-supercomplejo/saber-supercomplejo.jpeg" alt="Saber Supercomplejo Website" width={3840} height={2160} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="grid lg:grid-cols-2 gap-20 lg:gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>The project involved creating a website for the Comunidad del Saber Supercomplejo, aimed at spreading and explaining the theory of Supercomplex Knowledge to a wider audience. The site’s goal is to facilitate access to knowledge and promote active participation among users interested in this field.</p>
					<a className="text-teal-300 underline block mt-4 hover:text-teal-500 duration-200" href="https://sabersupercomplejo.com/" target="_blank" rel="noopener noreferrer">Visit site</a>
				</div>

				<div className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase whitespace-nowrap tracking-wider text-right">WORK DONE</h4>
					<p className="">Web design <br /> Fullstack development</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECHNOLOGIES</h4>
					<p>React <br /> Next.js <br /> Tailwind <br /> Shadcn/ui <br /> Supabase</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">LANGUAGES</h4>
					<p>Spanish <br /> English</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">YEAR</h4>
					<p>2024</p>
				</div>
			</div>

			<Image src="/projects/saber-supercomplejo/camino.png" alt="Saber Supercomplejo - El camino" width={3505} height={2175} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Highlighted Features</h2>
				<p className="text-gray-400 mt-8">The website includes a landing page with an introduction to the Community, along with various sections that provide brief descriptions of key topics such as the theory itself, the community, the pathway, and a section about the community blog. Each section offers links to more in-depth content for those who wish to explore further.</p>
				<p className="mt-4 text-gray-400">Additionally, the site features a fully functional blog where registered users can create posts, add comments, and engage in discussions. The platform is available in both Spanish and English to reach a broader, more global audience.</p>
			</div>

			<Image src="/projects/saber-supercomplejo/blog.png" alt="Saber Supercomplejo - Blog" width={3697} height={2199} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Challenges and Solutions</h2>
				<p className="text-gray-400 mt-8">A major challenge was integrating a seamless user authentication system and real-time data management with Supabase. The solution involved building a robust and secure back-end structure to support user profile creation and management, as well as interactions with posts and comments.</p>
			</div>

			<Image src="/projects/saber-supercomplejo/post.png" alt="Saber Supercomplejo - Post" width={3697} height={2199} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Results</h2>
				<p className="text-gray-400 mt-8">The project was met with positive results, ranking high in search engine results and attracting consistent traffic. A record of 506 unique users in a single day highlighted the strong interest and relevance of the content provided.</p>
			</div>

			<Link href='/en/projects/ballena-blanca' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-[hsl(59,55%,57%)] to-[hsl(59,55%,27%)]">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Next Project</h5>
				<p className="text-6xl tracking-tighter font-semibold">Ballena <br className="block md:hidden" /> Blanca</p>
			</Link>

		</main>
	)
}