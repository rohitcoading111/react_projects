const API_KEY = import.meta.env.VITE_QUIZ_API_KEY;

export const fetchQuestions = async (tag) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?category=Programming&tags=${tag}&limit=200&random=true`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }

  return await response.json();
};