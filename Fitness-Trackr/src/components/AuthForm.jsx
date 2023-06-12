import { useState } from "react";
import { login, registerUser } from "../api/users";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router-dom";

export default function AuthForm() {
  const { pathname } = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let result;
      if (pathname === "/login") {
        result = await login(username, password);
      } else {
        result = await registerUser(username, password);
      }
      console.log("Result in Component: ", result);
      setToken(result.token);
      localStorage.setItem("token", result.token);
    } catch (error) {
      console.error(error);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <h1>Authorize User</h1>
      <form className="gradient-border" id="box1" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button id="button">
          {pathname === "/login" ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}
