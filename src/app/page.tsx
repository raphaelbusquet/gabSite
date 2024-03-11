import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <Services />
        <WorkProcess />
      </div>
    </main>
  ); 
}
