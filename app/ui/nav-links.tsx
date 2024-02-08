'use client'

import Link from "next/link";
import { Briefcase, Chat, Home, User } from "./icons";
import { usePathname } from "next/navigation";

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="text-sm flex flex-col gap-1 text-white/60">
				<li>
					<Link href="/" className={`${pathname === '/' ? 'text-white bg-white/10' : ''} flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200`}>
						{Home}
						Inicio
					</Link>
				</li>
				<li>
					<Link href="/projects" className={`${pathname === '/projects' ? 'text-white bg-white/10' : ''} flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200`}>{Briefcase}Proyectos</Link>
				</li>
				<li>
					<Link href="/about" className={`${pathname === '/about' ? 'text-white bg-white/10' : ''} flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200`}>{User}Sobre mí</Link>
				</li>
				<li>
					<Link href="/contact" className={`${pathname === '/contact' ? 'text-white bg-white/10' : ''} flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200`}>{Chat}Contacto</Link>
				</li>
			</ul>
		</nav>
	)
}