import React, { useContext } from "react";
import { WorkerContext } from "../App";

function EmployeeListItem({ data }) {
  const worker = useContext(WorkerContext);
  const { setCurrentWorker } = worker;

  return (
    <>
      <div className="emp_li">
        <img src={data.image} alt="" className="profilePic" />
        <div className="txtBox">
          <h3 className="name"> {data.name} </h3>
          <p className="name"> {data.position} </p>
        </div>
        <button
          onClick={() => {
            setCurrentWorker(data);
          }}
        >
          View
        </button>
      </div>
    </>
  );
}

export default EmployeeListItem;
