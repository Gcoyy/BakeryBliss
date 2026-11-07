import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

const CakeCollection = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchCakes = async () => {
      try {
        const { data, error } = await supabase
          .from("CAKE")
          .select("cake_id, name, price, cake_img, theme, tier")
          .order("cake_id", { ascending: true })
          .limit(3);

        if (error) {
          throw error;
        }

        if (isMounted) {
          setCakes(
            (data || []).map((cake) => ({
              ...cake,
              publicUrl: cake.cake_img
                ? cake.cake_img.startsWith("http")
                  ? cake.cake_img
                  : supabase.storage.from("cake").getPublicUrl(cake.cake_img).data.publicUrl
                : "/saved-cake.png",
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching cakes for the home page:", error);
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCakes();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      className="bg-patisserie-vanilla px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="collection-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-patisserie-rose-strong">
              Baked for your celebrations
            </p>
            <h2
              id="collection-heading"
              className="font-abhaya text-4xl font-semibold leading-tight text-patisserie-cocoa sm:text-5xl"
            >
              A few from our collection
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-patisserie-cocoa/80">
              Explore handcrafted designs from the Connie de Café cake collection.
            </p>
          </div>
          <Link
            to="/cakecatalog"
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-patisserie-rose px-5 py-2.5 text-sm font-semibold text-patisserie-cocoa transition-colors hover:bg-patisserie-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-patisserie-rose-strong sm:self-auto"
          >
            View all cakes
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-[#754B45]/8 bg-white p-3"
                aria-hidden="true"
              >
                <div className="aspect-[4/3] animate-pulse rounded-xl bg-[#F5E5E2]" />
                <div className="mt-4 h-5 w-2/3 animate-pulse rounded bg-[#F5E5E2]" />
                <div className="mt-3 h-4 w-1/4 animate-pulse rounded bg-[#F5E5E2]" />
              </div>
            ))}
          </div>
        ) : hasError ? (
          <div className="rounded-2xl border border-[#754B45]/10 bg-white px-6 py-10 text-center">
            <p className="text-[#754B45]">
              We couldn&apos;t load the cake collection just now. Please try the full catalog.
            </p>
            <Link
              to="/cakecatalog"
              className="mt-4 inline-flex min-h-11 items-center rounded-full bg-patisserie-rose-strong px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-patisserie-cocoa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-patisserie-rose-strong"
            >
              Browse the catalog
            </Link>
          </div>
        ) : cakes.length === 0 ? (
          <div className="rounded-2xl border border-[#754B45]/10 bg-white px-6 py-10 text-center text-[#754B45]/75">
            The cake collection is being updated. Please check back soon.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cakes.map((cake) => (
              <Link
                key={cake.cake_id}
                to="/cakecatalog"
                state={{ selectedCakeId: cake.cake_id }}
                aria-label={`View ${cake.name} details`}
                className="group rounded-2xl border border-[#754B45]/10 bg-white p-3 shadow-sm transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#754B45]"
              >
                <div className="overflow-hidden rounded-xl bg-[#F5E5E2]">
                  <img
                    src={cake.publicUrl}
                    alt={cake.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    onError={(event) => {
                      event.currentTarget.src = "/saved-cake.png";
                    }}
                  />
                </div>
                <div className="flex items-start justify-between gap-3 px-2 pb-2 pt-4">
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-[#754B45]">{cake.name}</h3>
                    <p className="mt-1 text-sm text-[#754B45]/65">
                      {[cake.theme, cake.tier ? `${cake.tier} tier` : null]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                  <span className="shrink-0 font-semibold text-[#754B45]">
                    ₱{Number(cake.price).toLocaleString("en-PH")}
                  </span>
                </div>
                <span className="sr-only">Open cake details in the catalog</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CakeCollection;
