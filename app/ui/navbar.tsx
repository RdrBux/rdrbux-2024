import Link from "next/link";
import NavMenu from "./nav-menu";

export default function Navbar() {
	return (
		<div className="fixed z-30 top-0 left-0 w-full">
			<header className="lg:hidden backdrop-blur-3xl flex items-center justify-between p-4 bg-gray-950 border-b border-white/15">
				<Link href="/" className="grid grid-cols-[auto_1fr] items-center gap-3">
					<img src="avatar.jpg" alt="Rodrigo Rodríguez Buxman" className="h-10 aspect-square rounded-full" />
					<div className="">
						<h4 className="font-medium tracking-tight">Rodrigo Rodríguez Buxman</h4>
						<p className="text-white/60 text-sm">Desarrollador Web</p>
					</div>
				</Link>

				<NavMenu />

			</header>
		</div>
	)
}