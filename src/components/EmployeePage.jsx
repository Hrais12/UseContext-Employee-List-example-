import React, { useContext } from "react";
import Header from "./Header";
import Selector from "./Selector";
import { WorkerContext } from "../App";
function EmployeePage({ title, coworker }) {
  const worker = useContext(WorkerContext);
  const { currentWorker, setCurrentWorker } = worker;
  return (
    <div className="emp_page">
      EmployeePage
      <Header topic={title} />
      <div className="topContainer">
        <img src={currentWorker.img} alt="" className="profile" />
        <div className="infoBox">
          <p>{currentWorker.name}</p>
          <p>{currentWorker.position}</p>
        </div>
      </div>
      <Selector />
      <Selector />
      <Selector />
    </div>
  );
}
export default EmployeePage;
