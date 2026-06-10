"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Scale,
} from "lucide-react";

const attorneys = [
  {
    name: "James Harrison",
    role: "Founder & Managing Partner",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
    experience: "25+ Years Experience",

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
    experience: "20+ Years Experience",

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

export default function Attorney() {
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

        {/* Attorneys */}

        <div className="mt-24 space-y-24">
          {attorneys.map((attorney, index) => (
            <div key={attorney.name}>
              <div
                className={`grid items-center gap-14 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-3xl border border-white/10"
                >
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="h-[600px] w-full object-cover"
                  />
                </motion.div>

                {/* Content */}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center rounded-full border border-[#D4B06A]/20 bg-[#D4B06A]/10 px-4 py-2 text-sm font-medium text-[#D4B06A]">
                    {attorney.experience}
                  </div>

                  <h3 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-white">
                    {attorney.name}
                  </h3>

                  <p className="mt-3 text-lg text-white/70">
                    {attorney.role}
                  </p>

                  {/* Education */}

                  <div className="mt-10">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-[#D4B06A]" />
                      <h4 className="font-semibold text-white">
                        Education
                      </h4>
                    </div>

                    <ul className="mt-4 space-y-3 text-white/70">
                      {attorney.education.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Awards */}

                  <div className="mt-10">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-[#D4B06A]" />
                      <h4 className="font-semibold text-white">
                        Awards & Recognition
                      </h4>
                    </div>

                    <ul className="mt-4 space-y-3 text-white/70">
                      {attorney.awards.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Memberships */}

                  <div className="mt-10">
                    <div className="flex items-center gap-3">
                      <Scale className="h-5 w-5 text-[#D4B06A]" />
                      <h4 className="font-semibold text-white">
                        Professional Memberships
                      </h4>
                    </div>

                    <ul className="mt-4 space-y-3 text-white/70">
                      {attorney.memberships.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {index !== attorneys.length - 1 && (
                <div className="my-24 h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}