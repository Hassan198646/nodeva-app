import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Handle window resize/zoom to update dimensions
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const riveParams = {
    src: "/rotate_animation_compressed.riv",
    autoplay: true,
    stateMachines: ["State Machine 1"],
    layout: new Layout({
      fit: Fit.Fill, // Use Fit.Fill to ensure "all to all" coverage without empty space
      alignment: Alignment.Center,
    }),
  };

  const { RiveComponent } = useRive(riveParams, {
    shouldResize: true,
  });

  return (
    <div
      className="w-full max-w-[1200px] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] m-0 p-0 mx-auto overflow-hidden flex justify-center items-center"
      style={{ position: "relative" }}
    >
      <div className="w-full h-full">
        <RiveComponent
          key={`${windowSize.width}-${windowSize.height}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Match Fit.Fill to stretch the animation
          }}
        />
      </div>
    </div>
  );
}