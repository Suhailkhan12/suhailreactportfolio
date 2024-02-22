import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function useAnimationref() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const maincontrol = useAnimation();

  useEffect(() => {
    if (isInView) {
      maincontrol.start("visible");
    }
  }, [isInView]);

  return { maincontrol, ref };
}

export default useAnimationref;
