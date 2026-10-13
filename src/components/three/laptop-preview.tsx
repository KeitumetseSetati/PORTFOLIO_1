"use client";

import Image from "next/image";

export default function LaptopPreview() {
  return (
    <div className="relative flex w-full items-center justify-center py-6 sm:py-8 lg:py-0">
      <div className="relative w-full max-w-[620px] animate-[fadeIn_1.2s_ease-out_both]">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#100b1c] shadow-[0_20px_80px_rgba(111,66,193,0.15)]">
          <Image
            src="/images/hero/developer-portrait.png"
            alt="Illustration of Keitumetse Setati working on software development at a futuristic workstation"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 620px"
            className="object-cover"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}