import { Link } from "react-router-dom";

const Hero = () => (
  <section
    id="home"
    className="home-hero flex min-h-[600px] h-[min(78svh,780px)] items-center"
    aria-labelledby="home-heading"
  >
    <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16">
      <div className="max-w-2xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#f4dca8] sm:text-sm">
          Handcrafted in Dumaguete
        </p>
        <h1
          id="home-heading"
          className="font-abhaya text-5xl font-semibold leading-[0.98] text-[#fffaf0] sm:text-6xl lg:text-8xl"
        >
          Connie de Café
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
          Where every slice begins with your imagination.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/cakecatalog"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f7e6bd] px-7 py-3 text-sm font-semibold text-[#492220] shadow-md transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore our cakes
          </Link>
          <Link
            to="/cakecustomization"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/65 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Create a custom cake
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
