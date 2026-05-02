import { motion } from "framer-motion";
import gentleman from "@/assets/about-gentleman.jpg";

export const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-gradient-navy overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={gentleman}
              alt="A well-groomed British gentleman portrait"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-accent/20" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-background border border-border px-6 py-5 shadow-luxe">
            <div className="font-display text-4xl text-accent leading-none">15+</div>
            <div className="font-mono-luxe text-[9px] text-muted-foreground mt-2">Years on Edgware Rd</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="font-mono-luxe text-[10px] text-accent">The House</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
            A quiet sanctuary <br />
            <span className="italic text-gradient-silver">on Edgware Road.</span>
          </h2>
          <p className="mt-8 text-lg text-silver/80 leading-relaxed font-light">
            London Barber is a traditional grooming house built around a single principle:
            the unhurried craft of the cut. Polished leather, brushed silver, and the steady
            rhythm of the straight razor.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our master barbers are trained in classical British technique, with an eye on
            contemporary style. Every appointment is a private ritual — never rushed, always exact.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { v: "4.9★", l: "Rated" },
              { v: "197+", l: "Reviews" },
              { v: "10–10", l: "Daily" },
            ].map((s) => (
              <div key={s.l} className="border-l border-accent/40 pl-4">
                <div className="font-display text-3xl text-foreground">{s.v}</div>
                <div className="font-mono-luxe text-[9px] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
