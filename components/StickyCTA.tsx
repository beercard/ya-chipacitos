
import Link from 'next/link';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:bottom-8 md:right-8 animate-bounce-slow">
      <a 
        href="https://web.pedisy.com/tiendas/ya-chipacitos" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-red text-white font-display text-xl px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-transform hover:scale-105 border-2 border-white flex items-center gap-2"
      >
        🍕 PEDILO YA!
      </a>
    </div>
  );
}
