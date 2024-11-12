import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Ballena Blanca | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Estudio Ballena Blanca</h1>
				<h2 className="text-white/60 font-medium my-1 uppercase tracking-wider">Mezclas y masterización</h2>
			</div>

			<Image src="/projects/ballena-blanca/ballena-blanca.jpeg" alt="Utopia Website" width={3840} height={2160} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="grid lg:grid-cols-2 gap-20 lg:gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>El proyecto implicó el diseño y desarrollo de un sitio web para el estudio de mezclas y masterización Ballena Blanca, con el objetivo de aumentar su presencia online y atraer a más clientes potenciales.</p>
					<p className="mt-4">El sitio web se enfocó en facilitar la interacción y el acceso a información relevante, maximizando la experiencia del usuario y simplificando el proceso de contacto.</p>
					<a className="text-teal-300 underline block mt-4 hover:text-teal-500 duration-200" href="https://ballenablanca.com.ar/" target="_blank" rel="noopener noreferrer">Visitar sitio</a>
				</div>

				<div className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase whitespace-nowrap tracking-wider text-right">TRABAJO REALIZADO</h4>
					<p className="">Diseño <br /> Desarrollo web</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECNOLOGÍAS</h4>
					<p>Astro <br /> Tailwind <br /> GSAP</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">AÑO</h4>
					<p>2024</p>
				</div>
			</div>

			<Image src="/projects/ballena-blanca/servicios.png" alt="Ballena Blanca - Servicios" width={3510} height={1992} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Características destacadas</h2>
				<p className="text-gray-400 mt-8">El sitio web es una SPA (aplicación de una sola página) con un diseño oscuro que le da un toque moderno y profesional. Se incorporaron animaciones dinámicas para enriquecer la experiencia del usuario y destacar los elementos clave.</p>
				<p className="mt-4 text-gray-400">Los servicios ofrecidos por el estudio se colocaron estratégicamente debajo de la sección Hero para garantizar un acceso rápido y directo. Además, se integró la API de Spotify, permitiendo a los visitantes escuchar ejemplos de trabajos realizados por el cliente sin salir del sitio.</p>
			</div>

			<Image src="/projects/ballena-blanca/trabajos.png" alt="Ballena Blanca - Trabajos realizados" width={3510} height={1992} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Desafíos y Soluciones</h2>
				<p className="text-gray-400 mt-8">Uno de los principales retos fue lograr un equilibrio entre un diseño atractivo y una carga rápida del sitio. Se optimizaron las animaciones y se gestionaron los recursos para mantener la velocidad de carga. La integración de la API de Spotify también representó un desafío técnico, que se resolvió mediante la configuración cuidadosa de llamadas a la API y la gestión del contenido dinámico.</p>
			</div>

			<Image src="/projects/ballena-blanca/contacto.png" alt="Ballena Blanca - contacto" width={3510} height={1992} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Resultados</h2>
				<p className="text-gray-400 mt-8">El cliente expresó un feedback altamente positivo, destacando que el sitio cumplió y superó las expectativas. La estructura clara y el diseño moderno permitieron presentar los servicios de manera precisa y efectiva, mejorando la visibilidad y atractivo del estudio en el entorno digital.</p>
			</div>

			<Link href='/projects/dulcinea' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-rose-500 to-rose-800">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Siguiente proyecto</h5>
				<p className="text-6xl tracking-tighter font-semibold">Dulcinea</p>
			</Link>

		</main>
	)
}