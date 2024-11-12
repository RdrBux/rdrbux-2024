import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Utopía | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-white/60 font-medium text-lg my-1 uppercase tracking-wider">Utopía</h1>
				<h2 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Tu nueva forma de vivir y compartir un estilo de vida saludable</h2>
			</div>

			<Image src="/projects/utopia/project-utopia.jpg" alt="Utopia Website" width={3840} height={2160} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="grid lg:grid-cols-2 gap-20 lg:gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>Utopía es una red social innovadora diseñada para promover un estilo de vida más saludable y auténtico entre los usuarios.</p>
					<p className="mt-4">En contraposición a las presiones sociales y los estándares de perfección comúnmente asociados con las redes sociales convencionales, Utopía ofrece un espacio donde compartir hábitos alimenticios, actividad física y reflexiones generales, fomentando la colaboración y la inspiración mutua para una vida más plena.</p>
					<a className="text-teal-300 underline block mt-4 hover:text-teal-500 duration-200" href="https://utopia-social.vercel.app/" target="_blank" rel="noopener noreferrer">Ver demo</a>
					<a className="text-teal-300 underline block mt-2 hover:text-teal-500 duration-200" href="https://github.com/RdrBux/utopia" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
				</div>

				<div className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TRABAJO REALIZADO</h4>
					<p className="">Diseño <br /> Desarrollo Fullstack <br /> Bases de Datos</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECNOLOGÍAS</h4>
					<p>React <br /> Next.js <br /> TypeScript <br /> Tailwind <br /> PostgreSQL <br /> Lucia Auth</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">IDIOMAS</h4>
					<p>Español</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">AÑO</h4>
					<p>2024</p>
				</div>
			</div>

			<Image src="/projects/utopia/login.png" alt="Utopia Website" width={2640} height={1328} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<h2 className="text-3xl font-semibold tracking-tight">CARACTERÍSTICAS DESTACADAS</h2>
			<div className="grid lg:grid-cols-2 gap-10 -mt-12">
				<div>
					<h3 className="text-lg font-semibold">Autenticación y Autorización</h3>
					<p className="mt-2 text-gray-400">Utopía ofrece funciones de autenticación y autorización que permiten a los usuarios registrar nuevas cuentas, iniciar sesión con Google o explorar la plataforma como invitado.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Publicaciones y Comentarios</h3>
					<p className="mt-2 text-gray-400">Los usuarios pueden crear publicaciones con texto e imágenes, así como interactuar con el contenido de otros usuarios mediante &quot;Me gusta&quot; y comentarios. Estas interacciones son reversibles, brindando flexibilidad y control al usuario.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Perfil Personalizado</h3>
					<p className="mt-2 text-gray-400">Cada usuario tiene un perfil propio donde pueden ver sus estadísticas de actividad física y alimentación, además de contar con opciones de personalización para cambiar aspectos como la imagen de perfil, la biografía o la privacidad.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Búsqueda y Notificaciones</h3>
					<p className="mt-2 text-gray-400">Utopía incluye una función de búsqueda para encontrar usuarios y publicaciones específicas, así como un menú de notificaciones para mantener a los usuarios informados sobre la actividad relevante en la plataforma.</p>
				</div>
			</div>

			<Image src="/projects/utopia/search.png" alt="Utopia Website" width={2640} height={1630} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">PROCESO DE DESARROLLO</h2>
				<ul className="mt-8 text-gray-400 list-disc px-4">
					<li>Se elaboraron wireframes en Figma para definir los aspectos fundamentales de la aplicación y cada una de sus páginas.</li>
					<li className="mt-4">Se creó una base de datos SQL, determinando las tablas, columnas y relaciones necesarias.</li>
					<li className="mt-4">Se desarrolló el frontend utilizando Server Components o Client Components según la interactividad requerida.</li>
					<li className="mt-4">Se implementaron Server Actions para la comunicación entre el cliente, el servidor y la base de datos.</li>
					<li className="mt-4">Finalmente, se realizó el testeo, ajustes y lanzamiento a producción de la aplicación.</li>
				</ul>
			</div>

			<Image src="/projects/utopia/db.png" alt="Utopia database" width={3265} height={3105} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">LECCIONES APRENDIDAS</h2>
				<p className="text-gray-400 mt-8">El proyecto permitió perfeccionar el uso de Next.js 14 con App Router, así como el manejo completo del ciclo de vida de usuarios, incluyendo su creación e ingreso.</p>
				<p className="mt-4 text-gray-400">Además, se adquirieron habilidades en el desarrollo y mantenimiento de bases de datos con PostgreSQL, incluyendo la implementación de triggers y funciones para una mayor eficiencia.</p>
				<p className="mt-4 text-gray-400">Se destacó también el manejo de errores y actualizaciones visuales del estado en la interfaz de usuario, tanto en formularios en proceso como en actualizaciones optimistas.</p>
			</div>

			<Link href='/projects/cv-design' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-800">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Siguiente proyecto</h5>
				<p className="text-6xl tracking-tighter font-semibold">CV Design</p>
			</Link>

		</main>
	)
}