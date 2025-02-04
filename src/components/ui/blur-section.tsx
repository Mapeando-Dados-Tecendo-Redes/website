import type React from "react";
import { BlurEffect } from "./blur-effect";

interface BlurSectionProps {
  children: React.ReactNode;
  topBlur?: boolean;
  bottomBlur?: boolean;
  className?: string;
}

export function BlurSection({
  children,
  topBlur = false,
  bottomBlur = false,
  className = "",
}: BlurSectionProps) {
  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      {topBlur && <BlurEffect position="top" />}
      {children}
      {bottomBlur && <BlurEffect position="bottom" />}
    </div>
  );
}
