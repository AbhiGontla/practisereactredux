import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthProvider from "../../Services/AuthService";
import { useContext } from "react";
import { UserContext } from "../../Context/UserProvider";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    // Handle form submission
    console.log("Form submitted with values:", values);
    if (values.username === "admin" && values.password === "admin") {
      //alert("Login successful");
      // Redirect or perform any other actions
      loginUser({
        username: values.username,
        password: values.password,
      });
      navigate("/SampleLayout");
    } else {
      alert("Invalid username or password");
    }
  };
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 6 characters"),
  });
  return (
    <div className="container mt-4  d-flex justify-content-center border border-2 rounded-3 shadow-sm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        
        <Form className="form-signin">
        <label className="form-label mt-3">
          <h2 className="text-center">Please Login.</h2>
        </label>
          <div className="mb-3 form-group">
            {/* <label htmlFor="username" className="form-label">
              Username
            </label> */}
            <Field
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="User Name"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3 form-group">
            {/* <label htmlFor="password" className="form-label">
              Password
            </label> */}
            <Field
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-submit">
            <button type="submit" className="btn btn-primary button-flex" fullWidth>
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
export default LoginForm;
