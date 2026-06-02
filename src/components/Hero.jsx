"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
  const stats = [
    {
      value: "$150M+",
      label: "Recovered For Clients",
    },
    {
      value: "5,000+",
      label: "Cases Handled",
    },
    {
      value: "20+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#08111f]/75" />
      </div>

      {/* Content */}

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-white" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                Trusted Dallas Injury Attorneys Since 2004
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Injured In An
              Accident?
              <br />
              <span className="text-[#D4B06A]">
                Get The Compensation
              </span>
              <br />
              You Deserve.
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/90">
              Harrison & Cole helps injury victims recover compensation
              after serious accidents. No upfront fees. No fee unless
              we win your case.
            </p>

            {/* Trust Row */}

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {[
                "Free Consultation",
                "No Win, No Fee",
                "Available 24/7",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#D4B06A]" />

                  <span className="text-sm font-medium text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-[#D4B06A]
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:translate-y-[-2px]
                "
              >
                Get Free Consultation

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+12145550198"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  border
                  border-white/20
                  bg-white/10
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                "
              >
                <Phone className="h-4 w-4" />
                (214) 555-0198
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}

        <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-white">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}