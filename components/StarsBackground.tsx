"use client";

export default function StarsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {[...Array(80)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/50 animate-pulse"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}