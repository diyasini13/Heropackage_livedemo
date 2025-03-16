// import { useState, useEffect } from 'react';
// import AuthPage from './components/AuthPage';
// import Body from './components/Body';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { SecretsManager } from './utils/SecretsManager';
// import "./App.css";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if a token exists in local storage on app load
//     const token = SecretsManager.getToken();
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <div className="App">
//       <Header setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
//       {isAuthenticated ? (
//         <>
//           <Body isAuthenticated={isAuthenticated} /> {/* Pass isAuthenticated as a prop */}
          
//         </>
//       ) : (
//         <AuthPage onLoginSuccess={handleLoginSuccess} />
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default App;

// -------with timer ------


// import { useState, useEffect } from 'react';
// import AuthPage from './components/AuthPage';
// import Body from './components/Body';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { SecretsManager } from './utils/SecretsManager';
// import "./App.css";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [logoutTimer, setLogoutTimer] = useState<NodeJS.Timeout | null>(null);

//   const logout = () => {
//     SecretsManager.clearToken();
//     setIsAuthenticated(false);
//     if (logoutTimer) {
//       clearTimeout(logoutTimer);
//       setLogoutTimer(null);
//     }
//   };

//   useEffect(() => {
//     // Check if a token exists in local storage on app load
//     const token = SecretsManager.getToken();
//     if (token) {
//       setIsAuthenticated(true);
//       // Set a timer to log out after 1 hour (3600000 milliseconds)
//       const timer = setTimeout(logout, 3600000);
//       setLogoutTimer(timer);
//     }
//   }, []);

//   useEffect(() => {
//     if (isAuthenticated) {
//       // If the user logs in again, clear the old timer and set a new one
//       if (logoutTimer) {
//         clearTimeout(logoutTimer);
//       }
//       const timer = setTimeout(logout, 3600000);
//       setLogoutTimer(timer);
//     }
//     return () => {
//       if (logoutTimer) {
//         clearTimeout(logoutTimer);
//       }
//     };
//   }, [isAuthenticated]);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <div className="App">
//       <Header setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
//       {isAuthenticated ? (
//         <>
//           <Body isAuthenticated={isAuthenticated} />
//         </>
//       ) : (
//         <AuthPage onLoginSuccess={handleLoginSuccess} />
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default App;



//--------------

// import { useState, useEffect } from 'react';
// import AuthPage from './components/AuthPage';
// import Body from './components/Body';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { SecretsManager } from './utils/SecretsManager';
// import "./App.css";
// // import { idToken } from 'google-auth-library';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
 
//   const GOOGLE_CLIENT_ID = "633630984866-8npcl4u89k5m0qs0t0rkc8ua002evlkb.apps.googleusercontent.com";

//   const verifyToken = async (token: string): Promise<boolean> => {
//     try {
//       const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
//       if (!response.ok) {
//         console.error("Token verification failed:", response.statusText);
//         return false;
//       }
//       const data = await response.json();
//       if (data.aud !== GOOGLE_CLIENT_ID) {
//         console.error("Token audience mismatch:", data.aud);
//         return false;
//       }
//       return true;
//     } catch (error) {
//       console.error("Error verifying token:", error);
//       return false;
//     }
//   };

//   // useEffect(() => {
//   //   const checkToken = async () => {
//   //     const token = SecretsManager.getToken();
//   //     if (token) {
//   //       const isValid = await verifyToken(token);
//   //       if (isValid) {
//   //         setIsAuthenticated(true);
//   //         const timer = setTimeout(logout, 3600000);
//   //         setLogoutTimer(timer);
//   //       } else {
//   //         SecretsManager.clearToken();
//   //         setIsAuthenticated(false);
//   //       }
//   //     }
//   //   };
//   //   checkToken();
//   // }, []);

//   // useEffect(() => {
//   //   if (isAuthenticated) {
//   //     if (logoutTimer) {
//   //       clearTimeout(logoutTimer);
//   //     }
//   //     const timer = setTimeout(logout, 3600000);
//   //     setLogoutTimer(timer);
//   //   }
//   //   return () => {
//   //     if (logoutTimer) {
//   //       clearTimeout(logoutTimer);
//   //     }
//   //   };
//   // }, [isAuthenticated]);

//   const handleLoginSuccess = async () => {
//     const token = SecretsManager.getToken();
//     if (token) {
//       const isValid = await verifyToken(token);
//       if (isValid) {
//         setIsAuthenticated(true);
//       } else {
//         SecretsManager.clearToken();
//         setIsAuthenticated(false);
//       }
//     }
//   };

//   return (
//     <div className="App">
//       <Header setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
//       {isAuthenticated ? (
//         <>
//           <Body isAuthenticated={isAuthenticated} />
//         </>
//       ) : (
//         <AuthPage onLoginSuccess={handleLoginSuccess} />
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default App;



///------------------------------------------


import { useState, useEffect } from 'react';
import AuthPage from './components/AuthPage';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import { SecretsManager } from './utils/SecretsManager';
import "./App.css";

interface TokenInfo {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  hd: string;
  email: string;
  email_verified: string;
  nbf: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: string;
  exp: string;
  jti: string;
  alg: string;
  kid: string;
  typ: string;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logoutTimer, setLogoutTimer] = useState<NodeJS.Timeout | null>(null);
  const [expiryAlertTimer, setExpiryAlertTimer] = useState<NodeJS.Timeout | null>(null);
  const GOOGLE_CLIENT_ID = "633630984866-qj00anvn6cu2kahus5ft1cnc4o8pe7dp.apps.googleusercontent.com";

  const logout = () => {
    SecretsManager.clearToken();
    setIsAuthenticated(false);
    if (logoutTimer) {
      clearTimeout(logoutTimer);
      setLogoutTimer(null);
    }
    if (expiryAlertTimer) {
      clearTimeout(expiryAlertTimer);
      setExpiryAlertTimer(null);
    }
  };

  const verifyToken = async (token: string): Promise<boolean> => {
    try {
      const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
      if (!response.ok) {
        console.error("Token verification failed:", response.statusText);
        return false;
      }
      const data: TokenInfo = await response.json();
      if (data.aud !== GOOGLE_CLIENT_ID) {
        console.error("Token audience mismatch:", data.aud);
        return false;
      }
      // Check if the token is expired
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      if (data.exp && parseInt(data.exp) < currentTime) {
        console.error("Token has expired.");
        return false;
      }

      // Set up the expiry alert timer
      const expiryTime = parseInt(data.exp) * 1000; // Convert to milliseconds
      const alertTime = expiryTime - 120000; // 2 minutes before expiry

      const timeUntilAlert = alertTime - Date.now();
      console.log("Time until alert:", timeUntilAlert);

      if (timeUntilAlert > 0) {
        const timer = setTimeout(() => {
          const refreshSession = window.confirm("Your session is about to expire in 2 minutes. Click 'OK' to refresh the session.");
          if (refreshSession) {
            window.location.reload();
            SecretsManager.clearToken();
          } else {
            // Timeout: Log out if the user doesn't click "OK" within 2 minutes
            console.log("Session expired due to inactivity.");
            logout();
          }
        }, timeUntilAlert);
        setExpiryAlertTimer(timer);

        // Set a second timer to force logout after 2 minutes if the user doesn't refresh
        const forceLogoutTimer = setTimeout(() => {
          console.log("Session expired due to inactivity (forced logout).");
          logout();
        }, timeUntilAlert + 120000); // 2 minutes after the alert

        // Store both timers in the expiryAlertTimer state
        setExpiryAlertTimer(forceLogoutTimer);
      }
      return true;
    } catch (error) {
      console.error("Error verifying token:", error);
      return false;
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const token = SecretsManager.getToken();
      if (token) {
        const isValid = await verifyToken(token);
        if (isValid) {
          setIsAuthenticated(true);
          const timer = setTimeout(logout, 3600000);
          setLogoutTimer(timer);
        } else {
          SecretsManager.clearToken();
          setIsAuthenticated(false);
        }
      }
    };
    checkToken();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
      const timer = setTimeout(logout, 3600000);
      setLogoutTimer(timer);
    }
    return () => {
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
      if (expiryAlertTimer) {
        clearTimeout(expiryAlertTimer);
      }
    };
  }, [isAuthenticated]);

  const handleLoginSuccess = async () => {
    const token = SecretsManager.getToken();
    if (token) {
      const isValid = await verifyToken(token);
      if (isValid) {
        setIsAuthenticated(true);
      } else {
        SecretsManager.clearToken();
        setIsAuthenticated(false);
      }
    }
  };

  return (
    <div className="App">
      <Header setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
      {isAuthenticated ? (
        <>
          <Body isAuthenticated={isAuthenticated} />
        </>
      ) : (
        <AuthPage onLoginSuccess={handleLoginSuccess} />
      )}
      <Footer />
    </div>
  );
}

export default App;
