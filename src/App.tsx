import "./App.css";
import { useState } from "react";
import AuthContainer from "./components/Auth/AuthContainer";
import LoginComponent from "./components/Auth/LoginComponent";
import RegistrationComponent from "./components/Auth/RegistrationComponent";
import ParticleComponent from "./components/Common/ParticleComponent";

function App() {
  const [signIn, toggle] = useState(true);
  return (
    <>
      <ParticleComponent />
      <AuthContainer>
        {signIn ? (
          <RegistrationComponent toggle={toggle} />
        ) : (
          <LoginComponent toggle={toggle} />
        )}
      </AuthContainer>
    </>
  );
}

export default App;
