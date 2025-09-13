import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { FormContainer, InputsContainer } from "./styles.ts";
import { CREATE_EMPLOYEE_FORM_VALUES } from "./types.ts";
import type { EmployeeData } from "../Layout/types.ts";
import { LayoutContext } from "../Layout/Layout.tsx";

function CreateEmployee() {
  const { employeeData, setEmployeeData } = useContext(LayoutContext);

  const validationSchema = Yup.object().shape({
    [CREATE_EMPLOYEE_FORM_VALUES.NAME]: Yup.string()
      .required("Name field is required")
      .min(2, "Name field should contain minimum 2 characters")
      .max(50, "Name field should contain maximum 50 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES.SURNAME]: Yup.string()
      .required("Surname field is required")
      .max(15, "Surname field should contain maximum 15 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES.AGE]: Yup.string()
      .required("Age field is required")
      .min(1, "Age field should contain minimum 1 characters")
      .max(3, "Age field should contain maximum 3 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES.JOB]: Yup.string().max(
      30,
      "Job field should contain maximum 30 characters"
    ),
  });

  const formik = useFormik({
    initialValues: {
      [CREATE_EMPLOYEE_FORM_VALUES.NAME]: "",
      [CREATE_EMPLOYEE_FORM_VALUES.SURNAME]: "",
      [CREATE_EMPLOYEE_FORM_VALUES.AGE]: "",
      [CREATE_EMPLOYEE_FORM_VALUES.JOB]: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      const employee: EmployeeData = {
        name: values[CREATE_EMPLOYEE_FORM_VALUES.NAME],
        surname: values[CREATE_EMPLOYEE_FORM_VALUES.SURNAME],
        age: values[CREATE_EMPLOYEE_FORM_VALUES.AGE],
        job: values[CREATE_EMPLOYEE_FORM_VALUES.JOB],
      };
      setEmployeeData(employee);
      helpers.resetForm();
      alert(
        `User ${values[CREATE_EMPLOYEE_FORM_VALUES.NAME]} ${
          values[CREATE_EMPLOYEE_FORM_VALUES.SURNAME]
        } successfully created`
      );
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          id="name-id"
          name={CREATE_EMPLOYEE_FORM_VALUES.NAME}
          placeholder="John"
          label="Name*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.NAME]}
        />
        <Input
          id="surname-id"
          name={CREATE_EMPLOYEE_FORM_VALUES.SURNAME}
          placeholder="Johnson"
          label="Surname*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.SURNAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.SURNAME]}
        />
        <Input
          id="age-id"
          name={CREATE_EMPLOYEE_FORM_VALUES.AGE}
          placeholder="25"
          label="Age*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.AGE]}
        />
        <Input
          id="job-id"
          name={CREATE_EMPLOYEE_FORM_VALUES.JOB}
          placeholder="QA"
          label="Job Position"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.JOB]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.JOB]}
        />
      </InputsContainer>
      <Button buttonName="Create" type="submit" />
    </FormContainer>
  );
}

export default CreateEmployee;
