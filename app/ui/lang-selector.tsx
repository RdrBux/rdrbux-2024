'use client'

import { useEffect, useRef, useState } from "react"
import { Chevron, Tick } from "./icons"

export default function LangSelector() {
	const [showMenu, setShowMenu] = useState(false);
	const menu = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (menu.current && !menu.current.contains(e.target as HTMLElement)) {
				setShowMenu(false);
			}
		}

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, [menu, showMenu])


	return (
		<div ref={menu} className="relative pt-1">
			<button onClick={() => setShowMenu(prev => !prev)} className={`${showMenu ? 'outline outline-2 outline-white/20' : ''} flex my-1 items-center gap-3 rounded-lg border text-sm border-white/10 px-4 py-2 w-full`}>
				<img className="w-5" src="español.png" alt="Bandera de España" />
				Español
				<span className="ml-auto">{Chevron}</span>
			</button>

			{
				showMenu && (
					<div className="rounded-lg p-1 bg-gray-950 border border-white/10 absolute left-0 right-0 -top-[5.2rem] shadow">
						<ul className="flex flex-col gap-1">
							<li>
								<button className="text-sm rounded-lg w-full hover:bg-white/10 duration-100 px-4 py-2 flex items-center gap-3">
									<img className="w-5" src="español.png" alt="Bandera de España" />
									Español
									<span className="ml-auto">{Tick}</span>
								</button>
							</li>
							<li>
								<button className="text-sm rounded-lg w-full hover:bg-white/10 duration-100 px-4 py-2 flex items-center gap-3">
									<img className="w-5" src="english.png" alt="Bandera de Estados Unidos" />
									Inglés
									{/* <span className="ml-auto">{Tick}</span> */}
								</button>
							</li>
						</ul>
					</div>
				)
			}
		</div>
	)
}