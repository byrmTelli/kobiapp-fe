import { jwtDecode } from "jwt-decode";

const isTokenValid = (token: string) => {
  if (!token || token == "") return false;
  try {
    const decoded = jwtDecode(token);
    if (!decoded || !decoded.exp) return false;
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};

export { isTokenValid };
