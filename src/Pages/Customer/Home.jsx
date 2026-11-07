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

      <section className="border-y border-[#f0e5de] bg-white px-5 py-14 sm:px-8 sm:py-16" aria-label="Our ordering process">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-patisserie-rose-strong">Simple by design</p>
            <h2 className="font-abhaya text-4xl font-semibold leading-tight text-patisserie-cocoa sm:text-5xl">From first idea to first bite.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[['01', 'Find your inspiration', 'Browse our collection of celebration cakes and discover a style that feels like you.'], ['02', 'Make it yours', 'Choose your flavors, finish, size, and details in our customization studio.'], ['03', 'Celebrate beautifully', 'We bake, decorate, and prepare your order with care for the moment ahead.']].map(([number, title, description]) => (
              <div key={number} className="border-t border-patisserie-rose pt-5">
                <span className="text-sm font-semibold text-patisserie-rose-strong">{number}</span>
                <h3 className="mt-4 font-abhaya text-2xl font-semibold text-patisserie-cocoa">{title}</h3>
                <p className="mt-2 leading-relaxed text-patisserie-cocoa/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
