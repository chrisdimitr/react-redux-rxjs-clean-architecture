import { useState, useCallback } from "react";

export const SwitchHook = (defaultIsShown = false) => {
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
};
