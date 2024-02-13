import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: 'About me | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="max-w-3xl mx-auto mb-24">

			<Image src="/foto-perfil.jpg" alt="Rodrigo Rodríguez Buxman" width={800} height={800} className="w-48 lg:w-64 rounded-lg lg:float-right mx-auto mb-8 lg:m-8" />
			<h1 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Building the Digital Future with Creativity and Professionalism</h1>

			<div className="text-gray-300 font-normal mt-8">

				<p>I am a Fullstack Developer focused mainly on the Frontend, currently living in Argentina. Passionate about creating great digital experiences, I always strive for excellence in every detail and interaction to optimize user experiences.</p>

				<p className="mt-4">I use technologies like <b>HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Tailwind</b> and design tools like <b>Figma and Illustrator</b> to bring designs to reality.</p>

				<p className="mt-4">What attracts me most to web development is the ability to improve people&apos;s quality of life by creating useful and accessible tools. I am especially inspired by user interface development, where I can merge my creativity with technical skills to create meaningful and effective digital experiences.</p>

				<p className="mt-4">In addition, I have an associate degree in Business Administration, which has given me skills in management, control, marketing, economics, accounting and finance. This training complements my technical knowledge in web development.</p>

			</div>
		</main>
	)
}