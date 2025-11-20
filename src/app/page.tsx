import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import GitHubStats from "@/components/GitHubStats";
import BlogPosts from "@/components/BlogPosts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <GitHubStats />
      <BlogPosts />
      <Footer />
    </div>
  );
}