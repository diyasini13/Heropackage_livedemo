export class SecretsManager {
  private static token: string | null = null;

  public static setToken(token: string) {
    SecretsManager.token = token;
    localStorage.setItem("token", token); // Store in local storage
  }

  public static getToken(): string | null {
    // if (!SecretsManager.token) {
      SecretsManager.token = localStorage.getItem("token");
      console.log("Token:", SecretsManager.token);
    
    return SecretsManager.token;
  }

  public static clearToken() {
    SecretsManager.token = null;
    localStorage.removeItem("token");
  }

  static async FetchConfig(fileName: string) {
    try {
      const response = await fetch(
        "https://hero-demo-content.storage.googleapis.com/" + fileName,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${SecretsManager.getToken()}`, // Remove the Authorization header
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching config:", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
}
