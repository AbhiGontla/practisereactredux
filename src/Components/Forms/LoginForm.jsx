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
    console.log("Form submitted with values:", values);
    if (values.username === "admin" && values.password === "admin") {
      //alert("Login successful");
      // Redirect or perform any other actions
      loginUser({
        userName: values.username,
        password: values.password,
      });
      navigate("/SampleLayout");
    } else {
      alert("Invalid username or password");
    }
    // AuthProvider.validateUser(values).then((response) => {
    //   if (response && response.status === 200) {
    //     loginUser(response.data);
    //     navigate("/SampleLayout");
    //   } else {
    //     alert("Invalid username or password");
    //   }
    // });
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
    <div className="container d-flex justify-content-center align-center pt-5">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <div className="border p-3 rounded-3 border-2">
        <div className="text-center mb-4 ">
          <img
            src="./src/assets/loginimage.webp" // Replace with your logo URL
            alt="Logo"
            className="img-fluid rounded-circle"
          />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form >
           
            <div className="mb-3">
            
              <Field
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="mb-3">
           
              <Field
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{
                  backgroundColor: "#007bff",
                  borderColor: "#007bff",
                  fontWeight: "bold",
                }}
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
        </div>
       
      </div>
    </div>
  );
}

export default LoginForm;
