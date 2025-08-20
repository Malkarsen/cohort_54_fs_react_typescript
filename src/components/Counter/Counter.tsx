import Button from "components/Button/Button";
import { type CounterProps } from "./types";
import { CounterWrapper, ButtonControl, Count } from "./styles";

function Counter({ onPlus, onMinus, count }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button buttonName="+" onClick={onPlus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl>
        <Button buttonName="-" onClick={onMinus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
