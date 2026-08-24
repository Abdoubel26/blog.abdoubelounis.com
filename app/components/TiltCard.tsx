"use client";

import Tilt from "react-parallax-tilt";

export default function TiltCard({ children }: { children: React.ReactNode }) {
  return (
    <Tilt
      glareEnable={false}
      glareMaxOpacity={0.3}
      scale={1.01}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
    >
      {children}
    </Tilt>
  );
}