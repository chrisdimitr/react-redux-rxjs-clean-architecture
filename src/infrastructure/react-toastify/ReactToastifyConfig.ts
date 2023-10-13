import { ToastPosition, Theme } from "react-toastify";

const ReactToastifyConfig = {
  position: "top-right" as ToastPosition,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: "light" as Theme
};

export default ReactToastifyConfig;
