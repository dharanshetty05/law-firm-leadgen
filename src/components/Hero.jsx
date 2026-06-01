"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,39,68,0.08),transparent_35%)]" />

      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#0F2744]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Trust Bar */}

        <div className="flex justify-center pt-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-[#0F2744]" />
            <span className="text-sm font-medium text-slate-700">
              Trusted Personal Injury Attorneys Serving Dallas Since 2003
            </span>
          </div>
        </div>

        {/* Main Grid */}

        <div className="grid items-center gap-20 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          {/* Left Side */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#0F2744]">
                Dallas Personal Injury Law Firm
              </p>

              <h1 className="max-w-[12ch] text-5xl font-bold leading-[0.9] tracking-tight text-slate-950 sm:text-6xl lg:text-8xl">
                Serious Injury.
                <br />
                Serious
                <br />
                Results.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                For over two decades, we've helped injury victims stand up to
                insurance companies and recover the compensation they deserve.
                No upfront fees. No unnecessary delays.
              </p>

              {/* CTA */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#0F2744]
                    px-8
                    py-4
                    font-semibold
                    text-white
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Schedule Free Consultation

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+12145550198"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    px-8
                    py-4
                    font-semibold
                    text-slate-900
                    transition-all
                    hover:bg-slate-50
                  "
                >
                  <Phone className="mr-2 h-4 w-4" />
                  (214) 555-0198
                </a>
              </div>

              {/* Trust Metrics */}

              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-slate-950">
                    $150M+
                  </div>

                  <div className="mt-1 text-sm text-slate-500">
                    Recovered For Clients
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <div className="text-3xl font-bold text-slate-950">
                    5,000+
                  </div>

                  <div className="mt-1 text-sm text-slate-500">
                    Cases Handled
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <div className="text-3xl font-bold text-slate-950">
                    20+
                  </div>

                  <div className="mt-1 text-sm text-slate-500">
                    Years Experience
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image Card */}

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
              <img
                src="/images/lawyers-meeting.png"
                alt="Personal Injury Attorneys"
                className="w-full object-cover"
              />
            </div>

            {/* Results Card */}

            <div className="absolute -left-8 top-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="text-4xl font-bold text-[#0F2744]">
                $150M+
              </div>

              <div className="mt-2 text-sm text-slate-500">
                Recovered For Injury Victims
              </div>
            </div>

            {/* Review Card */}

            <div className="absolute -right-8 bottom-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
              </div>

              <div className="mt-3 text-2xl font-bold text-slate-950">
                4.9/5
              </div>

              <div className="text-sm text-slate-500">
                Based on 600+ Reviews
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}