import { createContext, useState } from "react";
import AuthProvider from "../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../redux/store/store";
import { AuthAction } from "../redux/Actions/auth.action";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(AuthProvider.getAuthUser());
  //const user = useSelector((state) => state.authReducer.currentUser);
  const navigate = useNavigate();
  const loginUser = (userData) => {
    setUser(userData);
    AuthProvider.setAuthUser(userData);
   // store.dispatch(AuthAction.login(userData));
  };

  const logoutUser = () => {
    setUser(null);
    AuthProvider.removeAuthUser();
    //store.dispatch(AuthAction.logout());
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
