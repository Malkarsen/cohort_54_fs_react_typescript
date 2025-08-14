import "./styles.css";
import { type InputProps } from "./types";

// С использованием деструктуризации
function Input({ id, name, type = "text", placeholder, label }: InputProps) {
  return (
    <div className="form_input_container">
      <label className="form_label" htmlFor={`input_${name}`}>
        {label}
      </label>
      <input
        className="form_input"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
// без использования деструктуризации - синтаксис увеличивается
// можно деструкуризовать внутри компонента
// const { name, type, placeholder, label } = props
// function Input(props) {
//   return (
//     <div className="form_input_container">
//       <label className="form_label" htmlFor={`input_${props.name}`}>
//         {props.label}
//       </label>
//       <input
//         className="form_input"
//         id={`form_input_${props.name}`}
//         name={props.name}
//         type={props.type}
//         placeholder={props.placeholder}
//       />
//     </div>
//   );
// }

export default Input;
