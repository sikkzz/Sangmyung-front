import "./App.css";
import Routing from "./routes/Routing";
import IntroRouting from "./routes/IntroRouting";
import InfoRouting from "./routes/InfoRouting";
import FacilityRouting from "./routes/FacilityRouting";

function App() {
  return (
    <>
      <IntroRouting />
      <InfoRouting />
      <FacilityRouting />
      <Routing />
    </>
  );
}

export default App;
