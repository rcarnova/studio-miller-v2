export function MoondinoAnimation() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ background: "#1E324A" }}
    >
      <style>{`
        @keyframes moonSlide {
          0% { transform: translateX(-100%) translateY(20%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(100%) translateY(-20%); opacity: 0; }
        }
        @keyframes textReveal {
          0%, 15% { opacity: 0; transform: translateY(12px); }
          25%, 75% { opacity: 1; transform: translateY(0); }
          85%, 100% { opacity: 0; transform: translateY(-12px); }
        }
        @keyframes lineGrow {
          0%, 20% { width: 0; }
          40%, 80% { width: 100%; }
          100% { width: 0; }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.08; }
        }
        .mn-moon { animation: moonSlide 6s ease-in-out infinite; }
        .mn-title { animation: textReveal 6s ease-in-out infinite; }
        .mn-subtitle { animation: textReveal 6s ease-in-out infinite; animation-delay: 0.3s; }
        .mn-line { animation: lineGrow 6s ease-in-out infinite; }
        .mn-grid { animation: gridPulse 6s ease-in-out infinite; }
      `}</style>

      <div className="mn-grid absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(#F3CF45 1px, transparent 1px), linear-gradient(90deg, #F3CF45 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="mn-moon absolute"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 40%, #F3CF45, #E7CD65)",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          boxShadow: "0 0 60px rgba(243,207,69,0.3)"
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8">
        <div className="mn-line h-px bg-yellow-400" style={{ width: 0 }} />
        <p className="mn-title font-display font-black text-white tracking-widest uppercase text-center"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", letterSpacing: "0.15em" }}>
          MOONDINO
        </p>
        <p className="mn-subtitle font-sans text-yellow-400 uppercase tracking-widest text-center"
          style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.85rem)", letterSpacing: "0.3em" }}>
          IL ROBOT DA RISAIA
        </p>
        <div className="mn-line h-px bg-yellow-400" style={{ width: 0 }} />
      </div>
    </div>
  );
}
