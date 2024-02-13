'use client'

import Link from "next/link";
import { Briefcase, Home, User } from "./icons";
import { usePathname } from "next/navigation";

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="text-sm flex flex-col gap-1 text-white/60">
				<li>
					<Link href="/en" className={`${pathname === '/en' ? 'text-white bg-white/10' : ''} flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200`}>
						{Home}
						Home
					</Link>
				</li>
				<li>
					<Link href="/en/projects" className={`${pathname === '/en/projects' ? 'text-white bg-white/10' : ''} flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200`}>{Briefcase}Projects</Link>
				</li>
				<li>
					<Link href="/en/about" className={`${pathname === '/en/about' ? 'text-white bg-white/10' : ''} flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:text-white duration-200`}>{User}About me</Link>
				</li>
			</ul>
		</nav>
	)
}