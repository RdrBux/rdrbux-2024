'use client'

import { useEffect, useRef, useState } from "react";
import { Briefcase, Close, GitHub, Hamburger, Home, Identification, LinkedIn, Mail, User } from "./icons";
import LangSelector from "./lang-selector";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
	const [showMenu, setShowMenu] = useState(false)
	const menu = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (showMenu && menu.current && !menu.current.contains(e.target as HTMLElement)) {
				setShowMenu(false);
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, [showMenu])

	return (
		<div className="">
			<div className="w-12 aspect-square rounded-lg relative overflow-hidden bg-white/10">
				<div className="absolute w-[150%] h-[150%] -left-1/4 -top-1/4 bg-[conic-gradient(rgb(203_213_225)_20deg,transparent_120deg)] animate-slow-spin"></div>
				<button aria-label="Menú" onClick={() => setShowMenu(prev => !prev)} className="absolute inset-[1px] rounded-lg bg-gray-950"><div className="w-full h-full grid place-content-center rounded-lg">{showMenu ? Close : Hamburger}</div></button>
			</div>

			{showMenu && (
				<div className="fixed top-20 left-0 w-screen h-screen bg-gray-950/90">
					<div ref={menu} className="p-6 w-full flex flex-col gap-12 bg-gray-950 border-y border-white/10 rounded-b-lg">
						<nav>
							<ul className="flex flex-col gap-1 text-white/60">
								<li>
									<Link onClick={() => setTimeout(() => setShowMenu(false), 100)} href="/" className={`${pathname === '/' ? 'text-white bg-white/10' : ''} flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200`}>
										{Home}
										Inicio
									</Link>
								</li>
								<li>
									<Link onClick={() => setTimeout(() => setShowMenu(false), 100)} href="/projects" className={`${pathname === '/projects' ? 'text-white bg-white/10' : ''} flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200`}>{Briefcase}Proyectos</Link>
								</li>
								<li>
									<Link onClick={() => setTimeout(() => setShowMenu(false), 100)} href="/about" className={`${pathname === '/about' ? 'text-white bg-white/10' : ''} flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200`}>{User}Sobre mí</Link>
								</li>
							</ul>
						</nav>

						<ul className="flex flex-col gap-1">
							<h5 className="text-white/60 font-medium text-sm mx-3 my-1 uppercase tracking-wider">Contacto</h5>
							<li>
								<a href="mailto:rdrbux@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/60 flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200">
									{Mail}Rdrbux@gmail.com
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
								<a href="https://drive.google.com/file/d/1bL-fAbFEpn6OYuKJo-RoXaD0r4zZCqy3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white/60 flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200">
									{Identification}Curriculum Vitae
								</a>
							</li>
						</ul>

						<div className="mt-auto">
							<h5 className="text-white/60 font-medium text-sm mx-3 my-1 uppercase tracking-wider">Idioma</h5>
							<LangSelector />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}