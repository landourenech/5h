"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const faqData = [
  {
    question: "Collaborate your multiple team support easily",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Build your team's knowledge base system",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
 
];

export default function FeaturesSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // Ouvrir/fermer une question
  const toggle = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    // Section principale contenant deux colonnes à partir du breakpoint "md"
    <section className="grid md:grid-cols-2 w-full gap-7 pt-4">
      {/* Bloc avec l'image */}
      <div className="flex w-full justify-center items-center">
        <Image
            src="/images/feature.svg"
            alt="Feature"
            width={500}
            height={500}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
        />
        </div>

      {/* Bloc avec le texte et les FAQ */}
      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-2xl font-bold ">
          Meet our premium features that will make you wow
        </h2>
        <p className="text-sm">
          Build an incredible workplace and grow your business with Gusto’s
          all-in-one platform with amazing contents.
        </p>

        <div className="shadow-xl rounded-lg p-4 hover:bg-gray-300 transition-colors mt-4">
          <h3 className="font-bold mb-2">Organize your project content</h3>
          <p className="text-sm">
            Get your website ads tests delivered at let collect sample from the
            victory of the managments that supplies best design system which
            guidelines ever with multiple features.
          </p>
        </div>

        {/* FAQ section */}
        <div className="max-w-xl pt-4">
         

          <div className="space-y-4">
            {faqData.map(({ question, answer }, i) => (
              <div
                key={i}
                className="border border-gray-200 bg-gray-100 rounded-xl p-4 cursor-pointer select-none"
                onClick={() => toggle(i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    {question}
                  </h3>
                  {openIndexes.includes(i) ? (
                    <ChevronUp className="w-6 h-6 text-[#FFC059]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                {openIndexes.includes(i) && (
                  <p className="mt-2 text-gray-700 text-xs">{answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
