import { useContext, type ReactNode } from "react";
import { v4 } from "uuid";

import {
  Cards,
  CardWrapper,
  CardInfo,
  CardInfoTitle,
  CardInfoContent,
} from "./styles";
import { LayoutContext } from "../Layout/Layout";

function Employees() {
  const { employeeData, setEmployeeData } = useContext(LayoutContext);

  const employeeList = employeeData.map((employee) => {
    return (
      <CardWrapper key={v4()}>
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
  });

  return <Cards>{employeeList}</Cards>;
}

export default Employees;
