import { type InputProps } from "./types";
import { FormInputContainer, FormLabel, FormInput, ErrorText } from "./styles";

// С использованием деструктуризации
function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  error = undefined,
}: InputProps) {
  return (
    <FormInputContainer>
      <FormLabel htmlFor={`input_${name}`}>{label}</FormLabel>
      <FormInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        $error={error}
      />
      {!!error && <ErrorText>{error}</ErrorText>}
    </FormInputContainer>
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
