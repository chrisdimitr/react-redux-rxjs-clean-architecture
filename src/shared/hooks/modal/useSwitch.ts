import { useState, useCallback } from "react";

export function useSwitch(defaultIsShown = false) {
  const [isShown, setIsShown] = useState(defaultIsShown);

  const handleShow = useCallback(() => {
    setIsShown(true);
  }, []);

  const handleHide = useCallback(() => {
    setIsShown(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsShown((prev) => !prev);
  }, []);

  return { isShown, handleShow, handleHide, handleToggle };
}
