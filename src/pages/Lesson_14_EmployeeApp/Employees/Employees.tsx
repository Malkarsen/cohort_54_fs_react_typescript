import { useContext } from "react";

import Button from "components/Button/Button";

import {
  PageWrapper,
  Cards,
  CardWrapper,
  CardInfo,
  CardInfoTitle,
  CardInfoContent,
  ButtonControl,
} from "./styles";
import { LayoutContext } from "../Layout/Layout";

function Employees() {
  const { employeeData, setEmployeeData } = useContext(LayoutContext);

  const deleteCard = (id: string) => {
    setEmployeeData((prevValue) =>
      prevValue.filter((employee) => employee.id !== id)
    );
  };

  const deleteAllCards = () => {
    setEmployeeData([]);
  };

  const employeeList = employeeData.map((employee) => {
    return (
      <CardWrapper key={employee.id}>
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
        <Button
          buttonName="Delete"
          isRed
          onClick={() => deleteCard(employee.id)}
        />
      </CardWrapper>
    );
  });

  return (
    <PageWrapper>
      <Cards>{employeeList}</Cards>
      {!!employeeData.length && (
        <ButtonControl>
          <Button
            buttonName="Remove All Employees"
            isRed
            onClick={deleteAllCards}
          />
        </ButtonControl>
      )}
    </PageWrapper>
  );
}

export default Employees;
