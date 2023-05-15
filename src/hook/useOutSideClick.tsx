import { useEffect } from "react";

const useOutSideClick = (ref: any, callback: any) => {
  useEffect(() => {
    const handleClick = (e: { target: any; }) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback?.();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}

export default useOutSideClick;