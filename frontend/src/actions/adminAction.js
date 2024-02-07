import { setAdmin, setError } from "../reducers/adminSlice";


const API_BASE_URL = import.meta.env.VITE_BASE_URL;
// console.log(API_BASE_URL)

export const loginAdmin =
  (adminname, password, adminKey) => async (dispatch) => {
    // console.log(adminname, password, adminKey);
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adminname: adminname,
          password: password,
          specialKey: adminKey,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to login admin");
      }
      const adminData = await response.json();
      // console.log(adminData)
      dispatch(setAdmin(adminData.admin));
      localStorage.setItem("userToken", adminData.token);
      // console.log("Success:", adminData);
    } catch (error) {
      dispatch(setError(error.message));
      console.error("Error:", error);
    }
  };

export const regsiterAdmin =
  (adminname, email, password, specialKey) => async (dispatch) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({adminname: adminname, email: email, password: password, specialKey: specialKey}),
      });

      const token = await response.json();
      console.log("Success:", token);
      localStorage.setItem("adminToken", token)
    } catch (error) {
      console.error("Error:", error);
    }
  };

export const assignTask = (username, description) => async (dispatch) => {
  try {
    const response = await fetch("/api/v1/admin/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(username, description),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getUsersData = () => async (dispatch) => {
  try {
    const response = await fetch("/api/v1/admin/users");
    const userData = await response.json();
  } catch (error) {
    console.log("Error:", error);
  }
};
