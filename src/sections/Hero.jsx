import { Link } from "react-router-dom";

const Hero = () => (
  <section
    id="home"
    className="home-hero relative flex min-h-[600px] h-[min(78svh,780px)] items-center overflow-hidden"
    aria-labelledby="home-heading"
  >
    <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16">
      <div className="max-w-2xl">
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-patisserie-buttercream sm:text-sm">
          <span className="h-px w-10 bg-patisserie-buttercream" aria-hidden="true" />
          Handcrafted in Dumaguete
        </p>
        <h1
          id="home-heading"
          className="max-w-3xl font-abhaya text-5xl font-semibold leading-[0.98] text-patisserie-vanilla sm:text-6xl lg:text-8xl"
        >
          Cakes made for your sweetest moments.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
          Design a cake that feels like yours, or find inspiration in our handcrafted collection.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/cakecustomization"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-patisserie-rose-strong px-7 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-patisserie-cocoa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Create Your Cake
          </Link>
          <Link
            to="/cakecatalog"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Our Cakes
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
