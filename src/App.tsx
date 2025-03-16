// import { useState } from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import AuthPage from "./components/AuthPage";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <>
//       {isAuthenticated ? (
//         <>
//           <Header />
//           <Body />
//           <Footer />
//         </>
//       ) : (
//         <AuthPage onLoginSuccess={() => setIsAuthenticated(true)} />
//       )}
//     </>
//   );
// }

// export default App;





import { useState, useEffect } from 'react';
import AuthPage from './components/AuthPage';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import { SecretsManager } from './utils/SecretsManager';
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if a token exists in local storage on app load
    const token = SecretsManager.getToken();
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <Header setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
      {isAuthenticated ? (
        <>
          <Body isAuthenticated={isAuthenticated} /> {/* Pass isAuthenticated as a prop */}
          
        </>
      ) : (
        <AuthPage onLoginSuccess={handleLoginSuccess} />
      )}
      <Footer />
    </div>
  );
}

export default App;

