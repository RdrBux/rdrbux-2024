import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'CV Design | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-white/60 font-medium text-lg my-1 uppercase tracking-wider">CV Design</h1>
				<h2 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Create your professional CV in five minutes</h2>
			</div>

			<Image src="/projects/cv-design/hero.png" alt="CV Design Website" width={1486} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="grid lg:grid-cols-2 gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>CV Design is an online Curriculum Vitae creator designed to simplify the creation of your next aesthetic and professional résumé.</p>
					<p className="mt-4">The application has a live preview section that allows you to view updates in real time while filling out forms with the relevant information.</p>
					<a className="text-teal-300 underline block mt-4 hover:text-teal-500 duration-200" href="https://rdrbux.github.io/cv-application" target="_blank" rel="noopener noreferrer">View demo</a>
					<a className="text-teal-300 underline block mt-2 hover:text-teal-500 duration-200" href="https://github.com/RdrBux/cv-application" target="_blank" rel="noopener noreferrer">View on GitHub</a>
				</div>

				<div className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">WORK DONE</h4>
					<p className="">Design <br /> Web Development</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECHNOLOGIES</h4>
					<p>React <br /> React Router <br /> Tailwind <br /> ReactToPrint</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">LANGUAGES</h4>
					<p>Spanish</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">YEAR</h4>
					<p>2023</p>
				</div>
			</div>

			<div className="h-[60vh] lg:h-auto py-6 flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 lg:gap-16" >
				<Image src="/projects/cv-design/phone1.png" alt="CV Design Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
				<Image src="/projects/cv-design/phone2.png" alt="CV Design Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
				<Image src="/projects/cv-design/phone3.png" alt="CV Design Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
			</div>

			<h2 className="text-3xl font-semibold tracking-tight">HIGHLIGHTED FEATURES</h2>
			<div className="grid lg:grid-cols-2 gap-10 -mt-12">
				<div>
					<h3 className="text-lg font-semibold">Professional Templates</h3>
					<p className="mt-2 text-gray-400">Currently, there are two templates: Swiss or American, providing versatile design options to adapt to various styles.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Color Palette</h3>
					<p className="mt-2 text-gray-400">Each template supports nine optional decorative colors, allowing for complete customization to user preferences.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Avatar Image</h3>
					<p className="mt-2 text-gray-400">The Swiss template includes the option to add an optional avatar image, providing a personal touch to your CV presentation.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Save as PDF</h3>
					<p className="mt-2 text-gray-400">Users can save the result in PDF format or print it directly, offering flexibility in the distribution of their CVs.</p>
				</div>
			</div>

			<Image src="/projects/cv-design/main.png" alt="CV Design Website" width={1486} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">CHALLENGES AND SOLUTIONS</h2>
				<div className="mt-8 text-gray-400">
					<p>The main challenge was to implement the download function of the finished CV, for which the ReactToPrint library was used.</p>
					<p className="mt-4">To assist in the process, a visualization with real-time updates adapted to ReactToPrint requirements was built and the site design was adjusted to make it easy to view.</p>
					<p className="mt-4">Once the user is satisfied, they can press the download button to print their CV or download it in PDF format.</p>
				</div>
			</div>

			<Image src="/projects/cv-design/download.png" alt="CV Design Website" width={999} height={628} className="rounded-2xl border-4 mx-auto border-white/20 shadow-lg" />


			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">FUTURE PLANS</h2>
				<p className="text-gray-400 mt-8">The initial objective was to create a simple and effective web application that guarantees optimal results for its users. This means that it is essential to maintain a simple design and a quantity of relevant and concise information.</p>
				<p className="mt-4 text-gray-400">Based on these premises, the templates were designed and the available colors were selected. The future goal is to continue adding templates, but with a meticulous development and refinement process to guarantee the best quality of the results.</p>
			</div>

			<Link href='/en/projects/copy-saver' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-sky-500 to-blue-800">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Next Project</h5>
				<p className="text-6xl tracking-tighter font-semibold">Copy Saver</p>
			</Link>

		</main>
	)
}