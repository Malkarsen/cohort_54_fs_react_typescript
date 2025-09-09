import { useState, createContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Card from "homeworks/Homework_13_React_useContext/components/Card/Card";

import {
  BlogManagementForm,
  TextAreaWrapper,
  TextArea,
  ErrorText,
} from "./styles";
import { BLOG_MANAGEMENT_FORM_VALUES } from "./types";

export const BlogManagementContext = createContext<string | undefined>(
  undefined
);

function BlogManagement() {
  const validationSchema = Yup.object().shape({
    [BLOG_MANAGEMENT_FORM_VALUES.MESSAGE]: Yup.string()
      .required("This field is required")
      .max(500, "This field should contain maximum 500 characters"),
  });
  const formik = useFormik({
    initialValues: {
      [BLOG_MANAGEMENT_FORM_VALUES.MESSAGE]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      setMessage(values[BLOG_MANAGEMENT_FORM_VALUES.MESSAGE]);
      console.log(values[BLOG_MANAGEMENT_FORM_VALUES.MESSAGE]);
      helpers.resetForm();
    },
  });
  const [message, setMessage] = useState<string | undefined>(undefined);

  return (
    <BlogManagementContext.Provider value={message}>
      <BlogManagementForm onSubmit={formik.handleSubmit}>
        <TextAreaWrapper>
          <TextArea
            name={BLOG_MANAGEMENT_FORM_VALUES.MESSAGE}
            placeholder="Enter your message here..."
            value={formik.values[BLOG_MANAGEMENT_FORM_VALUES.MESSAGE]}
            onChange={formik.handleChange}
          ></TextArea>
          {!!formik.errors[BLOG_MANAGEMENT_FORM_VALUES.MESSAGE] && (
            <ErrorText>
              {formik.errors[BLOG_MANAGEMENT_FORM_VALUES.MESSAGE]}
            </ErrorText>
          )}
          <Button buttonName="Post it" type="submit"></Button>
        </TextAreaWrapper>
        <Card></Card>
      </BlogManagementForm>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;
