import Link from "next/link";
import { GitHub, Identification, LinkedIn, Mail } from "../icons";

export default function Footer() {
	return (
		<footer className="mt-24 flex justify-between items-center border-t border-white/10">
			<Link href="/">
				<span className="font-semibold">RdrBux</span> <span className="text-gray-400">2024</span>
			</Link>

			<ul className="flex items-center">
				<li>
					<Link title="Correo" aria-label="Correo electrónico" href="mailto:rdrbux@gmail.com" className="text-white/60 hover:text-white duration-200 p-2.5 inline-block">{Mail}</Link>
				</li>
				<li>
					<Link title="LinkedIn" aria-label="Linkedin" href="https://www.linkedin.com/in/rdrbux/" className="text-white/60 hover:text-white duration-200 p-2.5 inline-block">{LinkedIn}</Link>
				</li>
				<li>
					<Link title="GitHub" aria-label="GitHub" href="https://github.com/RdrBux" className="text-white/60 hover:text-white duration-200 p-2.5 inline-block">{GitHub}</Link>
				</li>
				<li>
					<Link title="Curriculum Vitae" aria-label="Curriculum Vitae" href="https://drive.google.com/file/d/11GrA9lsIslOnRc3Fw4OTEpNpcuqpsjXs/view" className="text-white/60 hover:text-white duration-200 p-2.5 inline-block">{Identification}</Link>
				</li>
			</ul>

		</footer>
	)
}