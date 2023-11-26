import { useLocation } from "react-router-dom";

import DepartChart from "./DepartChart";
import DepartIntroduce from "./DepartIntroduce";
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
		</>
	);
}

export default DepartContent;
