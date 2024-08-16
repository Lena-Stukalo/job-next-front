"use client";
import React from "react";
import { useFormik } from "formik";
import { RegisterForm } from "@/components/form/RegisterForm";
import { RegisterFormValues } from "@/types/profile";
import { Notify } from "notiflix";

const RegisterPageContainer = () => {
  const handeleSubmit = async (
    values: RegisterFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    localStorage.setItem("profile", JSON.stringify(values));
    resetForm();
    Notify.success(`Profile created`);
  };
  let formValues = {
    name: "",
    email: "",
    job_Desired: "",
    about: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
  });
  return <RegisterForm {...formik} />;
};
export default RegisterPageContainer;
