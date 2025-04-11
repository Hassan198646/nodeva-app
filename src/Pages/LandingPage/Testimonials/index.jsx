import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import rotateAnimation from "../../../../public/rotate_animation_compressed.riv";

export default function Testimonials() {
  const { RiveComponent } = useRive({
    src: rotateAnimation,
    autoplay: true,
    animations: ["rotate"], // 👈 add the name of your animation
    stateMachines: ["State Machine 1"], // name of your state machine

    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <RiveComponent />
      </div>
    </div>
  );
}
