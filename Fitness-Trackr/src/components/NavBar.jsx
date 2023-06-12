import React from "react";
import AuthForm from "./AuthForm";
import useAuth from "../hooks/useAuth";
import AfterLoginHeader from "./AfterLoginHeader";

export default function NavBar() {
  const { token } = useAuth();
  return (
    <div>
      <h1>Fitness Trackr</h1>
      {!token && <AuthForm />}
      {token && <AfterLoginHeader />}
    </div>
  );
}
