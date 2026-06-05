"use client";

import { motion } from "framer-motion";

const results = [
  {
    amount: "$2.4M",
    title: "Commercial Truck Accident",
  },
  {
    amount: "$1.8M",
    title: "Workplace Injury",
  },
  {
    amount: "$950K",
    title: "Motorcycle Accident",
  },
  {
    amount: "$700K",
    title: "Slip & Fall Injury",
  },
];

export default function Results() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] py-24 md:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4B06A]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Case Results
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Real <span className="text-[#D4B06A]"> Results </span> 
            For Real <span className="text-[#D4B06A]"> Clients</span>
          </h2>

          <p className="mt-6 text-md leading-8 text-white/75">
            Our attorneys have recovered millions of dollars for injury victims
            and their families through skilled negotiation and aggressive
            representation.
          </p>
        </motion.div>

        {/* Results Row */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-[#0d1828]
                p-8
                text-center
                transition-all
                duration-300
                hover:border-[#D4B06A]/50
              "
            >
              <div className="text-6xl font-bold tracking-[-0.04em] text-[#D4B06A]">
                {result.amount}
              </div>

              <div className="mt-6 h-px bg-white/10" />

              <h3 className="mt-6 text-xl font-bold leading-snug text-white">
                {result.title}
              </h3>

              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/25">
                Settlement
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}