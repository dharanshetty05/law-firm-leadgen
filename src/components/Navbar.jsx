"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Practice Areas",
    href: "#practice-areas",
  },
  {
    label: "Results",
    href: "#results",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Attorneys",
    href: "/attorneys",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-300
          ${
            scrolled
              ? "border-b border-white/10 bg-[#08111f]/90 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}

            <a
              href="/"
              className="flex items-center gap-3"
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  text-lg
                  font-bold
                  text-white
                "
              >
                H
              </div>

              <div>
                <div className="text-lg font-bold text-white">
                  Harrison & Cole
                </div>

                <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                  Injury Attorneys
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    text-sm
                    font-medium
                    text-white/75
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}

            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="tel:+12145550198"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-200
                  hover:border-white/20
                "
              >
                <Phone className="h-4 w-4" />
                (214) 555-0198
              </a>

              <a
                href="#contact"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-md
                  bg-[#D4B06A]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#caa45c]
                  hover:-translate-y-0.5
                "
              >
                Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile Button */}

            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-md
                border
                border-white/10
                text-white
                lg:hidden
              "
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-[#08111f]
              pt-24
              lg:hidden
            "
          >
            <div className="px-6">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="
                      block
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.02]
                      px-5
                      py-4
                      text-white
                    "
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="#contact"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#D4B06A]
                    px-6
                    py-4
                    font-semibold
                    text-black
                  "
                >
                  Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="tel:+12145550198"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-4
                    text-white
                  "
                >
                  <Phone className="h-4 w-4" />
                  (214) 555-0198
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}