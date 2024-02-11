import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-white/60 font-medium text-lg my-1 uppercase tracking-wider">CV Design</h1>
				<h2 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Tu creador de Curriculum Vitae profesionales en cinco minutos</h2>
			</div>

			<Image src="/projects/cv-design/hero.png" alt="CV Design Website" width={1486} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="grid lg:grid-cols-2 gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>CV Design es un creador online de Curriculum Vitae diseñado para simplificar la elaboración de tu próximo currículum estético y profesional.</p>
					<p className="mt-4">La aplicación posee una sección de vista previa que se actualiza en vivo que permite visualizar las actualizaciones en tiempo real mientras se completan los formularios con la información pertinente.</p>
					<a className="text-teal-300 underline block mt-4 hover:text-teal-500 duration-200" href="https://rdrbux.github.io/cv-application" target="_blank" rel="noopener noreferrer">Ver demo</a>
					<a className="text-teal-300 underline block mt-2 hover:text-teal-500 duration-200" href="https://github.com/RdrBux/cv-application" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
				</div>

				<div className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TRABAJO REALIZADO</h4>
					<p className="">Diseño <br /> Desarrollo Web</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECNOLOGÍAS</h4>
					<p>React <br /> React Router <br /> Tailwind <br /> ReactToPrint</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">IDIOMAS</h4>
					<p>Español</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">AÑO</h4>
					<p>2023</p>
				</div>
			</div>

			<div className="h-[60vh] lg:h-auto py-6 flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 lg:gap-16" >
				<Image src="/projects/cv-design/phone1.png" alt="CV Design Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
				<Image src="/projects/cv-design/phone2.png" alt="CV Design Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
				<Image src="/projects/cv-design/phone3.png" alt="CV Design Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
			</div>

			<h2 className="text-3xl font-semibold tracking-tight">CARACTERÍSTICAS DESTACADAS</h2>
			<div className="grid lg:grid-cols-2 gap-10 -mt-12">
				<div>
					<h3 className="text-lg font-semibold">Plantillas profesionales</h3>
					<p className="mt-2 text-gray-400">Actualmente, se cuenta con dos plantillas: Swiss o American, proporcionando opciones de diseño versátiles para adaptarse a diversos estilos.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Paleta de colores</h3>
					<p className="mt-2 text-gray-400">Cada plantilla admite nueve colores decorativos opcionales, permitiendo una personalización completa según las preferencias del usuario.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Imagen de avatar</h3>
					<p className="mt-2 text-gray-400">La plantilla Swiss incluye la opción de agregar una imagen de avatar opcional, brindando un toque personal a la presentación del CV.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Guardado en PDF</h3>
					<p className="mt-2 text-gray-400">Los usuarios pueden guardar el resultado en formato PDF o imprimirlo directamente, ofreciendo flexibilidad en la distribución de sus CV.</p>
				</div>
			</div>

			<Image src="/projects/cv-design/main.png" alt="CV Design Website" width={1486} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">DESAFÍOS Y SOLUCIONES</h2>
				<div className="mt-8 text-gray-400">
					<p>El principal desafío fue implementar la función de descarga del CV finalizado, para lo cual se utilizó la biblioteca ReactToPrint.</p>
					<p className="mt-4">Para asistir en el proceso se construyó una visualización con actualizaciones en tiempo real adaptada a los requisitos de ReactToPrint y se ajustó el diseño del sitio para que sea fácil de visualizar.</p>
					<p className="mt-4">Una vez que el usuario está conforme, puede presionar el botón de descarga para imprimir su CV o descargarlo en formato PDF.</p>
				</div>
			</div>

			<Image src="/projects/cv-design/download.png" alt="CV Design Website" width={999} height={628} className="rounded-2xl border-4 mx-auto border-white/20 shadow-lg" />


			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">PLANES A FUTURO</h2>
				<p className="text-gray-400 mt-8">El objetivo inicial fue el de crear una aplicación web simple y efectiva que garantice resultados óptimos a sus usuarios. Esto implica que es primordial conservar un diseño sencillo y una cantidad de información relevante y concisa.</p>
				<p className="mt-4 text-gray-400">En base a estas premisas se diseñaron las plantillas y se seleccionaron los colores disponibles. Por ello, el objetivo a futuro es continuar añadiendo plantillas, pero con un minucioso proceso de desarrollo y perfeccionamiento para garantizar la mejor calidad de los resultados.</p>
			</div>

			<Link href='/projects/copy-saver' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-sky-500 to-blue-800">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Siguiente proyecto</h5>
				<p className="text-6xl tracking-tighter font-semibold">Copy Saver</p>
			</Link>

		</main>
	)
}