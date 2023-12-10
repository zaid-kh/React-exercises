import axios from "axios";

export const baseUrl = "https://6555ddab84b36e3a431e851b.mockapi.io/users";

export async function getUsers() {
  try {
    const response = await axios.get(baseUrl);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
