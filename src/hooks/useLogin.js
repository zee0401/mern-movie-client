import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../utility/axiosInstance";
import { login } from "../redux/features/authSlice";
import { useNavigate } from "react-router";

export const useLogin = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const { data } = await axiosInstance.post("/admin/login", {
        email,
        password,
      });
      return data;
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      dispatch(login(data));
      navigate("/admin/all-movies", { replace: true });
      onClose();
    },
    onError: (error) => {
      console.error("Login error:", error.response?.data || error.message);
    },
  });

  return mutation;
};

export default useLogin;
