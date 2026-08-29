import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className="w-[250px]" tiltMaxAngleX="10" tiltMaxAngleY="10">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="premium-card w-full rounded-[22px] p-[1px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="dark:bg-slate-950/80 bg-white/10 rounded-[22px] py-6 px-6 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <div className="w-16 h-16 object-contain relative flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/70 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.2)]">{icon}</div>
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[20px] font-bold text-center w-[80%]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
