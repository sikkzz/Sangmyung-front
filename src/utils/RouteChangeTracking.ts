import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

const RouteChangeTracking = () => {
	const location = useLocation();
	const [initialized, setInitalized] = useState(false);

	useEffect(() => {
		if (!window.location.href.includes("localhost")) {
			ReactGA.initialize("G-4LB5WCV8HG");
		}
		setInitalized(true);
	}, []);

	useEffect(() => {
		if (initialized) {
			ReactGA.pageview(location.pathname + location.search);
		}
	}, [initialized, location]);
};

export default RouteChangeTracking;
