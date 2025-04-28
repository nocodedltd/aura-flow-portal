
import { motion } from "framer-motion";

export default function StatsSection() {
  const statVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 60
      }
    })
  };

  return (
    <section id="stats-section" className="relative py-16 overflow-hidden">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div custom={0} variants={statVariants} className="bg-card p-8 rounded-xl text-center border border-primary/10 shadow-lg relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 flex items-center justify-center">
                <motion.span initial={{
                opacity: 0,
                scale: 0.5
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.3,
                duration: 0.8,
                type: "spring"
              }} viewport={{
                once: true
              }}>
                  100+
                </motion.span>
              </div>
              <p className="text-secondary text-lg">Projects Delivered</p>
            </div>
          </motion.div>
          
          <motion.div custom={1} variants={statVariants} className="bg-card p-8 rounded-xl text-center border border-primary/10 shadow-lg relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 flex items-center justify-center">
                <motion.span initial={{
                opacity: 0,
                scale: 0.5
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.4,
                duration: 0.8,
                type: "spring"
              }} viewport={{
                once: true
              }}>
                  120,000+
                </motion.span>
              </div>
              <p className="text-secondary text-lg">Hours Saved</p>
            </div>
          </motion.div>
          
          <motion.div custom={2} variants={statVariants} className="bg-card p-8 rounded-xl text-center border border-primary/10 shadow-lg relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 flex items-center justify-center">
                <motion.span initial={{
                opacity: 0,
                scale: 0.5
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.5,
                duration: 0.8,
                type: "spring"
              }} viewport={{
                once: true
              }}>1,000s</motion.span>
              </div>
              <p className="text-secondary text-lg">Processes Automated</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
