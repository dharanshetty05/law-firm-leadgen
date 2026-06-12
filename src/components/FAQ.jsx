"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How much does a consultation cost?",
    answer:
      "Consultations are completely free. We'll review your situation, answer your questions, and explain your legal options with no obligation.",
  },
  {
    question: "Do I pay if we lose?",
    answer:
      "No. Harrison & Cole works on a contingency fee basis, which means you pay nothing unless we successfully recover compensation for your case.",
  },
  {
    question: "How long does a case take?",
    answer:
      "Every case is different. Some claims may resolve within a few months, while more complex cases can take longer depending on the circumstances and negotiations involved.",
  },
  {
    question: "How much is my case worth?",
    answer:
      "The value of a case depends on factors such as medical expenses, lost income, pain and suffering, and the long-term impact of your injuries.",
  },
  {
    question: "When should I contact an attorney?",
    answer:
      "As soon as possible. Early legal guidance can help protect important evidence, prevent costly mistakes, and strengthen your claim from the beginning.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#08111f] py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4B06A]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Answers To Common
            <span className="text-[#D4B06A]"> Questions</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            We understand that dealing with an injury claim can be stressful.
            Here are answers to some of the questions we hear most often.
          </p>
        </motion.div>

        {/* FAQ Accordion */}

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0d1828]
                  transition-all
                  duration-300
                "
              >
                <button
                  onClick={() =>
                    setActive(isOpen ? -1 : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-8
                    py-7
                    text-left
                  "
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <Plus
                    className={`
                      h-5 w-5
                      text-[#D4B06A]
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-45" : ""}
                    `}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <div className="border-t border-white/10 px-8 py-6">
                    <p className="leading-8 text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}