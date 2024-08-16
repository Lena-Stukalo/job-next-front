"use client"
import React from "react";
import { useFormik } from "formik";
import { RegisterForm, RegisterFormValues } from "@/components/form/RegisterForm";


const RegisterPageContainer = () => {

  const handeleSubmit = async (values:RegisterFormValues) => {
    console.log(values)
  };
  const formValues = {
    name: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
  });
  return (
      <RegisterForm
       {...formik}
      />
  );
};
export default RegisterPageContainer;
