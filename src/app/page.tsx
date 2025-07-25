// app/page.tsx
import FeatureCard from "@/components/FeatureCard";
import { TestiSection} from '@/components/TestiSection';
import Image from "next/image"; // Gunakan komponen Image dari Next.js untuk optimasi
 
// Ikon dari Heroicons (contoh)
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);
// TODO: Buat atau cari ikon lain untuk fitur lainnya!
const GPSIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 8a4 4 0 110 8 4 4 0 010-8z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v2m0-6V8m0-2h.01M12 16h.01M12 18h.01M12 20h.01M12 22h.01" />
  </svg>
); 
const CallIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 7.76a1.5 1.5 0 00-2.12-2.12l-4.95 4.95a1.5 1.5 0 000 2.12l4.95 4.95a1.5 1.5 0 002.12-2.12L11.88 12l4.36-4.24z" />
  </svg>
)
// Halaman utama untuk smartwatch

export default function SmartWatchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center">
        {/* Kamu bisa ganti src dengan URL gambar dari Unsplash/Pexels */}
        <Image
          src="/placeholder-watch.jpg" // Simpan gambar di folder `public`
          alt="Smartwatch product image"
          width={300}
          height={300}
          className="mx-auto mb-8"
        />
        <h1 className="text-5xl font-extrabold tracking-tight">
          The Future on Your Wrist
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Experience seamless connectivity and track your health like never before.
          Elegance meets technology.
        </p>
        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Buy Now
        </button>
      </section>
 
      {/* Features Section */}
      <section className="mt-20 bg-red-200">
        <h2 className="text-3xl font-bold text-center mb-10">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<HeartIcon />}
            title="Health Reminders"
            description="Receive reminders for movement, hydration, and medication. "
          />
          {/* Panggil FeatureCard lagi dengan props berbeda */}
          <FeatureCard
            icon={<GPSIcon />}
            title="GPS Tracking"
            description="Track routes and distance for outdoor activities like running and cycling. "
          />
          <FeatureCard
            icon={<CallIcon />}
            title="Calling and Messaging"
            description="Make and receive calls, and send and receive text messages. "
          />
        </div>
      </section>
      <TestiSection/>
    </div>
  );
}