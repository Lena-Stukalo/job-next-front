import { FormikProps } from "formik/dist/types";

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = ({
  handleChange,
  handleSubmit,
  values,
}: FormikProps<RegisterFormValues>) => (
  <form onSubmit={handleSubmit}>
    <h1>Sign In</h1>
    <label htmlFor="name" className="flex my-2">
      Name
      <input
        className="text-cyan-950 block ml-4"
        type="text"
        name="name"
        id="name"
        required
        onChange={handleChange}
        value={values.name}
      />
    </label>
    <label htmlFor="email" className="flex my-2">
      E-mail
      <input
        className="text-cyan-950 block ml-4"
        type="text"
        name="email"
        id="email"
        required
        onChange={handleChange}
        value={values.email}
      />
    </label>
    <label htmlFor="password" className="flex my-2">
      Password
      <input
        className="text-cyan-950 block ml-4"
        type="password"
        name="password"
        id="password"
        required
        onChange={handleChange}
        value={values.password}
      />
    </label>
    <button type="submit">Register</button>
  </form>
);
