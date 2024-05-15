import React from "react";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList({ workers }) {
  return (
    <>
      {workers.map((coworker) => {
        return <EmployeeListItem data={coworker} />;
      })}
    </>
  );
}

export default EmployeeList;
