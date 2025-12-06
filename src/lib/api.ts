// Use environment variable for flexibility
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://portfolio-backend-tgyk.onrender.com";

/**
 * General API fetch function
 */
export async function fetchData(endpoint: string) {
  try {
    const res = await fetch(`${API_URL}/api/${endpoint}`, {
      cache: "no-store", // prevent Next.js from caching API response
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
}

/**
 * Specific function for testimonials
 */
export async function getTestimonials() {
  return fetchData("testimonials");
}
