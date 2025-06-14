import { createContext, useState } from "react";
import AuthProvider from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(AuthProvider.getAuthUser());
  const navigate = useNavigate();
  const loginUser = (userData) => {
    setUser(userData);
    AuthProvider.setAuthUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
    AuthProvider.removeAuthUser();
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
