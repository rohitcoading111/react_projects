const API_KEY = import.meta.env.VITE_QUIZ_API_KEY;

export const fetchQuestions = async (tag, limit = 50) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?category=Programming&limit=50&random=true`,
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

  console.log("Total available:", result.meta.total);
  console.log("Questions received:", result.data.length);

  return result.data;
};