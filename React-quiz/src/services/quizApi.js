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

export const fetchQuestions = async (
  category = "",
  limit = 10
) => {
  let url = `https://quizapi.io/api/v1/questions?limit=${limit}&random=true`;

  if (category) {
    url += `&category=${encodeURIComponent(category)}`;
  } else {
    url += "&category=Programming";
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }

  const result = await response.json();

  return result.data;
};