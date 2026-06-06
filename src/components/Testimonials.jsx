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
  {
    name: "Robert K.",
    role: "Motorcycle Accident Client",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The attorneys explained everything clearly and fought hard for my case. I couldn't have asked for better representation.",
  },
  {
    name: "Ashley B.",
    role: "Personal Injury Client",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    quote:
      "They made a stressful situation much easier to navigate. Communication was excellent and the result was better than expected.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4B06A]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Client Testimonials
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
            Trusted By
            <span className="text-[#D4B06A]"> Injury Victims</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            See why clients across Dallas trust Harrison & Cole to guide them
            through some of the most difficult moments of their lives.
          </p>
        </div>
{/* Review Summary */}

<div className="mt-12 text-center">
  <div className="flex justify-center gap-1 text-[#D4B06A]">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current" />
    ))}
  </div>

  <div className="mt-4 text-4xl font-bold text-white">
    4.9<span className="text-[#D4B06A]">/5</span>
  </div>

  <p className="mt-2 text-white/70">
    Based on 500+ verified client reviews
  </p>

  <div className="mt-4 flex justify-center gap-4 text-sm font-medium text-white/50">
    <span>Google Reviews</span>
    <span>•</span>
    <span>Avvo</span>
    <span>•</span>
    <span>Justia</span>
  </div>
</div>

{/* Testimonials */}

<div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {testimonials.map((testimonial, index) => (
    <motion.div
      key={testimonial.name}
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
        transition-all
        duration-300
        hover:border-[#D4B06A]/40
      "
    >
      {/* Client */}

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="
            h-16
            w-16
            rounded-full
            object-cover
            ring-2
            ring-[#D4B06A]/20
          "
        />

        <div>
          <h3 className="font-semibold text-white">
            {testimonial.name}
          </h3>

          <p className="text-sm text-white/60">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Stars */}

      <div className="mt-6 flex gap-1 text-[#D4B06A]">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-current"
          />
        ))}
      </div>

      {/* Quote */}

      <blockquote className="mt-6 text-base leading-8 text-white/75">
        "{testimonial.quote}"
      </blockquote>

      {/* Footer */}

      <div className="mt-8 border-t border-white/10 pt-5">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-white/5
            px-3
            py-1
            text-xs
            font-medium
            text-white/50
          "
        >
          Google Review
        </span>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}