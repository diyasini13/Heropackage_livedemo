import { useEffect, useState } from "react";
import { SecretsManager } from "../utils/SecretsManager";

interface AuthPageProps {
  onLoginSuccess: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [googleLoaded, setGoogleLoaded] = useState(false); // New state variable

  useEffect(() => {
    // Check if the Google library is loaded
    if (!(window as any).google) {
      console.error("Google Identity Services library not loaded.");
      return;
    }
    setGoogleLoaded(true); // Set the state to true when the library is loaded
  }, []);

  useEffect(() => {
    if (googleLoaded) {
      // Initialize Google Identity Services
      const google = (window as any).google;
      if (google && google.accounts && google.accounts.id) {
        google.accounts.id.initialize({
          client_id:
          "633630984866-qj00anvn6cu2kahus5ft1cnc4o8pe7dp.apps.googleusercontent.com", // Replace with your client ID
          callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
          document.getElementById("google-signin-button"),
          { theme: "outline", size: "large" } // customization attributes
        );
        google.accounts.id.prompt(); // to display the One Tap prompt
      }
    }
  }, [googleLoaded]); // Run this effect only when googleLoaded changes

  const handleCredentialResponse = async (response: any) => {
    setLoading(true);
    setError("");
    try {
      // response.credential contains the ID token
      const idToken = response.credential;
      SecretsManager.setToken(idToken); // Store the ID token
      console.log("Google ID Token:", idToken);
      onLoginSuccess(); // Call the onLoginSuccess function to update the parent component's state
    } catch (err) {
      setError("Failed to authenticate with Google.");
      console.error("Google Auth Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">If the Google Sign-In button doesn't appear below, please refresh the page.</p>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {/* Google Sign-In Button */}
        <div id="google-signin-button"></div>
        {loading && <p>Logging in...</p>}
      </div>
    </div>
  );
};

export default AuthPage;


