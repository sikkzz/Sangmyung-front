import React from "react";
import { useLocation } from "react-router-dom";

import DepartChart from "./DepartChart";
import DepartIntroduce from "./DepartIntroduce";
import DepartPromiss from "./DepartPromiss";
import DepartWork from "./DepartWork";

export type Props = {
	state: string | undefined;
};

function DepartContent() {
	const location = useLocation();

	return (
		<>
			<DepartIntroduce state={location.pathname.split("/")[3]} />
			<DepartWork state={location.pathname.split("/")[3]} />
			<DepartChart />
			<DepartPromiss state={location.pathname.split("/")[3]} />
		</>
	);
}

export default DepartContent;
