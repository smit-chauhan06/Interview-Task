import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginPage = () => {
  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log("User Info:", decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginPage;
