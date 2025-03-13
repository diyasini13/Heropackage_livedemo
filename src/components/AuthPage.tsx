import { useState } from "react";
import { SecretsManager } from "../utils/SecretsManager";

// const mockApiCall = async (username: string, password: string) => {
//   return new Promise<{ token: string }>((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "admin" && password === "herop2024") {
//         resolve({ token: "jwt-token" });
//       } else {
//         reject(new Error("Invalid credentials"));
//       }
//     }, 1000);
//   });
// };

// const authenticate = async (username: string, password: string) => {
//   if (username !== "admin" || password !== "herop2024") {
//     return new Promise<{ token: string }>((resolve, reject) => {
//       setTimeout(() => {
//         reject(new Error("Invalid credentials"));
//       }, 1000);
//     });
//   } else {
//     return await fetch(
//       "https://us-central1-hero-holder.cloudfunctions.net/hero-auth/authenticate",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       }
//     ).then((response) => response.json());
//   }
// };


interface AuthPageProps {
  onLoginSuccess: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    if (!username || !password) {
      setError("Username and password are required.");
      setLoading(false);
      return;
    }

    try {
      // const response = await mockApiCall(username, password);
      const response = await SecretsManager.Authenticate(username, password);
      if (response["authenticated"]) {
        console.log(response)
        SecretsManager.setToken(response.token);
        console.log("TOKEN: ", SecretsManager.getToken());
        onLoginSuccess();
      } else {
        throw new Error("Invalid credentials")
      }

    } catch {
      setError("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
