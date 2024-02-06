import Link from "next/link";
import { Hamburger } from "./icons";

export default function Navbar() {
	return (
		<div className="fixed z-30 top-0 left-0 w-full">
			<header className="lg:hidden backdrop-blur-md flex items-center justify-between p-4 bg-white/5 border-b border-white/10">
				<Link href="/" className="grid grid-cols-[auto_1fr] items-center gap-3">
					<div className="h-12 aspect-square bg-teal-500 rounded-full"></div>
					<div className="">
						<h4 className="font-medium tracking-tight">Rodrigo Rodríguez Buxman</h4>
						<p className="text-white/60 text-sm">Desarrollador Web</p>
					</div>
				</Link>

				<div className="w-12 aspect-square rounded-lg relative overflow-hidden bg-white/10">
					<div className="absolute w-[150%] h-[150%] -left-1/4 -top-1/4 bg-[conic-gradient(rgb(203_213_225)_20deg,transparent_120deg)] animate-slow-spin"></div>
					<button className="absolute inset-[1px] rounded-lg bg-gray-950"><div className="w-full h-full grid place-content-center bg-white/5 rounded-lg">{Hamburger}</div></button>
				</div>

			</header>
		</div>
	)
}