import axios from "axios";

export const fetchAPI = async (path: string, method: string, body?: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const accessToken = JSON.parse(localStorage.getItem("accessToken") as string);

  const headers = {
    "Content-Type": "application/json",
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    Authorization: `Bearer ${accessToken}`,
  };
  return await axios({
    method,
    url: `http://localhost:8080${path}`,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data: body,
    headers,
  });
};
