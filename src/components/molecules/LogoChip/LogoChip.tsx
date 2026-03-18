import { ReactNode } from "react";
import "./LogoChip.css";

const FLOAT_ANIMS = ["float-1", "float-2", "float-3", "float-4", "float-5"];
const FLOAT_DURS = ["3.2s", "4.1s", "3.7s", "4.8s", "3.4s"];
const FLOAT_DELAYS = ["0s", "0.6s", "1.2s", "0.3s", "1.8s"];

interface LogoChipProps {
  name: string;
  icon: ReactNode;
  x: number;
  y: number;
  index: number;
  zoneColor: string;
  iconColor: string;
}

export function LogoChip({ name, icon, x, y, index, zoneColor, iconColor }: LogoChipProps) {
  const anim = FLOAT_ANIMS[index % FLOAT_ANIMS.length];
  const dur = FLOAT_DURS[index % FLOAT_DURS.length];
  const delay = FLOAT_DELAYS[index % FLOAT_DELAYS.length];

  return (
    <div
      className="logo-chip"
      style={{
        left: `${x}%`,
        top: `${y}px`,
        "--zc": zoneColor,
        "--lc": iconColor,
      } as React.CSSProperties}
    >
      <div
        className="logo-chip__inner"
        style={{ animation: `${anim} ${dur} ${delay} ease-in-out infinite` }}
      >
        <div className="logo-chip__glow" />
        <div className="logo-chip__icon">{icon}</div>
      </div>
      <span className="logo-chip__name">{name}</span>
    </div>
  );
}
