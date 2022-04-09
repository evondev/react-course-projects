import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import React from "react";

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default HomePage;
