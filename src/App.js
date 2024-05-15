import { useState, createContext } from "react";
// 1.CreateContext import
import "./App.css";
// This is thea Main [CEO] file -->  PRIMARYstate LivesHere
//---> Components are housed here
//---> Hooks === useState, useEffect
import HomePage from "./components/Homepage";
import EmployeePage from "./components/EmployeePage";
import { allEmployees } from "./models/workers";

export const WorkerContext = createContext();
// 2. Establish a variable that is set to createContext init'd
function App() {
  const [currentWorker, setCurrentWorker] = useState({
    name: "Julia Taylor",
    position: "VP of Marketing",
    image: "",
  });

  const [staff, setStaff] = useState(allEmployees);
  const topics = ["Employee Directory", "Employee"];
  // ------> Data that will be distributed through to the components below

  return (
    // ----->What we wanna see displayed on screen
    <WorkerContext.Provider
      value={{ currentWorker, setCurrentWorker, staff, setStaff }}
    >
      <div className="App">
        <HomePage title={topics[0]} />
        {/* --------passing state to other components {props:} */}

        <EmployeePage title={topics[1]} />
        {/* ----------------------------------Components */}
      </div>
    </WorkerContext.Provider>
  );
}

export default App;
