import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Comunidad del Saber Supercomplejo | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Comunidad del Saber Supercomplejo</h1>
			</div>

			<Image src="/projects/saber-supercomplejo/saber-supercomplejo.jpeg" alt="Saber Supercomplejo Website" width={3840} height={2160} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="grid lg:grid-cols-2 gap-20 lg:gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>El proyecto implicó la creación de un sitio web para la Comunidad del Saber Supercomplejo, cuyo objetivo es difundir y explicar la teoría del Saber Supercomplejo a una audiencia más amplia. El sitio busca facilitar el acceso al conocimiento y fomentar la participación activa de los usuarios interesados en el tema.</p>
					<a className="text-teal-300 underline block mt-4 hover:text-teal-500 duration-200" href="https://sabersupercomplejo.com/" target="_blank" rel="noopener noreferrer">Visitar sitio</a>
				</div>

				<div className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase whitespace-nowrap tracking-wider text-right">TRABAJO REALIZADO</h4>
					<p className="">Diseño <br /> Desarrollo fullstack</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECNOLOGÍAS</h4>
					<p>React <br /> Next.js <br /> Tailwind <br /> Shadcn/ui <br /> Supabase</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">IDIOMAS</h4>
					<p>Español <br /> Inglés</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">AÑO</h4>
					<p>2024</p>
				</div>
			</div>

			<Image src="/projects/saber-supercomplejo/camino.png" alt="Saber Supercomplejo - El camino" width={3505} height={2175} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Características destacadas</h2>
				<p className="text-gray-400 mt-8">El sitio web presenta una página de inicio con una introducción a la Comunidad, acompañada de diversas secciones que proporcionan descripciones resumidas de aspectos clave como la teoría del Saber Supercomplejo, la comunidad, el camino y un apartado dedicado al blog. Cada sección ofrece la posibilidad de redirigir a contenidos más detallados y específicos.</p>
				<p className="mt-4 text-gray-400">También incluye un blog funcional que permite a los usuarios registrados crear publicaciones, agregar comentarios y participar en debates. Además, la plataforma está disponible en español e inglés para alcanzar a un público más diverso y global.</p>
			</div>

			<Image src="/projects/saber-supercomplejo/blog.png" alt="Saber Supercomplejo - Blog" width={3697} height={2199} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Desafíos y Soluciones</h2>
				<p className="text-gray-400 mt-8">Uno de los principales desafíos fue integrar de forma fluida el sistema de autenticación de usuarios y la gestión de datos en tiempo real con Supabase. La solución consistió en implementar una estructura de back-end robusta y segura que permitiera la creación y gestión de perfiles de usuario, así como la interacción con las publicaciones y comentarios.</p>
			</div>

			<Image src="/projects/saber-supercomplejo/post.png" alt="Saber Supercomplejo - Post" width={3697} height={2199} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Resultados</h2>
				<p className="text-gray-400 mt-8">El proyecto ha tenido un impacto positivo, posicionándose entre los primeros resultados de búsqueda y atrayendo un tráfico constante. Se alcanzó un récord de 506 usuarios únicos en un solo día, demostrando el interés y la relevancia del contenido ofrecido.</p>
			</div>

			<Link href='/projects/ballena-blanca' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-[hsl(59,55%,57%)] to-[hsl(59,55%,27%)]">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Siguiente proyecto</h5>
				<p className="text-6xl tracking-tighter font-semibold">Ballena <br className="block md:hidden" /> Blanca</p>
			</Link>

		</main>
	)
}