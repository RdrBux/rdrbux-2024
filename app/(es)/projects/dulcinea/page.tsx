import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
	title: 'Dulcinea | Rodrigo Rodríguez Buxman'
}

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-white/60 font-medium text-lg my-1 uppercase tracking-wider">DULCINEA RODRÍGUEZ</h1>
				<h2 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">Ballet, cultura y bienestar: explora el mundo de Dulcinea</h2>
			</div>

			<Image src="/projects/dulcinea/hero.jpg" alt="Dulcinea Rodríguez Website" width={1494} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="grid lg:grid-cols-2 gap-20 lg:gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>Dulcinea Rodríguez, destacada bailarina de ballet, profesora de francés y especialista en medicina ayurvédica y kinesiología, ahora tiene una presencia digital que refleja cada una de sus habilidades.</p>
					<p className="mt-4">Este trabajo consistió en la creación de su sitio web personal, un espacio elegante que no solo muestra sus talentos, sino que también presenta secciones dedicadas a los servicios que ofrece y una tienda con productos de colaboradores.</p>
					<a className="text-teal-300 underline inline-block w-fit mt-4 hover:text-teal-500 duration-200" href="https://dulcinearodriguez.com.ar/" target="_blank" rel="noopener noreferrer">Visitar sitio</a>
				</div>

				<div className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TRABAJO REALIZADO</h4>
					<p className="">Diseño <br /> Desarrollo Web</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECNOLOGÍAS</h4>
					<p>React <br /> React Router <br /> Tailwind <br /> EmailJs</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">IDIOMAS</h4>
					<p>Español</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">AÑO</h4>
					<p>2023</p>
				</div>
			</div>

			<div className="h-[60vh] lg:h-auto py-6 flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 lg:gap-16" >
				<Image src="/projects/dulcinea/phone1.jpg" alt="Dulcinea Rodríguez Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
				<Image src="/projects/dulcinea/phone2.jpg" alt="Dulcinea Rodríguez Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
				<Image src="/projects/dulcinea/phone3.jpg" alt="Dulcinea Rodríguez Website Mobile" width={720} height={1480} className="rounded-2xl border-4 border-white/20 shadow-lg" />
			</div>

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">DESAFÍOS Y SOLUCIONES</h2>
				<div className="mt-8 text-gray-400">
					<p>El principal desafío fue construir un sitio web que equilibrara la simplicidad con detalles elegantes. El enfoque estaba en crear una experiencia visualmente atractiva, destacando la presencia de Dulcinea a través de numerosas imágenes personales.</p>
					<p className="mt-4">La solución implicó una cuidadosa planificación del diseño y la implementación de elementos visuales que complementaran sus habilidades de manera armoniosa.</p>
				</div>
			</div>

			<Image src="/projects/dulcinea/about.jpg" alt="Dulcinea Rodríguez website" width={1494} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">RESULTADOS</h2>
				<p className="text-gray-400 mt-8">Los resultados fueron sumamente exitosos. El sitio ha logrado un destacado posicionamiento en SEO y ha experimentado un flujo constante de tráfico, especialmente en momentos en que Dulcinea ha recibido exposición mediática por sus propios méritos y popularidad.</p>
			</div>

			<Link href='/projects/utopia' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-teal-500 to-teal-800">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Siguiente proyecto</h5>
				<p className="text-6xl tracking-tighter font-semibold">Utopía</p>
			</Link>

		</main>
	)
}