import Button from "../Button/Button";
import "./styles.css";
import type { CounterProps } from "./types";

function Counter({onPlus, onMinus, count}: CounterProps) {
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button buttonName="+" onClick={onPlus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button buttonName="-" onClick={onMinus} />
      </div>
    </div>
  );
}

export default Counter;
