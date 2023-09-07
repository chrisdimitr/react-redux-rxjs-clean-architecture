import { useEffect, useState } from "react";

type Interaction = {
  interacted: boolean;
};

const EVENTS: Array<keyof HTMLElementEventMap> = ["mouseover", "mousemove", "pointerdown", "touchstart"];

export function useInteraction(): Interaction {
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setInteracted(true);
    };

    EVENTS.forEach((event) => {
      document.addEventListener(
        event,
        () => {
          setInteracted(true);
        },
        { once: true }
      );
    });

    return () => {
      EVENTS.forEach((event) => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  return { interacted };
}
