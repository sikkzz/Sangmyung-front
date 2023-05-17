import "./App.css";
import Routing from "./routes/Routing";
import IntroRouting from "./routes/IntroRouting";
import InfoRouting from "./routes/InfoRouting";

function App() {
  return (
    <>
      <IntroRouting />
      <InfoRouting />
      <Routing />
    </>
  );
}

export default App;
