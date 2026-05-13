import Sticker from "./Sticker";

/** Decorative floating leaves/stars layer for any section */
const FloatingBg = ({ density = "normal" }: { density?: "sparse" | "normal" | "dense" }) => {
  const items =
    density === "dense"
      ? 10
      : density === "sparse"
      ? 4
      : 7;

  const presets = [
    { type: "lightbulb" as const, color: "text-muted-foreground/60", size: 56, top: "8%", left: "6%", rotate: -20, float: "slow" as const },
    { type: "star" as const, color: "text-yellow-primary/70", size: 32, top: "16%", left: "88%", rotate: 12, float: "sparkle" as const },
    { type: "lightbulb" as const, color: "text-accent/50", size: 70, top: "70%", left: "4%", rotate: 30, float: "mid" as const },
    { type: "sparkle" as const, color: "text-yellow-secondary/70", size: 28, top: "40%", left: "50%", rotate: 0, float: "sparkle" as const },
    { type: "lightbulb" as const, color: "text-muted-foreground/40", size: 44, top: "55%", left: "92%", rotate: -10, float: "slow" as const },
    { type: "dot" as const, color: "text-yellow-amber/60", size: 18, top: "30%", left: "20%", rotate: 0, float: "mid" as const },
    { type: "circle" as const, color: "text-blue-deep/30", size: 60, top: "82%", left: "60%", rotate: 0, float: "slow" as const },
    { type: "star" as const, color: "text-yellow-primary/60", size: 24, top: "5%", left: "45%", rotate: 0, float: "sparkle" as const },
    { type: "lightbulb" as const, color: "text-primary/40", size: 50, top: "90%", left: "30%", rotate: -40, float: "mid" as const },
    { type: "sparkle" as const, color: "text-yellow-secondary/50", size: 22, top: "65%", left: "70%", rotate: 0, float: "sparkle" as const },
  ];

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {presets.slice(0, items).map((p, i) => (
        <div key={i} className="absolute" style={{ top: p.top, left: p.left }}>
          <Sticker type={p.type} color={p.color} size={p.size} rotate={p.rotate} float={p.float} />
        </div>
      ))}
    </div>
  );
};

export default FloatingBg;
