import { useSelector } from "react-redux";

export function useAuth() {
  const { email, token, id } = useSelector((state) => {
    return state.user || {};
  });

  return {
    isAuth: !!token,
    email,
    token,
    id,
  };
}
