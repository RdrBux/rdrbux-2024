import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Copy Saver | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-white/60 font-medium text-lg my-1 uppercase tracking-wider">COPY SAVER</h1>
				<h2 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">The Google Chrome extension that will increase your productivity</h2>
			</div>

			<Image src="/projects/copy-saver/copy-saver-home.jpg" alt="Copy Saver Chrome Extension" width={1800} height={1172} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="grid lg:grid-cols-2 gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>Optimize your workflow and never lose copied texts again. Copy Saver allows you to manage the clipboard with quick and intuitive actions.</p>
					<p className="mt-4">Automatically capture and save texts copied during web browsing, Copy Saver is the ideal solution for efficient management of your information.</p>
					<a className="text-teal-300 underline block mt-4 hover:text-teal-500 duration-200" href="https://github.com/RdrBux/CopySaver" target="_blank" rel="noopener noreferrer">View on GitHub</a>
				</div>

				<div className="grid grid-cols-2 gap-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">WORK DONE</h4>
					<p className="">Design <br /> Web Development</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECNOLOGÍAS</h4>
					<p>JavaScript <br /> React <br /> Tailwind <br /> Chrome extension</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">LANGUAGES</h4>
					<p>English <br /> <span className="line-through">Spanish</span> (coming soon)</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">YEAR</h4>
					<p>2023</p>
				</div>
			</div>

			<Image src="/projects/copy-saver/browser.png" alt="Copy Saver Chrome Extension" width={1440} height={799} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<h2 className="text-3xl font-semibold tracking-tight">HIGHLIGHTED FEATURES</h2>
			<div className="grid lg:grid-cols-2 gap-10 -mt-12">
				<div>
					<h3 className="text-lg font-semibold">Works automatically</h3>
					<p className="mt-2 text-gray-400">The content copied from the browser is added directly to the database to be viewed from the extension window.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Quick actions</h3>
					<p className="mt-2 text-gray-400">Options like &quot;Add a name or description&quot;, &quot;Add to favorites&quot;, &quot;Delete&quot; or &quot;Copy&quot; directly from the application.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Advanced Features</h3>
					<p className="mt-2 text-gray-400">Tab navigation (general and favorites), search bar, pagination, available storage visualization.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Backup</h3>
					<p className="mt-2 text-gray-400">Ability to save data to a JSON file and import from a file.</p>
				</div>
			</div>

			<Image src="/projects/copy-saver/code2.jpg" alt="Copy Saver Chrome Extension" width={1504} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">CHALLENGES AND SOLUTIONS</h2>
				<div className="mt-8 text-gray-400">
					<p>The main challenge was capturing users&apos; copying actions, since Chrome, for security and privacy reasons, does not allow access to the clipboard API from extensions.</p>
					<p className="mt-4">For this reason, it was decided to inject scripts on each visited site, to execute code that allows capturing the copying event within the current page and obtains the selected text by the user.</p>
					<p className="mt-4">The injected scripts in each site communicate with the background of the application (Service Worker), which is responsible for storing the information in the database efficiently.</p>
				</div>
			</div>

			<Image src="/projects/copy-saver/code1.jpg" alt="Copy Saver Chrome Extension" width={1504} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">FUTURE PLANS</h2>
				<p className="text-gray-400 mt-8">For the extension to function, it is required that the visited site allows the execution of JavaScript code, which prevents its use outside the browser or from files where the code cannot be injected (such as PDF files).</p>
				<p className="text-gray-400 mt-4">In that case, there is a function in the Document API called execCommand(), which grants access to the clipboard. In conjunction with a continuous loop, changes to the clipboard can be verified and saved to the database.</p>
				<p className="text-gray-400 mt-4">This will be an optional function, it will open a new temporary tab in the background with an Iframe injected to execute the functions. Currently, it is under development.</p>
			</div>

			<Link href='/en/projects/utopia' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-teal-500 to-teal-800">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Next Project</h5>
				<p className="text-6xl tracking-tighter font-semibold">Utopia</p>
			</Link>

		</main>
	)
}