import { useInView } from "react-intersection-observer";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (inView) {
      setShouldLoad(true);
    }
  }, [inView]);

  const riveParams = {
    src: "/rotate_animation_compressed.riv",
    autoplay: true,
    stateMachines: ["State Machine 1"],
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  };

  const { RiveComponent } = useRive(shouldLoad ? riveParams : undefined);

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center bg-white transition-all duration-500 ease-in-out"
      style={{
        padding: "1rem",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          aspectRatio: "1 / 1", // maintains square
        }}
      >
        {shouldLoad && <RiveComponent />}
      </div>
    </div>
  );
}
