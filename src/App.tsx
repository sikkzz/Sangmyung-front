import "./App.css";
import Routing from "./routes/Routing";
import RouteChangeTracking from "./utils/RouteChangeTracking";

function App() {
	RouteChangeTracking();

	return <Routing />;
}

export default App;
