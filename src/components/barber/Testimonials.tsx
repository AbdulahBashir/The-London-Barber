import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Easily the best barber around! Clean equipment, professional feel, and fantastic service.",
    name: "James Whitford",
    role: "Google Review",
  },
  {
    quote:
      "The hot towel shave is a ritual unlike any other in London. Calm, precise, and absolutely worth it.",
    name: "Aiden Clarke",
    role: "Google Review",
  },
  {
    quote:
      "Walked in for a fade, walked out feeling like a different man. The attention to detail is unmatched.",
    name: "Marcus Holloway",
    role: "Google Review",
  },
  {
    quote:
      "Sophisticated, sharp and never rushed. London Barber has earned a permanent spot in my diary.",
    name: "Oliver Pemberton",
    role: "Google Review",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="container max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="font-mono-luxe text-[10px] text-accent">Word of Mouth</span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <Quote className="mx-auto text-accent/40" size={42} />
        </motion.div>

        <div className="relative mt-10 min-h-[260px] md:min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-3xl md:text-5xl leading-[1.2] italic text-gradient-silver">
                “{r.quote}”
              </p>
              <div className="mt-10 flex flex-col items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <div className="font-mono-luxe text-[10px] text-silver">{r.name}</div>
                <div className="font-mono-luxe text-[9px] text-muted-foreground">{r.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            aria-label="Previous"
            onClick={prev}
            className="h-11 w-11 border border-border hover:border-accent hover:text-accent transition-colors flex items-center justify-center"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to review ${k + 1}`}
                className={`h-px w-8 transition-all ${k === i ? "bg-accent h-[2px]" : "bg-border"}`}
              />
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={next}
            className="h-11 w-11 border border-border hover:border-accent hover:text-accent transition-colors flex items-center justify-center"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
