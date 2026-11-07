import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
const Hero = () => (
  <section
    id="home"
    className="home-hero relative flex min-h-[600px] h-[min(78svh,780px)] items-center overflow-hidden"
    aria-labelledby="home-heading"
      style={{
        backgroundImage: 'url("/images/strawberry-hero.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#453735",
        backgroundBlendMode: "multiply",
      }}
  >
    <div
      className="absolute inset-0"
      style={{ background: "linear-gradient(90deg, rgba(58,36,33,0.94) 0%, rgba(58,36,33,0.78) 48%, rgba(58,36,33,0.2) 100%)" }}
      aria-hidden="true"
    />
    <div className="relative mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16">
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
=======
const Hero = () => {
  const navigate = useNavigate();

  const handleCustomizeClick = () => {
    navigate('/cakecustomization');
  };

  return (
    <section className="bg-[url('/Hero.png')] bg-cover bg-center w-full h-[120vh] flex items-center justify-start" id="home">
      <div className="flex flex-col items-center justify-center h-full text-center space-y-15 max-w-2xl w-full px-8">
        <h1 className="text-[#EBD187] text-8xl font-abhaya ">Connie de Café</h1>

        <p className="font-bold text-white/76 text-3xl">Where every slice begins with your imagination</p>

        <div className="flex items-center justify-center mt-20">
          <div className="group relative flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: .3,
                ease: "easeInOut"
              }}
              viewport={{ once: true, amount: 0.5 }}
              onClick={handleCustomizeClick}
              className="bg-gradient-to-r from-white/60 to-transparent text-white px-6 py-4 rounded-full hover:bg-[#FFECB5] hover:text-gray-800 transition duration-300 tracking-widest text-2xl font-bold shadow-md">
              Customize Now
            </motion.button>
            <img
              src="/g_arrow.png"
              alt="arrow"
              className="
                absolute 
                left-full 
                top-[120%]
                translate-y-0
                opacity-0 
                group-hover:top-1/2 
                group-hover:-translate-y-1/2
                group-hover:opacity-100 
                transition-all 
                duration-500 
                ease-in-out 
                ml-2
              "
            />
          </div>
>>>>>>> parent of fc1a11f (Updated web responsiveness and visuals)
        </div>
      </div>
    </section>
  )
}

export default Hero;