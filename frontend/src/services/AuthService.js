import axios from "axios";

export const authService = {
  //Login api Service
  login: async (formData) => {
    try {
      const response = await fetch(
        "https://node-mongodb-api-4lo4.onrender.com/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        return { success: true, token: data.token };
      } else {
        return { success: false, message: data.error || data.message };
      }
    } catch (err) {
      console.error("Error during login:", err);
      return { success: false, message: "Something went wrong!" };
    }
  },
  //Register api Service
  register: async (formData) => {
    try {
      const response = await axios.post(
        "https://node-mongodb-api-4lo4.onrender.com/register",
        formData,
        {
          withCredentials: true,
        }
      );
      return { success: true, message: response.data.message };
    } catch (err) {
      if (err.response) {
        return {
          success: false,
          message:
            err.response.data.error || "An error occurred during registration",
        };
      } else if (err.request) {
        return {
          success: false,
          message: "Registration failed, please try again later",
        };
      } else {
        return {
          success: false,
          message: "an unexpected error has occured",
        };
      }
    }
  },
  //Logout api Service
  logout: async () => {
    try {
      await fetch("https://node-mongodb-api-4lo4.onrender.com/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "Aplication/json",
        },
      });
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout failed", error);
    }
  },
  //Update api Service
  updateUser: async (formData, token) => {
    try {
      const response = await axios.put(
        "https://your-api-url.com/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { success: true, message: response.data.message };
    } catch (err) {
      return {
        success: false,
        message:
          err.response?.data?.error || "An error occurred while updating.",
      };
    }
  },
};
