import { toast } from "react-toastify";

export const useToastMessage = () => {
  const success = (msg: string) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const error = (msg: string) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const warn = (msg: string) => {
    toast.warning(msg, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const info = (msg: string) => {
    toast.info(msg, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return { success, error, warn, info };
};
