"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] py-24 md:py-32">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4B06A]/5 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#0d1828]
            px-8
            py-16
            text-center
            md:px-16
            md:py-20
          "
        >
          {/* Subtle Accent */}

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4B06A]/50 to-transparent" />

          {/* Eyebrow */}

          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Free Consultation Available
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Speak With An
            <span className="text-[#D4B06A]"> Attorney Today</span>
          </h2>

          {/* Supporting Text */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Get a free consultation and learn your legal options. Our team is
            ready to review your case, answer your questions, and help you take
            the next step toward securing the compensation you deserve.
          </p>

          {/* Trust Points */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <span>✓ Free Consultation</span>
            <span>✓ No Win, No Fee</span>
            <span>✓ Available 24/7</span>
          </div>

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-[#D4B06A]
                px-8
                py-4
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-[#c9a55e]
                hover:-translate-y-0.5
              "
            >
              Schedule Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="tel:+12145550198"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                border
                border-white/15
                bg-white/5
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-white/25
                hover:bg-white/10
              "
            >
              <Phone className="h-4 w-4" />
              (214) 555-0198
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}