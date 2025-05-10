import {Hero,About,Book, Footer,Performance,Products, Contact,Theartist,Testimonials} from "./components/index"
import { Programs } from "./data/Programs";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
  return (
    <section className="w-full">
      <Hero/>
      <section className="pb-12 w-full">
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col  justify-center items-center">
        <About/>
       </section>
          <section className="w-full pt-20 ">
          <Carousel slides={Programs} />
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
        {/* <section className="w-full pt-20 ">
        <Footer/>
        </section> */}
      </section>
    </section>
  );
}
