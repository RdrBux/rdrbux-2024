import Image from "next/image";

export default function Home() {
	return (
		<main className="max-w-3xl mx-auto mb-24">

			<Image src="/foto-perfil.jpg" alt="Rodrigo Rodríguez Buxman" width={800} height={800} className="w-48 lg:w-64 rounded-lg lg:float-right mx-auto mb-8 lg:m-8" />
			<h1 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Construyendo el Futuro Digital con Creatividad y Profesionalismo</h1>

			<div className="text-gray-300 font-normal mt-8">

				<p>Soy un Desarrollador Fullstack orientado principalmente en el Frontend, actualmente viviendo en Argentina. Apasionado por la creación de grandes experiencias digitales, siempre me esfuerzo por la excelencia en cada detalle e interacción para optimizar las experiencias de los usuarios.</p>

				<p className="mt-4">Utilizo tecnologías como <b>HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Tailwind</b> y herramientas de diseño como <b>Figma e Illustrator</b> para llevar diseños a la realidad.</p>

				<p className="mt-4">Lo que más me atrae del desarrollo web es la capacidad de mejorar la calidad de vida de las personas mediante la creación de herramientas útiles y accesibles. Me inspiro especialmente en el desarrollo de interfaces de usuario, donde puedo fusionar mi creatividad con habilidades técnicas para crear experiencias digitales significativas y efectivas.</p>

				<p className="mt-4">Además, cuento con formación como Técnico en Administración de Empresas, lo que me ha dotado de habilidades en gestión, control, marketing, economía, contabilidad y finanzas. Esta formación complementa mi enfoque técnico en el desarrollo web.</p>

			</div>
		</main>
	)
}