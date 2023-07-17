import React, { createRef, useEffect, useRef } from "react";
import Lottie, {
  AnimationConfigWithData
} from "lottie-web/build/player/lottie_light";
import animation from "./animation.json";

export default function Loading(props: Partial<AnimationConfigWithData>) {
  const container = createRef<HTMLDivElement>();

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      animationData: animation,
      ...props
    });
  }, []);

  return <div style={{maxWidth: "100px", maxHeight: "100px", margin: "0 auto"}} ref={container} />;
}
