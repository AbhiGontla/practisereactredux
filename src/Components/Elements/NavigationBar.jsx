import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserProvider";

export default function NavigationBar() {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            {user && user != null ? (
              <NavLink to="/SampleLayout" className="navbar-brand">
                React Practise App
              </NavLink>
            ) : (
              <NavLink to="/home" className="navbar-brand">
                React Practise App
              </NavLink>
            )}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {user && user != null ? (
              <div className="collapse navbar-collapse" id="navbarCollapse">
                {user && user != null ? (
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                      <NavLink to="/home" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/products" className="nav-link">
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/addProduct" className="nav-link">
                        Add Product
                      </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Formik Controls
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li className="nav-item">
                          <NavLink
                            to="/addProductFormik"
                            className="dropdown-item"
                          >
                            Add Product
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {/* <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form> */}
                <label className="text-white ms-2">
                  Welcome {user.username}
                </label>

                <button
                  className="btn btn-outline-danger ms-2"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
                <NavLink to="/login" className="btn btn-outline-success">
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
