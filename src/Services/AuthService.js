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

const AuthProvider = {
  setAuthUser,
  getAuthUser,
  removeAuthUser,
};
export default AuthProvider;
