import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-28 md:py-40 bg-gradient-navy overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="font-mono-luxe text-[10px] text-accent">Visit · Reserve</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05]">
            Take a seat. <br />
            <span className="italic text-gradient-silver">We're expecting you.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto map-stylized border border-border overflow-hidden"
          >
            {/* Stylised roads */}
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 600 500">
              <defs>
                <linearGradient id="road" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(220 18% 28%)" />
                  <stop offset="100%" stopColor="hsl(220 18% 22%)" />
                </linearGradient>
              </defs>
              <path d="M 0 320 L 600 180" stroke="url(#road)" strokeWidth="14" fill="none" />
              <path d="M 80 0 L 240 500" stroke="url(#road)" strokeWidth="10" fill="none" />
              <path d="M 0 100 L 600 400" stroke="hsl(220 18% 22%)" strokeWidth="6" fill="none" opacity="0.7" />
              <path d="M 380 0 L 480 500" stroke="hsl(220 18% 22%)" strokeWidth="6" fill="none" opacity="0.6" />
              {/* Edgware Rd label */}
              <text x="320" y="240" fill="hsl(0 0% 60%)" fontSize="11" fontFamily="Inter" letterSpacing="3" transform="rotate(-13 320 240)">
                EDGWARE ROAD
              </text>
            </svg>

            {/* Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                <div className="relative h-4 w-4 rounded-full bg-accent ring-4 ring-background" />
              </div>
              <div className="mt-4 bg-background/95 backdrop-blur-md border border-accent/40 px-4 py-2 shadow-luxe">
                <div className="font-display text-sm">London Barber</div>
                <div className="font-mono-luxe text-[9px] text-muted-foreground mt-1">371-373 Edgware Rd</div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 font-mono-luxe text-[9px] text-silver/60">
              W2 1BS · LONDON
            </div>
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="lg:col-span-2 bg-surface border border-border p-8 md:p-10 flex flex-col"
          >
            <div className="space-y-8 flex-1">
              <Item
                icon={<MapPin size={16} />}
                label="Address"
                value={<>371-373 Edgware Rd<br />London W2 1BS, United Kingdom</>}
              />
              <div className="silver-divider opacity-40" />
              <Item
                icon={<Clock size={16} />}
                label="Hours"
                value={
                  <>
                    Open Daily · 10 AM — 10 PM
                    <span className="block mt-1 text-accent font-mono-luxe text-[10px]">
                      ● Closes at 10 PM
                    </span>
                  </>
                }
              />
              <div className="silver-divider opacity-40" />
              <Item
                icon={<Phone size={16} />}
                label="Telephone"
                value={
                  <a href="tel:+447501099583" className="hover:text-accent transition-colors">
                    +44 7501 099583
                  </a>
                }
              />
            </div>

            <a
              href="tel:+447501099583"
              className="mt-10 group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-6 py-4 font-mono-luxe text-[11px] hover:bg-silver-bright transition-all duration-500"
            >
              Book an Appointment
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Item = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex gap-4">
    <div className="h-9 w-9 shrink-0 border border-accent/50 text-accent flex items-center justify-center">
      {icon}
    </div>
    <div>
      <div className="font-mono-luxe text-[9px] text-muted-foreground mb-2">{label}</div>
      <div className="text-silver leading-relaxed">{value}</div>
    </div>
  </div>
);
