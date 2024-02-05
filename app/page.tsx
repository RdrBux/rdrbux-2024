import FeaturedProjects from "./ui/home/featured-projects";
import Hero from "./ui/home/hero";

export default function Home() {
  return (
    <div className="px-8">
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
