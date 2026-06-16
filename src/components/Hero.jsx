"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Star,
} from "lucide-react";
import CountUp from "react-countup";

export default function HeroSection() {
  const stats = [
    {
      value: 150,
      prefix: "$",
      suffix: "M+",
      label: "Recovered For Clients",
    },
    {
      value: 5000,
      suffix: "+",
      label: "Cases Handled",
    },
    {
      value: 20,
      suffix: "+",
      label: "Years Experience",
    },
  ];

  const trustItems = [
    "4.9★ Client Rating",
    "No Win, No Fee",
    "Available 24/7",
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=2400&q=80"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#08111f]/80" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-white" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                Trusted By Dallas Injury Victims Since 2004
              </span>
            </div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-5xl"
            >
              Over <span className="text-[#D4B06A]">$150 Million</span>
              <br />
              Recovered For Injury Victims.
              <br />
              Pay Nothing Unless We Win.
            </motion.h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/90">
              Car Accident • Truck Accident • Workplace Injury • Slip & Fall
<br/>
Free Case Review. <br/>
No Fee Unless We Win.<br/>
Available 24/7.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  {item.includes("Rating") ? (
                    <Star className="h-4 w-4 text-[#D4B06A]" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4 text-[#D4B06A]" />
                  )}

                  <span className="text-sm font-medium text-white/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                aria-label="Get your free case review"
                className="group inline-flex items-center justify-center rounded-md bg-[#D4B06A] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5"
              >
                Get My Free Case Review

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+12145550198"
                aria-label="Call our Dallas injury attorneys"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md"
              >
                <Phone className="h-4 w-4" />
                (214) 555-0198
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/30 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <ul className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <div className="text-4xl font-bold text-white">
                    {stat.prefix}

                    <CountUp
                      end={stat.value}
                      duration={2}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />

                    {stat.suffix}
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                    {stat.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}