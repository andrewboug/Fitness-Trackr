import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

export default function AfterLoginHeader() {
  const { token, user, setToken } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      {token ? (
        <>
          <p>Welcome, {}</p>
          <Link className="link" to="/">
            Posts{" "}
          </Link>
          <Link className="link" to="/profile">
            Profile{" "}
          </Link>
          <button
            className="button"
            onClick={() => {
              // clear the token
              setToken(null);
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Log Out
          </button>
        </>
      ) : null}
    </div>
  );
}
