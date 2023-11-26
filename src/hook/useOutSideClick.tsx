import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useOutSideClick = (ref: any, callback: any) => {
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const handleClick = (e: { target: any }) => {
			if (ref.current && !ref.current.contains(e.target)) {
				callback?.();
			}
		};

		window.addEventListener("mousedown", handleClick);

		return () => window.removeEventListener("mousedown", handleClick);
	}, [ref, callback]);
};

export default useOutSideClick;
