import { useContext } from "react";

import {
  CardWrapper,
  CardInfo,
  CardInfoTitle,
  CardInfoContent,
} from "./styles";
import { LayoutContext } from "../Layout/Layout";

function Employees() {
  const { employeeData, setEmployeeData } = useContext(LayoutContext);

  return (
    <CardWrapper>
      <CardInfo>
        <CardInfoTitle>Name</CardInfoTitle>
        <CardInfoContent>{employeeData?.name}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Surname</CardInfoTitle>
        <CardInfoContent>{employeeData?.surname}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Age</CardInfoTitle>
        <CardInfoContent>{employeeData?.age}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Job Position</CardInfoTitle>
        <CardInfoContent>{employeeData?.job}</CardInfoContent>
      </CardInfo>
    </CardWrapper>
  );
}

export default Employees;
