const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getToken = () => localStorage.getItem("accessToken");

const request = async (path, options = {}) => {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.message || "Request failed");
  }

  return result.data;
};

export const saveSession = ({ token, user }) => {
  localStorage.setItem("accessToken", token);
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const registerUser = (user) =>
  request("/auth/register", {
    method: "POST",
    body: JSON.stringify(user),
  });

export const loginUser = (credentials) =>
  request("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

export const fetchCategories = async () => {
  const result = await request("/questions?limit=50");
  const categories = [...new Set(result.map((question) => question.category))];
  return categories.map((name) => ({ id: name, name, quizCount: 0 }));
};

export const fetchQuestions = (category = "", limit = 10) => {
  const params = new URLSearchParams({ limit: String(limit) });
  if (category) params.set("category", category);
  return request(`/questions/random?${params.toString()}`);
};

export const gradeQuestions = (answers) =>
  request("/questions/grade", {
    method: "POST",
    body: JSON.stringify({ answers }),
  });

export const saveResult = (result) =>
  request("/results", {
    method: "POST",
    body: JSON.stringify(result),
  });

export const fetchResults = () => request("/results");