import { Outlet } from "react-router-dom";
import "./App.css";
import AuthContainer from "./components/Auth/AuthContainer";
import ParticleComponent from "./components/Common/ParticleComponent";

function App() {
  return (
    <>
     <ParticleComponent />
      <AuthContainer>
          <Outlet />
      </AuthContainer>
    </>
  );
}

export default App;
