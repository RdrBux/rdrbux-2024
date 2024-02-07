import FeaturedProjects from "./ui/home/featured-projects";
import Hero from "./ui/home/hero";

export default function Home() {
  return (
    <main className="py-36 lg:py-24 relative">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
