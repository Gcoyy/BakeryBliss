import { motion } from "framer-motion"

<<<<<<< HEAD
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
=======
const CakeCustom = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_#F2EFE8_0%,_#DFDAC7_51%,_#A8A599_100%)] h-auto py-20">
      <section className="flex flex-col items-center text-center px-4 py-16">
        {/* Title */}
        <h2 className="text-2xl md:text-5xl font-bold tracking-widest py-10 pb-30">
          How to create your cake?
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-gray-700 mb-12 text-base md:text-3xl text-left">
          Connie de Cafe's got you covered! With our drag-and-drop customization tool,
          you can bring your cake ideas to life — and see the magic happen in <span className="font-bold">REAL TIME!</span>
        </p>

        {/* Cake image with hotspots */}
        <div className="relative w-full max-w-4xl p-11">
          <img src="/Section 3.png" alt="Cake" className="w-full mx-auto" />

          {/* Button positions */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            viewport={{ once: true, amount: 0.5 }} // only plays once when 50% in view
            className="absolute top-[18%] left-[0%] text-gray-800 px-8 py-1.5 rounded-full text-2xl shadow-md tracking-[0.15em] max-w-xs w-auto text-left bg-gradient-to-r from-white/60 to-transparent text-[#3A3A3A] border-4 border-[#82171C] backdrop-filter backdrop-blur-[2px] font-semibold">
            Add Frosting <br />& Fillings
          </motion.button>


          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            viewport={{ once: true, amount: 0.5 }} // only plays once when 50% in view
            className="absolute top-[10%] right-[5%] text-gray-800 px-8 py-1.5 rounded-full text-2xl shadow-md tracking-[0.15em] max-w-xs w-auto text-left bg-gradient-to-l from-white/60 to-transparent text-[#3A3A3A] border-4 border-[#82171C] backdrop-filter backdrop-blur-[2px] font-semibold"
          >
            Add Decorations <br />& Toppings
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            viewport={{ once: true, amount: 0.5 }} // only plays once when 50% in view
            className="absolute top-[42%] left-[-8%] text-gray-800 px-8 py-1.5 rounded-full text-2xl shadow-md tracking-[0.15em] max-w-fit w-auto text-left bg-gradient-to-r from-white/60 to-transparent text-[#3A3A3A] border-4 border-[#DFAD56]/53 backdrop-filter backdrop-blur-[2px] font-semibold">
            Choose Cake <br />Flavor
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            viewport={{ once: true, amount: 0.5 }} // only plays once when 50% in view
            className="absolute top-[42%] right-[-8%] text-gray-800 px-8 py-1.5 rounded-full text-2xl shadow-md tracking-[0.15em] max-w-fit w-auto text-left bg-gradient-to-l from-white/60 to-transparent text-[#3A3A3A] border-4 border-[#DFAD56]/53 transition-transform hover:scale-115 duration-600 delay-100 backdrop-filter backdrop-blur-[2px] font-semibold">
            Choose Cake <br />Layers
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            viewport={{ once: true, amount: 0.5 }} // only plays once when 50% in view
            className="absolute bottom-[20%] left-[-7%] text-gray-800 px-8 py-1.5 rounded-full text-2xl shadow-md tracking-[0.15em] max-w-fit w-auto text-left bg-gradient-to-r from-white/60 to-transparent text-[#3A3A3A] border-4 border-[#DFAD56]/53 transition-transform hover:scale-115 duration-600 delay-100 backdrop-filter backdrop-blur-[2px] font-semibold">
            Choose Cake <br />Shape
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            viewport={{ once: true, amount: 0.5 }} // only plays once when 50% in view
            className="absolute bottom-[20%] right-[-12%] text-gray-800 px-8 py-1.5 rounded-full text-2xl shadow-md tracking-[0.15em] max-w-fit w-auto text-left bg-gradient-to-l from-white/60 to-transparent text-[#3A3A3A] border-4 border-[#DFAD56]/53 transition-transform hover:scale-115 duration-600 delay-100 backdrop-filter backdrop-blur-[2px] font-semibold">
            Choose Cake <br />Size
          </motion.button>
        </div>
      </section>


>>>>>>> parent of fc1a11f (Updated web responsiveness and visuals)
    </div>
  )
}

export default CakeCustom;