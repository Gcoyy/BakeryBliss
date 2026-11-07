import { Link } from "react-router-dom";
import Hero from "../../sections/Hero"
import CakeCustom from "../../sections/CakeCustom"
import CakeCollection from "../../sections/CakeCollection"

const Home = () => {
  return (
    <main>
      <Hero />
      <CakeCollection />
      <CakeCustom />

      <section className="bg-patisserie-vanilla px-5 py-16 sm:px-8 sm:py-20 lg:py-24" aria-labelledby="story-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="overflow-hidden rounded-3xl bg-patisserie-blush">
            <img
              src="/client.png"
              alt="A baker holding a decorated cupcake"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-patisserie-rose-strong">
              A little about us
            </p>
            <h2
              id="story-heading"
              className="font-abhaya text-4xl font-semibold leading-tight text-patisserie-cocoa sm:text-5xl"
            >
              Made for the moments worth celebrating.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-patisserie-cocoa/80">
              Connie de Café began as a small home-based bakery with a passion for creating extraordinary cakes.
              From intimate birthdays to wedding receptions, each cake is made to feel as special as the moment.
            </p>
            <Link
              to="/aboutus"
              className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-patisserie-cocoa underline decoration-patisserie-rose/70 underline-offset-4 transition-colors hover:text-patisserie-rose-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-patisserie-rose-strong"
            >
              Read our story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
