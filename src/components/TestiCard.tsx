// components/TestimonialCard.tsx
import Image from "next/image";
import React from "react";

// Definisikan "Interface" atau bentuk data untuk komponen ini
interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  role: string;
  quote: string;
  color?: string;
}

export default function TestimonialCard({
  imageSrc,
  name,
  role,
  quote,
  color,
}: TestimonialCardProps) {
  return (
    <div
      className={`${
        color || "bg-background"
      } p-8 rounded-lg flex flex-col items-center text-center border border-gray-50 hover:shadow-md`}
    >
      <Image
        src={imageSrc}
        alt={`Photo of ${name}`}
        width={80}
        height={80}
        className="rounded-full mb-4 border-2 border-slate-600"
      />
      {/* Kutipan testimoni */}
      <p className="text-slate-400 italic mb-6">&quot;{quote}&quot;</p>
      {/* Info pemberi testimoni */}
      <div>
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  );
}
