import { ToastContainer, toast } from "react-toastify";

export const notifySuccess = (values, text) =>
  toast.success(`Товар ${values.name} доданий в вашу ${text}!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

export const notifyError = (values, text, position) =>
  toast.error(`${values.name} вже є в вашій ${text}!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

export const notifyErrorEmpty = () =>
  toast.error(`Введіть вашу знижку!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

export const notifyTrainingSuccess = (values) =>
  toast.success(`Книга ${values.book.title} добавлена до тренування!`, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
