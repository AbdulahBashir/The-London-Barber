import { motion } from "framer-motion";
import haircut from "@/assets/service-haircut.jpg";
import shave from "@/assets/service-shave.jpg";
import tools from "@/assets/service-tools.jpg";
import scalp from "@/assets/service-scalp.jpg";

const services = [
  {
    no: "01",
    title: "Precision Haircuts & Styling",
    desc: "Sharp fades, tailored crops and signature scissor work — engineered to your face shape.",
    image: haircut,
    price: "from £35",
  },
  {
    no: "02",
    title: "Traditional Shaves & Beard Sculpting",
    desc: "Hot towel ritual with a cut-throat razor finish, followed by precision beard sculpting.",
    image: shave,
    price: "from £30",
  },
  {
    no: "03",
    title: "Signature Nose & Ear Waxing",
    desc: "A clean, refined detail. Quick, professional, and entirely painless in expert hands.",
    image: tools,
    price: "from £15",
  },
  {
    no: "04",
    title: "Scalp Treatments",
    desc: "Restorative scalp therapy with premium tonics — leaves you sharper, lighter, refreshed.",
    image: scalp,
    price: "from £40",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="font-mono-luxe text-[10px] text-accent">Our Craft</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05]">
            Time-honoured services, <br />
            <span className="italic text-gradient-silver">refined for the modern gentleman.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.no}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden bg-surface border border-border hover-lift cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute top-5 left-5 font-mono-luxe text-[10px] text-accent">{s.no}</div>
                <div className="absolute top-5 right-5 font-mono-luxe text-[10px] text-silver/80">{s.price}</div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4 group-hover:text-accent transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 silver-divider opacity-40" />
                <div className="mt-5 flex items-center justify-between font-mono-luxe text-[10px]">
                  <span className="text-silver/70">Reserve a chair</span>
                  <span className="text-accent transition-transform duration-500 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
