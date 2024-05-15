import React from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import EmployeeList from "./EmployeeList";
import { useContext } from "react";
import { WorkerContext } from "../App";
function Homepage({ title }) {
  const employees = useContext(WorkerContext);
  const { staff } = employees;
  return (
    <div className="homepage">
      Homepage
      <Header topic={title} />
      <Searchbar />
      <EmployeeList workers={staff} />
    </div>
  );
}
export default Homepage;
