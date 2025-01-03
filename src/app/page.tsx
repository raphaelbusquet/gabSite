import CallToACtion from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <main className="h-[5186px]">
      <Header />
      <Hero />
      <Services />
      <WorkProcess />
      <CallToACtion />
      <Footer />
    </main>
  ); 
}
