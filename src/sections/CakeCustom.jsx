import { Link } from "react-router-dom";

const customizationOptions = [
  "Cake flavor",
  "Layers",
  "Size",
  "Shape",
  "Frosting & fillings",
  "Decorations & toppings",
];

const CakeCustom = () => (
  <section className="bg-patisserie-blush px-5 py-16 sm:px-8 sm:py-20 lg:py-24" aria-labelledby="custom-cake-heading">
    <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="overflow-hidden rounded-3xl bg-patisserie-vanilla">
        <img
          src="/images/floral-buttercream-cake.png"
          alt="Colorful two-tier celebration cake with chocolate frosting"
          loading="lazy"
          className="aspect-[4/5] w-full object-contain p-3"
        />
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-patisserie-rose-strong">
          Make it yours
        </p>
        <h2
          id="custom-cake-heading"
          className="font-abhaya text-4xl font-semibold leading-tight text-patisserie-cocoa sm:text-5xl"
        >
          Your cake, your canvas.
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-patisserie-cocoa/80">
          Bring your idea to life with the cake customization tool and preview your design as you create it.
        </p>

        <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-patisserie-cocoa sm:grid-cols-2">
          {customizationOptions.map((option) => (
            <li key={option} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-patisserie-rose" aria-hidden="true" />
              {option}
            </li>
          ))}
        </ul>

        <Link
          to="/cakecustomization"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-patisserie-rose-strong px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-patisserie-cocoa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-patisserie-rose-strong"
        >
          Design your cake
        </Link>
      </div>
    </div>
  </section>
);

export default CakeCustom;
