import {Hero,About,Book} from "./components/index"


export default function Home() {
  return (
    <section className="w-full">
      <Hero/>
      <section className="pb-12 w-full">
        <section className="w-full px-20">
        <About/>
        </section>
        <section className="w-full pt-20 ">
        <Book/>
        </section>
      </section>
    </section>
  );
}
