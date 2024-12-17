class ApiService {
    constructor() {
      this.baseUrl = "http://localhost:8000/api/"; // Base URL for API endpoints
      this.headers = {
        "Content-Type": "application/json",
      };
    }
  
    // Utility function to make a POST request
    async post(endpoint, body, token = null) {
      const options = {
        method: "POST",
        headers: { ...this.headers },
        body: JSON.stringify(body),
      };
  
      // Add Authorization header if token is provided
      if (token) {
        options.headers["Authorization"] = `Bearer ${token}`;
      }
  
      try {
        const response = await fetch(`${this.baseUrl}${endpoint}`, options);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }
        return data;
      } catch (error) {
        console.error(`Error in POST ${endpoint}:`, error.message);
        throw error;
      }
    }
  
    // Login API call
    async login(email, password) {
      const endpoint = "login/";
      const body = { email, password };
      return await this.post(endpoint, body);
    }
  
    // Refresh Access Token API call
    async refreshAccessToken(refreshToken) {
      const endpoint = "token/refresh/";
      const body = { refresh_token: refreshToken };
      return await this.post(endpoint, body);
    }
  
    // Sign In (Register) API call
    async signIn(name, email, password) {
      const endpoint = "register/";
      const body = { name, email, password };
      return await this.post(endpoint, body);
    }
  
    // Verify Email API call
    async verifyEmail(email) {
      const endpoint = "verify-email/";
      const body = { email };
      return await this.post(endpoint, body);
    }
  
    // Verify OTP API call
    async verifyOTP(email, otp) {
      const endpoint = "verify-otp/";
      const body = { email, otp };
      return await this.post(endpoint, body);
    }
  }
  
  // Example usage:  
  // Example function calls (replace with actual input values)
  // api.login("user@example.com", "password123").then(console.log).catch(console.error);
  // api.refreshAccessToken("your_refresh_token").then(console.log).catch(console.error);
  // api.signIn("John Doe", "john@example.com", "password123").then(console.log).catch(console.error);
  // api.verifyEmail("user@example.com").then(console.log).catch(console.error);
  // api.verifyOTP("user@example.com", "123456").then(console.log).catch(console.error);
  
  export default ApiService;
  