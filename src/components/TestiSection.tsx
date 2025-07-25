import TestiCard from "./TestiCard";

export function TestiSection() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12">Apa Kata Mereka</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <TestiCard
          imageSrc="/images/avatar-1.png" // Pastikan gambar ada di folder `public`
          name="Geulbaewoo"
          role="Writer"
          quote="This watch changed the way I work out. The data is incredibly accurate and helps me push my limits safely. Plus, it looks so stylish!"
          color="border-8 bg-white"
        />
        <TestiCard
          imageSrc="/images/avatar-2.png" // Pastikan gambar ada di folder `public`
          name="Heba Alfarsi"
          role="Content Creator"
          quote="I've reviewed dozens of smartwatches, and this one stands out. The build quality is premium, the software is snappy, and the battery is a beast."
          color="border-8 bg-white"
        />
      </div>
    </section>
  );
}
