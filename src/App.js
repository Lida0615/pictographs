import { BrowserRouter } from "react-router-dom";
import Download from "./components/Download/Download";
import Header from "./components/Header/Header";
import MarketPlase from "./components/MarketPlase/MarketPlase";
import Partners from "./components/Partners/Partners";
import Picto from "./components/Picto/Picto";
import Pictographs from "./components/Pictographs/Pictographs";
import Project from "./components/Project/Project";
import Roadmap from "./components/Roadmap/Roadmap";


function App() {
  return <div className="App container">
    <BrowserRouter>
      <Header />
      <Pictographs />
      <Download />
      <Picto />
      <Project />
      <Roadmap />
      <Partners />
      <MarketPlase />
    </BrowserRouter></div>;
}

export default App;
