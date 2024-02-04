import Link from "next/link";

export default function Sidebar() {
	return (
		<div className="fixed top-0 left-0 h-screen w-56 overflow-hidden">
			<aside className="border-r bg-white/5 border-white/20 h-full p-6">
				<div className="flex flex-col items-center gap-4">
					<div className="w-[6vw] aspect-square bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg"></div>
					<p className="font-bold text-xl text-center leading-none tracking-tighter"><span className="bg-gradient-to-b text-transparent bg-clip-text from-zinc-200 to-white">Rodrigo Rodríguez </span><span className="bg-gradient-to-b text-transparent bg-clip-text from-zinc-200 to-white">Buxman</span></p>
					<p className="text-zinc-400 -mt-2 text-sm">@RdrBux</p>
				</div>

				<nav>
					<ul className="mt-16 flex flex-col gap-2">
						<li>
							<Link href='/' className="bg-white/10 rounded-lg px-6 py-2.5 w-full block" >
								Inicio
							</Link>
						</li>
						<li>
							<Link href='/' className="bg-transparent text-zinc-400 rounded-lg px-6 py-2.5 w-full block hover:bg-white/5 duration-100" >
								Proyectos
							</Link>
						</li>
						<li>
							<Link href='/' className="bg-transparent text-zinc-400 rounded-lg px-6 py-2.5 w-full block" >
								Sobre mí
							</Link>
						</li>
						<li>
							<Link href='/' className="bg-transparent text-zinc-400 rounded-lg px-6 py-2.5 w-full block" >
								Contacto
							</Link>
						</li>

					</ul>
				</nav>
			</aside>
		</div>
	)
}

