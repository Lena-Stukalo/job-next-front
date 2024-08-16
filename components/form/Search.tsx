"use client";
import { FormikProps } from "formik";
import { BiSearch } from "react-icons/bi";

export function Search({
  handleChange,
  handleSubmit,
  values,
}: FormikProps<{ search: string }>) {
  return (
    <form
      className="flex items-center mx-auto mb-4 justify-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search" className="block mr-2 ">
        <BiSearch size={"30px"} />
      </label>
      <input
        id="search"
        className="block w-96 text-cyan-950 p-1"
        onChange={handleChange}
        value={values.search}
      />
    </form>
  );
}
