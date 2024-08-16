import { FormikProps } from "formik/dist/types";

interface ILoginForm {
  email: string;
  password: string;
}
export const LoginForm = ({
  handleChange,
  handleSubmit,
  values,
}: FormikProps<ILoginForm>) => (
  <form onSubmit={handleSubmit}>
    <h1>Sign In</h1>
    <label htmlFor="email">
      E-mail
      <input
        type="text"
        name="email"
        id="email"
        required
        onChange={handleChange}
        value={values.email}
      />
    </label>
    <label htmlFor="password">
      Password
      <input
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
