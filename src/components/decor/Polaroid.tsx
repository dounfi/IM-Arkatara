import type { ReactNode } from "react";

interface Props {
  rotate?: number;
  frameColor?: string;
  image?: string;
  className?: string;
  children?: ReactNode;
  id?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-44 h-52",
  md: "w-56 h-64",
  lg: "w-72 h-80",
};

const Polaroid = ({
  rotate = -3,
  frameColor = "#FFFFFF",
  image,
  className = "",
  children,
  id,
  size = "md",
}: Props) => (
  <div
    id={id}
    className={`p-3 pb-2 polaroid-shadow rounded-sm ${className}`}
    style={{ transform: `rotate(${rotate}deg)`, backgroundColor: frameColor }}
  >
    <div className={`relative ${sizeMap[size]} overflow-hidden flex items-center justify-center`}>
      {image && <img src={image} alt="Polaroid photo" className="w-full h-full object-cover" />}
    </div>
    {children}
  </div>
);

export default Polaroid;
