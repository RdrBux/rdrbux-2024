import Image from "next/image";

export default function Avatar() {
	return (
		<div className="h-10 aspect-square rounded-full bg-gradient-to-b from-teal-300 to-teal-500">
			<Image src="/avatar.png" alt="Rodrigo Rodríguez Buxman" width={256} height={256} className="rounded-full" />
		</div>
	)
}