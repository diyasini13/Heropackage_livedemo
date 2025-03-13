import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AuthPage from "./components/AuthPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Header />
          <Body />
          <Footer />
        </>
      ) : (
        <AuthPage onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}

export default App;
