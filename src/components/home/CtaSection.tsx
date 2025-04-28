
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div className="container relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        type: "spring",
        stiffness: 50
      }} viewport={{
        once: true,
        margin: "-100px"
      }} className="max-w-3xl mx-auto text-center bg-card p-10 rounded-2xl shadow-xl border border-primary/10 backdrop-blur-sm">
          <h2 className="mb-4 text-primary text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-lg text-secondary mb-8">
            Book a free 30-minute discovery call with our experts to explore how 
            our AI solutions can address your specific challenges.
          </p>
          <motion.div whileHover={{
          scale: 1.03
        }} whileTap={{
          scale: 0.98
        }}>
            <Link to="/contact" className="bg-primary text-secondary px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-2 active:shadow-md active:translate-y-0 transition-all inline-block relative overflow-hidden group">
              <span className="relative z-10">Schedule a Call</span>
              <span className="absolute -inset-full top-0 right-0 w-full h-full bg-gradient-to-l from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
