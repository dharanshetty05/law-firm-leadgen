"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const practiceAreas = [
  {
    title: "Car Accidents",
    description:
      "Injured by a distracted, reckless, or negligent driver? We help victims recover compensation for medical bills, lost income, and more.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Truck Accidents",
    description:
      "Serious collisions involving commercial trucks often require aggressive legal action against powerful companies and insurers.",
    image:
      "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Workplace Injuries",
    description:
      "If unsafe conditions or third-party negligence caused your injury, we can help you explore your legal options.",
    image:
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Motorcycle Accidents",
    description:
      "We fight for injured riders seeking compensation for medical expenses, lost wages, and long-term recovery.",
    image:
      "https://images.pexels.com/photos/12002262/pexels-photo-12002262.jpeg?_gl=1*1i8hmnl*_ga*MTgxMTM0OTk1OC4xNzc4ODQ2Mzc0*_ga_8JE65Q40S6*czE3ODA0NTc5MDUkbzIkZzEkdDE3ODA0NTg1NjgkajM1JGwwJGgw",
  },
  {
    title: "Wrongful Death",
    description:
      "Helping families seek justice and financial recovery after the loss of a loved one caused by negligence.",
    image:
      "https://images.pexels.com/photos/10485635/pexels-photo-10485635.jpeg?_gl=1*scd8iv*_ga*MTgxMTM0OTk1OC4xNzc4ODQ2Mzc0*_ga_8JE65Q40S6*czE3ODA0NTc5MDUkbzIkZzEkdDE3ODA0NTgxNjgkajM3JGwwJGgw",
  },
  {
    title: "Slip & Fall Injuries",
    description:
      "Property owners have a duty to maintain safe conditions. We help hold negligent parties accountable.",
    image:
      "https://images.pexels.com/photos/8961551/pexels-photo-8961551.jpeg?_gl=1*ei1rsw*_ga*MTgxMTM0OTk1OC4xNzc4ODQ2Mzc0*_ga_8JE65Q40S6*czE3ODA0NTc5MDUkbzIkZzEkdDE3ODA0NTgyODMkajMkbDAkaDA.",
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="relative bg-[#08111f] py-20 md:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4B06A]/10 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
            Practice Areas
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
            Cases We Handle
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/65">
            If you've been injured because of someone else's negligence, our
            attorneys are ready to help you pursue the compensation you deserve.
          </p>
        </div>

        {/* Practice Area Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#05070B] to-transparent" />
              </div>

              {/* Content */}
              <div className="flex min-h-[240px] flex-col p-8">
                <h3 className="text-2xl font-bold tracking-[-0.02em] text-white">
                  {area.title}
                </h3>

                <p className="mt-4 flex-1 text-base leading-relaxed text-white/65">
                  {area.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#D4B06A]">
                    Learn More
                  </span>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-full border border-[#D4B06A]/30 p-3 text-[#D4B06A]"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-all duration-300 group-hover:border-[#D4B06A]/60" />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-24 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-10 md:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,176,106,0.12),transparent_70%)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl">
              Not Sure If You Have A Case?
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              Speak with an attorney today for a free consultation. We'll review
              your situation, explain your options, and help you understand the
              next steps.
            </p>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
             className="group mt-10 inline-flex items-center gap-2 rounded-md bg-[#D4B06A] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-[2px]"
            >
              Get Free Consultation
              <ArrowUpRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}