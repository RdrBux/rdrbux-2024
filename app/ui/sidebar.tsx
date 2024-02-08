import Link from "next/link";
import { GitHub, LinkedIn } from "./icons";
import LangSelector from "./lang-selector";
import NavLinks from "./nav-links";

export default function Sidebar() {
	return (
		<div className="hidden lg:block fixed top-0 left-0 h-screen bg-white/5 border-r border-white/10 overflow-hidden">
			<div className="h-64 w-[1px] blur absolute bg-gradient-to-b from-transparent via-white/50 to-transparent right-0 -top-10 animate-move-vertical"></div>
			<div className="h-64 w-[1px] absolute bg-gradient-to-b from-transparent via-white/60 to-transparent right-0 -top-10 animate-move-vertical"></div>
			<aside className="flex flex-col gap-12 px-4 py-6 h-full">
				<Link href="/" className="grid grid-cols-[auto_1fr] items-center gap-2">
					<img src="avatar.jpg" alt="Rodrigo Rodríguez Buxman" className="h-10 aspect-square rounded-full" />
					<div className="text-sm">
						<h4 className="font-medium tracking-tight">Rodrigo Rodríguez Buxman</h4>
						<p className="text-white/60">Desarrollador Web</p>
					</div>
				</Link>

				<NavLinks />

				<ul className="flex flex-col gap-1 text-sm">
					<h5 className="text-white/60 font-medium text-xs mx-3 my-1 uppercase tracking-wider">Redes</h5>
					<li>
						<a href="https://www.linkedin.com/in/rdrbux/" target="_blank" rel="noopener noreferrer" className="text-white/60 flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200">{LinkedIn}LinkedIn</a>
					</li>
					<li>
						<a href="https://github.com/RdrBux" target="_blank" rel="noopener noreferrer" className="text-white/60 flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200">
							{GitHub}GitHub
						</a>
					</li>
				</ul>

				<div className="mt-auto">
					<h5 className="text-white/60 font-medium text-xs mx-3 my-1 uppercase tracking-wider">Idioma</h5>
					<LangSelector />
				</div>

			</aside>
		</div>
	)
}

