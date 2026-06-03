"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  UserCheck,
  BadgeDollarSign,
  Scale,
  Users,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Proven Results",
    description:
      "Over $150 million recovered and more than 5,000 cases handled across a wide range of injury claims.",
  },
  {
    icon: UserCheck,
    title: "Personalized Representation",
    description:
      "Every case receives dedicated attention, clear communication, and a legal strategy tailored to your situation.",
  },
  {
    icon: BadgeDollarSign,
    title: "No Win, No Fee",
    description:
      "You pay nothing unless we successfully recover compensation on your behalf.",
  },
  {
    icon: Scale,
    title: "Aggressive Negotiation",
    description:
      "We stand up to insurance companies and fight aggressively for the maximum compensation available.",
  },
  {
    icon: Users,
    title: "Dedicated Legal Team",
    description:
      "Our attorneys and support staff work together to guide you through every step of the legal process.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] py-24 md:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4B06A]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 lg:col-span-2 h-fit"
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                Why Choose Harrison & Cole
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
              Trusted Advocates For Injury Victims Across Dallas
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-white/75">
              For more than 20 years, Harrison & Cole has helped injury victims
              secure the compensation they deserve through experienced
              representation, personalized attention, and relentless advocacy.
            </p>

            {/* Trust Metrics */}
            <div className="mt-10 space-y-5 border-l border-white/10 pl-6">
              <div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Years Experience
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div>
                <div className="text-2xl font-bold text-white">$150M+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Recovered
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div>
                <div className="text-2xl font-bold text-white">5,000+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Cases Handled
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
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
                    bg-white/[0.02]
                    p-8
                    transition-all
                    duration-300
                    hover:border-[#D4B06A]/50
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D4B06A]/10
                      text-[#D4B06A]
                      transition-all
                      duration-300
                      group-hover:bg-[#D4B06A]/20
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-white">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto
            mt-24
            max-w-5xl
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            p-10
            text-center
            md:p-14
          "
        >
          <h3 className="text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl">
            Ready To Discuss Your Case?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Schedule a free consultation today and learn how our attorneys can
            help protect your rights and pursue the compensation you deserve.
          </p>

          <a
            href="#contact"
            className="
              group
              mt-10
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
              hover:-translate-y-[2px]
            "
          >
            Get Free Consultation

            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}