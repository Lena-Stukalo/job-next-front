import { RegisterFormValues } from "@/types/profile";
import { FormikProps } from "formik/dist/types";

export const RegisterForm = ({
  handleChange,
  handleSubmit,
  values,
}: FormikProps<RegisterFormValues>) => (
  <form onSubmit={handleSubmit} className="w-3/6 mx-auto">
    <h1 className="text-center">Sign In</h1>
    <label htmlFor="name" className="flex my-2 justify-between">
      Name
      <input
        className="text-cyan-950 block ml-4 min-w-64"
        type="text"
        name="name"
        id="name"
        required
        onChange={handleChange}
        value={values.name}
      />
    </label>
    <label htmlFor="job_Desired" className="flex my-2 justify-between">
      Desired job
      <input
        className="text-cyan-950 block ml-4 min-w-64"
        type="text"
        name=""
        id="job_Desired"
        required
        onChange={handleChange}
        value={values.job_Desired}
      />
    </label>

    <label htmlFor="email" className="flex my-2 justify-between">
      E-mail
      <input
        className="text-cyan-950 block ml-4 min-w-64"
        type="text"
        name="email"
        id="email"
        required
        onChange={handleChange}
        value={values.email}
      />
    </label>

    <label htmlFor="about" className="flex my-2 justify-between">
      About you
      <textarea
        className="text-cyan-950 block ml-4 min-w-64"
        name=""
        id="about"
        required
        onChange={handleChange}
        value={values.about}
      />
    </label>
    <button
      type="submit"
      className=" block mx-auto bg-cyan-700 p-2 cursor-pointer rounded-lg"
    >
      Register
    </button>
  </form>
);
