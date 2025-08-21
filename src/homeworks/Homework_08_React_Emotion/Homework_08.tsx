import { useState } from "react";

import { Homework08PageWrapper, ElementControl, Text } from "./styles";
import { generateNumber } from "./data";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

function Homework_08() {
  // Так делать нельзя, т.к это действие приведет к лишним вызовам функции generateNumber()
  // при каждом перерендере компонента Homework_08
  // const number = generateNumber();
  // const [generatedValue] = useState(number);

  // В таком варианте (когда мы передаем в useState в качестве значения по умолчанию callback,
  // она вызывается только 1 раз при первичном рендере, при повторных рендерах, она не вызывается,
  // вызвать ее можно только через setGeneratedValue)
  const [generatedValue] = useState(generateNumber);
  // const [generatedValue, setGeneratedValue] = useState(generateNumber);

  const [count, setCount] = useState<number>(0);

  return (
    <Homework08PageWrapper>
      <ElementControl>
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
      </ElementControl>
      <ElementControl>
        <Button buttonName="Normal button"></Button>
        <Button buttonName="Red button" isRed={true}></Button>
        <Button buttonName="Disabled button" disabled={true}></Button>
      </ElementControl>
      <ElementControl>
        <Text>{count}</Text>
        <Button
          buttonName="Add"
          onClick={() => setCount((prevValue) => prevValue + 1)}
        ></Button>
      </ElementControl>
      <Text>Сгенерированное число: {generatedValue}</Text>
    </Homework08PageWrapper>
  );
}

export default Homework_08;
