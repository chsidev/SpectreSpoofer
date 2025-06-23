"use client";

export default function ProductDemo() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto text-center">
        {/* Mockup Image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src="/spectre-interface.png"
            alt="Spectre Spoofer Interface"
            className="w-full h-auto rounded-2xl shadow-2xl"
            onError={(e) => {
              console.log('Image failed to load:', e);
            }}
            onLoad={() => console.log('Image loaded successfully')}
          />
        </div>
      </div>
    </section>
  );
}
