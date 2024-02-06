import FeaturedProjects from "./ui/home/featured-projects";
import Hero from "./ui/home/hero";

export default function Home() {
  return (
    <div className="py-36 lg:py-24">
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
