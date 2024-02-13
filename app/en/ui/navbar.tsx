import Link from "next/link";
import NavMenu from "./nav-menu";
import Avatar from "./avatar";

export default function Navbar() {
	return (
		<div className="fixed z-30 top-0 left-0 w-full">
			<header className="lg:hidden backdrop-blur-3xl flex items-center justify-between p-4 bg-gray-950 border-b border-white/15">
				<Link href="/en" className="grid grid-cols-[auto_1fr] items-center gap-3">
					<Avatar />
					<div className="">
						<h4 className="font-medium tracking-tight">Rodrigo Rodríguez Buxman</h4>
						<p className="text-white/60 text-sm">Web Developer</p>
					</div>
				</Link>

				<NavMenu />

			</header>
		</div>
	)
}