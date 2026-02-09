
"use client";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:bottom-8 md:right-8 animate-bounce-slow">
      <a 
        href="https://web.pedisy.com/tiendas/ya-chipacitos" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-yellow text-brand-black neobrutal-button font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:bg-white transition-colors border-2 border-black flex items-center gap-2"
      >
        PEDILO YA!
      </a>
    </div>
  );
}
