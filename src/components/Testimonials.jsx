"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Harrison & Cole kept me informed throughout the entire process and fought tirelessly for my case. The communication was outstanding, and the outcome exceeded my expectations.",
    name: "Michael R.",
    role: "Car Accident Client",
    highlight: "Trust & Communication",
  },
  {
    quote:
      "Every phone call was returned quickly, and I always knew what was happening with my case. Their responsiveness gave me confidence during a difficult time.",
    name: "Sarah T.",
    role: "Workplace Injury Client",
    highlight: "Responsiveness",
  },
  {
    quote:
      "The insurance company initially offered far less than what my case was worth. Harrison & Cole negotiated aggressively and secured an excellent settlement.",
    name: "David P.",
    role: "Truck Accident Client",
    highlight: "Results",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] py-24 md:py-32">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute right-1/2 top-0 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-[#D4B06A]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Client Testimonials
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            What Our
            <span className="text-[#D4B06A]"> Clients</span>
            <br />
            Have To Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            Injury victims trust Harrison & Cole to provide clear guidance,
            responsive communication, and relentless advocacy when it matters
            most.
          </p>
        </motion.div>

        {/* Testimonial Layout */}

        <div className="mt-20 grid gap-6 lg:grid-cols-5">
          {/* Featured Testimonial */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              lg:col-span-3
              rounded-3xl
              border
              border-white/10
              bg-[#0d1828]
              p-10
            "
          >
            <div className="flex gap-1 text-[#D4B06A]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-current"
                />
              ))}
            </div>

            <blockquote className="mt-8 text-2xl font-semibold leading-relaxed text-white">
              "{testimonials[0].quote}"
            </blockquote>

            <div className="mt-10 border-t border-white/10 pt-6">
              <div className="text-lg font-semibold text-white">
                {testimonials[0].name}
              </div>

              <div className="mt-1 text-sm text-white/60">
                {testimonials[0].role}
              </div>
            </div>
          </motion.div>

          {/* Side Testimonials */}

          <div className="space-y-6 lg:col-span-2">
            {testimonials.slice(1).map((item, index) => (
              <motion.div
                key={item.name}
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
                  p-8
                "
              >
                <div className="flex gap-1 text-[#D4B06A]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>

                <p className="mt-5 leading-8 text-white/75">
                  "{item.quote}"
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="font-semibold text-white">
                    {item.name}
                  </div>

                  <div className="mt-1 text-sm text-white/60">
                    {item.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}