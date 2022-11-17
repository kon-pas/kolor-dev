import { Flip, ToastOptions } from "react-toastify";

const TOAST_OPTIONS: ToastOptions = {
  position: "bottom-center",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  transition: Flip,
  theme: "dark",
};

export default TOAST_OPTIONS;
