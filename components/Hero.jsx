import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "@/utils/motion";
import { heroTexts } from "@/constants";

function Hero({ loading, isMobile }) {
  return (
    <section
      className={`relative w-full h-[100svh] md:max-h-[800px] max-h-[600px] mx-auto flex flex-col`}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto paddingX flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView={!loading && "show"}
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-slate-300/80">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            software developer / full stack engineer
          </div>
          <h1 className={`heroHeadText`}>
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-violet-200 bg-clip-text text-transparent">Bhavesh</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300/80 font-medium tracking-[0.18em] uppercase">
            I build scalable products, clean APIs, and user experiences that solve real problems.
          </p>
          <p className={`heroSubText mt-4 tracking-wide`}>
            <TypeAnimation
              sequence={heroTexts}
              // preRenderFirstString={true}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['C#', 'ASP.NET Core', 'React', 'Node.js', 'SQL', 'TypeScript'].map((item) => (
              <span
                key={item}
                className="code-pill"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              { label: 'Experience', value: '3+ yrs' },
              { label: 'Focus', value: 'Full Stack' },
              { label: 'Stack', value: '.NET / React' },
            ].map((stat) => (
              <div key={stat.label} className="premium-stat">
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{stat.label}</span>
                <strong className="mt-2 block text-lg font-semibold text-white">{stat.value}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", "spring")}
        initial="hidden"
        whileInView={!loading && "show"}
        viewport={{ once: true, amount: 0.25 }}
        className="w-full md:h-[800px] sm:h-[300px] h-[200px] absolute md:top-[170px] sm:top-[280px] top-[350px]"
      >
        <ComputersCanvas isMobile={isMobile} />
      </motion.div>

      <div className="absolute xs:bottom-10 bottom-32 left-1/2 justify-center items-center z-20 hidden md:flex">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#aaa6c3] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
