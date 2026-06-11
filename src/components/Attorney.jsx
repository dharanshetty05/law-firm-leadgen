"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Scale, ArrowRight } from "lucide-react";

const attorneys = [
  {
    name: "James Harrison",
    role: "Founder & Managing Partner",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
    experience: "25+",
    experienceLabel: "Years Experience",
    index: "01",
    education: [
      "J.D., Southern Methodist University Dedman School of Law",
      "B.A., University of Texas at Austin",
    ],
    awards: [
      "Texas Super Lawyers",
      "Top 100 Trial Lawyers",
      "Million Dollar Advocates Forum",
    ],
    memberships: [
      "State Bar of Texas",
      "Texas Trial Lawyers Association",
      "American Association for Justice",
    ],
  },
  {
    name: "Michael Cole",
    role: "Co-Founder & Trial Attorney",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
    experience: "20+",
    experienceLabel: "Years Experience",
    index: "02",
    education: [
      "J.D., Baylor Law School",
      "B.S., Texas A&M University",
    ],
    awards: [
      "Best Lawyers Recognition",
      "Top Trial Lawyers",
      "Rising Stars",
    ],
    memberships: [
      "State Bar of Texas",
      "Dallas Bar Association",
      "American Association for Justice",
    ],
  },
];

const CredentialPill = ({ label }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4B06A]/20 bg-[#D4B06A]/8 px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#D4B06A]">
    <span className="h-1 w-1 shrink-0 rounded-full bg-[#D4B06A]" />
    {label}
  </span>
);

const CredentialGroup = ({ icon: Icon, title, items }) => (
  <div className="group">
    <div className="flex items-center gap-2.5 pb-3 border-b border-white/8">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4B06A]/10">
        <Icon className="h-3.5 w-3.5 text-[#D4B06A]" />
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
        {title}
      </span>
    </div>
    <ul className="mt-3.5 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-white/60"
        >
          <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#D4B06A]/50" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function Attorney() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] py-24 md:py-32">

      {/* Subtle ambient light — matches hero language */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4B06A]/4 blur-[160px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#D4B06A]/3 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Meet The Attorneys
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Experienced Attorneys
            <br />
            Dedicated To
            <span className="text-[#D4B06A]"> Your Recovery</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            For more than two decades, Harrison & Cole has represented
            injury victims across Dallas, helping clients navigate
            complex claims and pursue the compensation they deserve.
          </p>
        </motion.div>

        {/* ── Attorney profiles ── */}
        <div className="mt-24 space-y-6">
          {attorneys.map((attorney, i) => (
            <motion.div
              key={attorney.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {/*
               * ── LAYERED PANEL ──
               * The panel itself is a dark card with a subtle border.
               * Photo overlaps the left edge.
               * Large ghost index number anchors the right bg.
               * Credentials appear as grouped sections in the middle.
               * Awards are rendered as pill chips — not a list.
               */}
              <div className="relative rounded-[28px] border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden">

                {/* Ghost index number — depth layer */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 select-none font-bold leading-none text-white/[0.025]"
                  style={{ fontSize: "clamp(120px, 18vw, 220px)" }}
                >
                  {attorney.index}
                </div>

                {/* Gold top-edge accent line */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4B06A]/40 to-transparent" />

                <div className="relative grid lg:grid-cols-[420px_1fr] xl:grid-cols-[480px_1fr]">

                  {/* ── LEFT: Photo block ── */}
                  <div className="relative">
                    {/* Experience stat — floats over bottom of image */}
                    <div className="absolute bottom-6 left-6 z-10 flex flex-col rounded-2xl border border-white/10 bg-[#08111f]/80 px-5 py-4 backdrop-blur-md">
                      <span className="text-3xl font-bold leading-none tracking-[-0.04em] text-[#D4B06A]">
                        {attorney.experience}
                      </span>
                      <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/50">
                        {attorney.experienceLabel}
                      </span>
                    </div>

                    <img
                      src={attorney.image}
                      alt={attorney.name}
                      className="h-[500px] w-full object-cover object-top lg:h-full lg:min-h-[520px]"
                    />

                    {/* Right-side fade so photo bleeds into content seamlessly */}
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-[#0a131f]" />
                  </div>

                  {/* ── RIGHT: Content block ── */}
                  <div className="flex flex-col justify-center px-8 py-12 lg:pl-10 lg:pr-12 xl:pl-12 xl:pr-16">

                    {/* Name + role */}
                    <div className="mb-8">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4B06A]/70">
                        {attorney.role}
                      </p>
                      <h3 className="mt-2 text-4xl font-bold tracking-[-0.035em] text-white xl:text-5xl">
                        {attorney.name}
                      </h3>
                    </div>

                    {/* Credentials — two-column grid on wider screens */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-[1fr_1fr] xl:gap-10">

                      {/* Education */}
                      <CredentialGroup
                        icon={GraduationCap}
                        title="Education"
                        items={attorney.education}
                      />

                      {/* Professional Memberships */}
                      <CredentialGroup
                        icon={Scale}
                        title="Professional Memberships"
                        items={attorney.memberships}
                      />

                    </div>

                    {/* Awards — pill chips, distinct visual treatment */}
                    <div className="mt-8 pt-8 border-t border-white/8">
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4B06A]/10">
                          <Award className="h-3.5 w-3.5 text-[#D4B06A]" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                          Awards & Recognition
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {attorney.awards.map((award) => (
                          <CredentialPill key={award} label={award} />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}