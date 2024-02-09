import Link from "next/link";
import { GitHub, Identification, LinkedIn, Mail } from "./icons";
import LangSelector from "./lang-selector";
import NavLinks from "./nav-links";
import Avatar from "./avatar";

export default function Sidebar() {
	return (
		<div className="hidden lg:block fixed top-0 left-0 h-screen bg-white/5 border-r border-white/10 overflow-hidden">
			<div className="h-64 w-[1px] blur absolute bg-gradient-to-b from-transparent via-white/50 to-transparent right-0 -top-10 animate-move-vertical"></div>
			<div className="h-64 w-[1px] absolute bg-gradient-to-b from-transparent via-white/60 to-transparent right-0 -top-10 animate-move-vertical"></div>
			<aside className="flex flex-col gap-12 px-4 py-6 h-full">
				<Link href="/" className="grid grid-cols-[auto_1fr] items-center gap-2">
					<Avatar />
					<div className="text-sm">
						<h4 className="font-medium tracking-tight">Rodrigo Rodríguez Buxman</h4>
						<p className="text-white/60">Desarrollador Web</p>
					</div>
				</Link>

				<NavLinks />

				<ul className="flex flex-col gap-1 text-sm">
					<h5 className="text-white/60 font-medium text-xs mx-3 my-1 uppercase tracking-wider">Contacto</h5>
					<li>
						<a href="mailto:rdrbux@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/60 flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200">
							{Mail}Correo
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/rdrbux/" target="_blank" rel="noopener noreferrer" className="text-white/60 flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200">{LinkedIn}LinkedIn</a>
					</li>
					<li>
						<a href="https://github.com/RdrBux" target="_blank" rel="noopener noreferrer" className="text-white/60 flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200">
							{GitHub}GitHub
						</a>
					</li>
					<li>
						<a href="https://drive.google.com/file/d/11GrA9lsIslOnRc3Fw4OTEpNpcuqpsjXs/view" target="_blank" rel="noopener noreferrer" className="text-white/60 flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200">
							{Identification}Curriculum Vitae
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

