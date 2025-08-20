import {
  Homework08PageWrapper,
  InputContainer,
  ButtonContainer,
} from "./styles";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

function Homework_08() {
  return (
    <Homework08PageWrapper>
      <InputContainer>
        <Input
          id="normal_input_id"
          name="normal_input_name"
          placeholder="Normal input"
          label="Normal input"
        ></Input>
        <Input
          id="disabled_input_id"
          name="disabled_input_name"
          placeholder="Disabled input"
          label="Disabled input"
          disabled={true}
        ></Input>
        <Input
          id="error_input_id"
          name="error_input_name"
          placeholder="Error input"
          label="Error input"
          error="Some error"
        ></Input>
      </InputContainer>
      <ButtonContainer>
        <Button buttonName="Normal button"></Button>
        <Button buttonName="Red button" isRed={true}></Button>
        <Button buttonName="Disabled button" disabled={true}></Button>
      </ButtonContainer>
    </Homework08PageWrapper>
  );
}

export default Homework_08;
