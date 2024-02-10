import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<div>
				<h1 className="text-white/60 font-medium text-lg my-1 uppercase tracking-wider">COPY SAVER</h1>
				<h2 className="text-[11vw] leading-none md:text-5xl tracking-tighter font-semibold">La extensión de Google Chrome que incrementará tu productividad</h2>
			</div>

			<Image src="/projects/copy-saver/copy-saver-home.jpg" alt="Copy Saver Chrome Extension" width={1800} height={1172} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="grid lg:grid-cols-2 gap-10 place-items-center">
				<div className="text-gray-300 text-xl lg:px-4">
					<p>Optimiza tu flujo de trabajo y nunca vuelvas a perder textos copiados. Copy Saver permite administrar el portapapeles con acciones rápidas e intuitivas.</p>
					<p className="mt-4">Captura y guarda automáticamente el contenido de texto copiado durante la navegación web, Copy Saver es la solución ideal para una gestión eficiente de tu información.</p>
					<a className="text-teal-300 underline block w-fit mt-4 hover:text-teal-500 duration-200" href="https://github.com/RdrBux/CopySaver" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
					<p className="text-teal-600 block w-fit mt-4"><span className="line-through">Chrome Web Store</span> (proximamente)</p>
				</div>

				<div className="grid grid-cols-2 gap-4 text-sm h-fit">
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TRABAJO REALIZADO</h4>
					<p className="">Diseño <br /> Desarrollo Web</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">TECNOLOGÍAS</h4>
					<p>JavaScript <br /> React <br /> Tailwind <br /> Chrome extension</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">IDIOMAS</h4>
					<p>Inglés <br /> <span className="line-through">Español</span> (proximamente)</p>
					<h4 className="text-white/60 font-medium uppercase tracking-wider text-right">AÑO</h4>
					<p>2023</p>
				</div>
			</div>

			<Image src="/projects/copy-saver/browser.png" alt="Copy Saver Chrome Extension" width={1440} height={799} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<h2 className="text-3xl font-semibold tracking-tight">CARACTERÍSTICAS DESTACADAS</h2>
			<div className="grid lg:grid-cols-2 gap-10 -mt-12">
				<div>
					<h3 className="text-lg font-semibold">Funcionamiento automático</h3>
					<p className="mt-2 text-gray-400">Actualmente, se cuenta con dos plantillas: Swiss o American, proporcionando opciones de diseño versátiles para adaptarse a diversos estilos.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Acciones rápidas</h3>
					<p className="mt-2 text-gray-400">Opciones como &quot;Agregar un nombre o descripción&quot;, &quot;Agregar a favoritos&quot;, &quot;Eliminar&quot; o &quot;Copiar&quot; directamente desde la ventana de la extensión.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Características avanzadas</h3>
					<p className="mt-2 text-gray-400">Navegación en pestañas (general y favoritos), barra de búsqueda, paginación, almacenamiento disponible.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">Copia de seguridad</h3>
					<p className="mt-2 text-gray-400">Posibilidad de guardar datos en un archivo JSON y realizar importaciones desde un archivo.</p>
				</div>
			</div>

			<Image src="/projects/copy-saver/code2.jpg" alt="Copy Saver Chrome Extension" width={1504} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />


			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">DESAFÍOS Y SOLUCIONES</h2>
				<div className="mt-8 text-gray-400">
					<p>El principal desafío fue capturar las acciones de copiado de los usuarios, ya que Chrome, por motivos de seguridad y privacidad, no permite el acceso a la API del portapapeles desde las extensiones.</p>
					<p className="mt-4">Por ello, se decidió inyectar scripts en la carga de cada sitio visitado, los cuales ejecutan código que permite capturar el evento de copiado dentro de la página actual y permiten obtener el texto seleccionado por el usuario.</p>
					<p className="mt-4">Los scripts inyectados en cada sitio se comunican con el background de la aplicación (Service Worker), el cual se encarga de almacenar la información en la base de datos de forma eficiente.</p>
				</div>
			</div>

			<Image src="/projects/copy-saver/code1.jpg" alt="Copy Saver Chrome Extension" width={1504} height={900} className="rounded-2xl border-4 border-white/20 shadow-lg" />

			<div className="max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">PLANES A FUTURO</h2>
				<p className="text-gray-400 mt-8">Para el funcionamiento de la extensión, se requiere que el sitio visitado permita la ejecución de código JavaScript, lo cual impide su uso fuera del navegador o desde archivos donde el código no puede inyectarse (como archivos PDF).</p>
				<p className="text-gray-400 mt-4">En ese caso, existe una función en la API de Document llamada execCommand(), que otorga acceso al portapapeles. En conjunto con un bucle continuo, se pueden verificar cambios en el mismo y guardarlos en la base de datos.</p>
				<p className="text-gray-400 mt-4">Esta será una función opcional, la misma abrirá una nueva pestaña temporal en segundo plano con un Iframe inyectado para ejecutar las funciones. Actualmente, se encuentra en desarrollo.</p>
			</div>

			<Link href='/projects/utopia' className="grid place-content-center text-center w-full h-[70vh] rounded-2xl bg-gradient-to-br from-teal-500 to-teal-800">
				<h5 className="text-white/80 font-medium uppercase tracking-wider">Siguiente proyecto</h5>
				<p className="text-6xl tracking-tighter font-semibold">Utopía</p>
			</Link>

		</main>
	)
}