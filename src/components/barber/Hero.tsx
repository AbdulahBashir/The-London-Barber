import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-barbershop.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury British barbershop interior with leather chair"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-accent" />
          <span className="font-mono-luxe text-[10px] text-accent">Established · London W2</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.35 }}
          className="font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.92] tracking-tight max-w-5xl"
        >
          London <span className="italic text-gradient-silver">Barber</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.6 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-silver/90 font-light leading-relaxed"
        >
          The Ultimate Grooming Experience in the Heart of London.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-mono-luxe text-[11px] hover:bg-silver-bright transition-all duration-500"
          >
            Book an Appointment
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>

          {/* Rating badge */}
          <div className="flex items-center gap-4 px-5 py-3 border border-border/80 bg-surface/60 backdrop-blur-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <div className="silver-divider w-px h-8" style={{ background: 'hsl(var(--border))' }} />
            <div className="leading-tight">
              <div className="font-display text-xl text-foreground">4.9</div>
              <div className="font-mono-luxe text-[9px] text-muted-foreground">197+ Reviews</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom marquee detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3"
        >
          <div className="h-px w-10 bg-silver/40" />
          <span className="font-mono-luxe text-[10px] text-silver/70">Scroll</span>
          <div className="h-px w-10 bg-silver/40" />
        </motion.div>
      </div>
    </section>
  );
};
