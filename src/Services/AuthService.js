import axios from "axios";

function setAuthUser(user) {
  sessionStorage.setItem("authUser", JSON.stringify(user));
}
function getAuthUser() {
  const user = sessionStorage.getItem("authUser");
  return user ? JSON.parse(user) : null;
}
function removeAuthUser() {
  sessionStorage.removeItem("authUser");
}

function validateUser(user) {
  return axios
    .post("http://localhost:5000/Auth/login", JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: true, // Include credentials in the request
    })
    .then((response) => response)
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized
        alert("Unauthorized: Invalid username or password.");
      } else {
        // Handle other errors
        console.error("There was an error during login!", error);
        alert("An unexpected error occurred. Please try again later.");
      }
    });
}

const AuthProvider = {
  setAuthUser,
  getAuthUser,
  removeAuthUser,
  validateUser,
};
export default AuthProvider;
