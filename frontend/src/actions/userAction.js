import { setTasks, setError, setUser } from "../reducers/userSlice";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const loginUser = (username, password) => async (dispatch) => {
  console.log(username, password, "userAction")
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to login");
    }
    const data = await response.json();
    console.log(data)
    dispatch(setUser(data.user));
    localStorage.setItem("userToken", data.token);
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await fetch("/api/v1/users/tasks");
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const tasks = await response.json();
    dispatch(setTasks(tasks));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
