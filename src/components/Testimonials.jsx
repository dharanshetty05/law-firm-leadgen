"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    role: "Car Accident Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Harrison & Cole kept me informed throughout the entire process and fought tirelessly for my case. The communication was outstanding and the outcome exceeded my expectations.",
  },
  {
    name: "Sarah T.",
    role: "Workplace Injury Client",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Every phone call was returned quickly and I always knew what was happening with my case. Their responsiveness gave me confidence during a difficult time.",
  },
  {
    name: "David P.",
    role: "Truck Accident Client",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote:
      "The insurance company initially offered far less than what my case was worth. Harrison & Cole negotiated aggressively and secured an excellent settlement.",
  },
  {
    name: "Jennifer M.",
    role: "Slip & Fall Client",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "I was treated with respect from day one. The team was professional, responsive, and genuinely cared about my recovery.",
  },
];

export default function Testimonials() {
  const featured = testimonials[0];
  const supporting = testimonials.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#08111f] py-24 md:py-32">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4B06A]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Client Testimonials
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Trusted By
            <span className="text-[#D4B06A]">
              {" "}
              Dallas Injury Victims
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            See why clients across Dallas trust Harrison & Cole to guide
            them through some of the most difficult moments of their lives.
          </p>
        </motion.div>

        {/* Rating Block */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="flex justify-center gap-1 text-[#D4B06A]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-current"
              />
            ))}
          </div>

          <div className="mt-4 text-6xl font-bold tracking-[-0.04em] text-white">
            4.9
          </div>

          <p className="mt-3 text-white/70">
            Based on 500+ verified client reviews
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm font-medium text-white/50">
            <span>500+ Reviews</span>
            <span>20+ Years Experience</span>
            <span>$150M+ Recovered</span>
          </div>
        </motion.div>

        {/* Featured Testimonial */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-20
            rounded-3xl
            border
            border-[#D4B06A]/20
            bg-[#0d1828]
            p-10
            lg:p-14
          "
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <img
              src={featured.image}
              alt={featured.name}
              className="
                h-20
                w-20
                rounded-full
                object-cover
                ring-2
                ring-[#D4B06A]/20
              "
            />

            <div className="flex-1">
              <div className="flex gap-1 text-[#D4B06A]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current"
                  />
                ))}
              </div>

              <div className="mt-8 h-px w-24 bg-[#D4B06A]" />

              <blockquote className="mt-8 text-2xl font-semibold leading-relaxed text-white">
                "{featured.quote}"
              </blockquote>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="text-lg font-semibold text-white">
                  {featured.name}
                </div>

                <div className="mt-1 text-white/60">
                  {featured.role}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting Reviews */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {supporting.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#0d1828]
                p-6
              "
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>

                  <div className="text-sm text-white/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-1 text-[#D4B06A]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                  />
                ))}
              </div>

              <p className="mt-5 leading-7 text-white/75">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}