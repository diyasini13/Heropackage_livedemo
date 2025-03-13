export class SecretsManager {
  private static token: string | null = null;
  // private static baseUrl = "https://hero-holder-36504696968.us-central1.run.app/hero-auth";


  public fetchSecret() {

  }

  static setToken(token: string) {
    this.token = token;
  }

  static getToken() {
    return this.token;
  }

  static clearToken() {
    this.token = null;
  }

  static async Authenticate(username: string, password: string) {
    // if (username !== "admin" || password !== "herop2024") {
    //   return new Promise<{ token: string }>((resolve, reject) => {
    //     setTimeout(() => {
    //       reject(new Error("Invalid credentials"));
    //     }, 1000);
    //   });
    // } else {
    //   return await fetch(
    //     this.baseUrl + "/authenticate",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ username, password }),
    //     }
    //   ).then((response) => response.json());
    // }
    return await fetch(
      "https://us-central1-hero-holder.cloudfunctions.net/hero-auth/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    ).then((response) => response.json());
  };

  static async FetchConfig(fileName: string) {
    return await fetch(
      "https://hero-landing-content.storage.googleapis.com/" + fileName,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());
  };


  // private generateSimpleJWT(payload: string, secretKey: string): string {
  //   // Create a JSON Web Token with only an expiration time claim
  //   const token = jwt.sign(
  //     payload, // No payload
  //     secretKey,
  //     { expiresIn: '1h' } // Expiration time
  //   );

  //   console.log(token);
  //   return token;
  // }
}