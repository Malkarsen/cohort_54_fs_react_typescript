import { useContext } from "react";

import {
  CardWrapper,
  CardInfo,
  CardInfoTitle,
  CardInfoContent,
} from "./styles";
import { CreateEmployeeContext } from "../CreateEmployee/CreateEmployee";

function Employees() {
  const employee = useContext(CreateEmployeeContext);

  return (
    <CardWrapper>
      <CardInfo>
        <CardInfoTitle>Name</CardInfoTitle>
        <CardInfoContent>{employee?.name}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Surname</CardInfoTitle>
        <CardInfoContent>{employee?.surname}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Age</CardInfoTitle>
        <CardInfoContent>{employee?.age}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Job Position</CardInfoTitle>
        <CardInfoContent>{employee?.job}</CardInfoContent>
      </CardInfo>
    </CardWrapper>
  );
}

export default Employees;
