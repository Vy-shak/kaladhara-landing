import {Hero,About,Book, Footer,Performance,Products, Contact,Theartist,Testimonials} from "./components/index"
import Carousel from "@/components/ui/carousel";


const slideData = [
  {
    title: "THEYYAM UNFILTERED",
    button: "Explore",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <section className="w-full">
      <Hero/>
      <section className="pb-12 w-full">
        <section className="w-full px-20">
        <About/>
        </section>
        <section className="w-full pt-20 ">
        <Carousel slides={slideData}/>
        </section>
        <section className="w-full pt-20 ">
        <Performance/>
        </section>
        <section className="w-full pt-20 ">
        <Products/>
        </section>
        <section className="w-full pt-20 ">
        <Theartist/>
        </section>
        <section className="w-full pt-20 ">
        <Testimonials/>
        </section>
        <section className="w-full pt-20 ">
        <Contact/>
        </section>
        <section className="w-full pt-20 ">
        <Footer/>
        </section>
      </section>
    </section>
  );
}
