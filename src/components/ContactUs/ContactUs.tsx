import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { FormWrapper, Title } from "./styles";
import { CONTACT_US_FORM_VALUES } from "./types";

function ContactUs() {
  const validationSchema = Yup.object().shape({
    [CONTACT_US_FORM_VALUES.FULLNAME]: Yup.string()
      .required("Full name field is required")
      .min(3, "Full name field should contain minimum 3 characters")
      .max(50, "Full name field should contain maximum 50 characters"),
    [CONTACT_US_FORM_VALUES.PHONE]: Yup.string()
      .required("Phone field is required")
      .min(4, "Phone field should contain minimum 4 characters")
      .max(20, "Phone field should contain maximum 20 characters"),
    [CONTACT_US_FORM_VALUES.EMAIL]: Yup.string()
      .email("This filed should be im email format")
      .min(6, "Full name field should contain minimum 6 characters")
      .max(60, "Full name field should contain maximum 60 characters"),
  });

  const formik = useFormik({
    initialValues: {
      [CONTACT_US_FORM_VALUES.FULLNAME]: "",
      [CONTACT_US_FORM_VALUES.PHONE]: "",
      [CONTACT_US_FORM_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values);
    },
  });
  
  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <Input
        id="fullName_id"
        name={CONTACT_US_FORM_VALUES.FULLNAME}
        placeholder="Your full name"
        label="Full name*"
        value={formik.values[CONTACT_US_FORM_VALUES.FULLNAME]}
        onChange={formik.handleChange}
        error=""
      />
      <Input
        id="phone_id"
        name={CONTACT_US_FORM_VALUES.PHONE}
        placeholder="Your phone number"
        label="Phone*"
        value={formik.values[CONTACT_US_FORM_VALUES.PHONE]}
        onChange={formik.handleChange}
        error=""
      />
      <Input
        id="email_id"
        name={CONTACT_US_FORM_VALUES.EMAIL}
        placeholder="Your email"
        label="Email"
        value={formik.values[CONTACT_US_FORM_VALUES.EMAIL]}
        onChange={formik.handleChange}
        error=""
      />
      <Button buttonName="SEND REQUEST" type="submit" />
    </FormWrapper>
  );
}

export default ContactUs;
