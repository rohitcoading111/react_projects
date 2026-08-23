const API_KEY = import.meta.env.VITE_QUIZ_API_KEY;

export const fetchCategories = async () => {
  const response = await fetch(
    "https://quizapi.io/api/v1/categories"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result = await response.json();

  return result.data;
};

export const fetchQuestions = async (limit = 10) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?category=Programming&limit=${limit}&random=true`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }

  const result = await response.json();

  return result.data;
};