import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Utopia | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-white/60 font-medium text-lg my-1 uppercase tracking-wider">Utopia</h1>
				<h2 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Your new way of living and sharing a healthy lifestyle</h2>
			</div>

			<Image src="/projects/utopia/project-utopia.jpg" alt="Utopia Website" width={3840} height={2160} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="grid lg:grid-cols-2 gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>Utopia is an innovative social network designed to promote a healthier and more authentic lifestyle among users.</p>
					<p className="mt-4">In contrast to the social pressures and standards of perfection commonly associated with conventional social networks, Utopia offers a space to share eating habits, physical activity and general reflections, encouraging collaboration and mutual inspiration for a more fulfilling life.</p>
					<a className="text-teal-300 underline block mt-4 hover:text-teal-500 duration-200" href="https://utopia-social.vercel.app/" target="_blank" rel="noopener noreferrer">View demo</a>
					<a className="text-teal-300 underline block mt-2 hover:text-teal-500 duration-200" href="https://github.com/RdrBux/utopia" target="_blank" rel="noopener noreferrer">View on GitHub</a>
				</div>

				<div className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">WORK DONE</h4>
					<p className="">Design <br /> Fullstack Development <br /> Database Management</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECHNOLOGIES</h4>
					<p>React <br /> Next.js <br /> TypeScript <br /> Tailwind <br /> PostgreSQL <br /> Lucia Auth</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">LANGUAGES</h4>
					<p>Spanish</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">YEAR</h4>
					<p>2024</p>
				</div>
			</div>

			<Image src="/projects/utopia/login.png" alt="Utopia Website" width={2640} height={1328} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<h2 className="text-3xl font-semibold tracking-tight">HIGHLIGHTED FEATURES</h2>
			<div className="grid lg:grid-cols-2 gap-10 -mt-12">
				<div>
					<h3 className="text-lg font-semibold">Authentication and Authorization</h3>
					<p className="mt-2 text-gray-400">Utopia offers authentication and authorization features that allow users to register new accounts, sign in with Google, or explore the platform as a guest.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Posts and Comments</h3>
					<p className="mt-2 text-gray-400">Users can create posts with text and images, as well as interact with other users&apos; content by Liking them. and comments. These interactions are reversible, providing flexibility and control to the user.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Personalized Profile</h3>
					<p className="mt-2 text-gray-400">Each user has their own profile where they can see their workout and diet statistics, in addition to having customization options to change aspects such as the profile image, biography or privacy.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Search and Notifications pages</h3>
					<p className="mt-2 text-gray-400">Utopia includes a search function to find specific users and posts, as well as a notifications menu to keep users informed about relevant activity on the platform.</p>
				</div>
			</div>

			<Image src="/projects/utopia/search.png" alt="Utopia Website" width={2640} height={1630} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">DEVELOPMENT PROCESS</h2>
				<ul className="mt-8 text-gray-400 list-disc">
					<li>Wireframes were created in Figma to define the fundamental aspects of the application and each of its pages.</li>
					<li className="mt-4">An SQL database was created, determining the necessary tables, columns and relationships.</li>
					<li className="mt-4">The frontend was developed using Server Components or Client Components depending on the interactivity required.</li>
					<li className="mt-4">Implemented Server Actions for communication between the client, server and database.</li>
					<li className="mt-4">Finally, testing, adjustments and production launch of the application were carried out.</li>
				</ul>
			</div>

			<Image src="/projects/utopia/db.png" alt="Utopia database" width={3265} height={3105} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">LESSONS LEARNED</h2>
				<p className="text-gray-400 mt-8">The project made it possible to perfect the use of Next.js 14 with App Router, as well as the complete management of the user life cycle, including its sign up and login.</p>
				<p className="mt-4 text-gray-400">In addition, skills were acquired in the development and maintenance of databases with PostgreSQL, including the implementation of triggers and functions for greater efficiency.</p>
				<p className="mt-4 text-gray-400">Error handling and visual status updates in the user interface were also highlighted, both in pending forms and optimistic updates.</p>
			</div>

			<Link href='/en/projects/dulcinea' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-rose-500 to-rose-800">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Next Project</h5>
				<p className="text-6xl tracking-tighter font-semibold">Dulcinea</p>
			</Link>

		</main>
	)
}