import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("Має бути рядком")
    .min(3, "Занадто коротке ім'я. Ім'я має містити від 3 до 100 символів")
    .max(100, "Занадто довге ім'я. Ім'я має містити від 3 до 100 символів")
    .matches(
      /^[^\s~!@#$%^&*()][\w\d\s!А-Яа-яїі@#$%^&*()]{3,100}$/,
      "Ім'я має бути валідним"
    )
    .required("Це поле обов'язкове"),
  surname: yup
    .string()
    .typeError("Має бути рядком")
    .min(3, "Занадто коротке ім'я. Ім'я має містити від 3 до 100 символів")
    .max(100, "Занадто довге ім'я. Ім'я має містити від 3 до 100 символів")
    .matches(
      /^[^\s~!@#$%^&*()][\w\d\s!А-Яа-яїі@#$%^&*()]{3,100}$/,
      "Прізвище має бути валідним"
    )
    .required("Це поле обов'язкове"),
  email: yup
    .string()
    .min(10, "Занадто короткий Email. Email має містити від 10 до 63 символів")
    .max(63, "Занадто довгий Email. Email має містити від 3 до 63 символів")
    .matches(
      /^[^-.#!?,%$&^*()][\w-.#!?,%$&^*()]+[^-.#!?,%$&^*()]@([\w-]+\.)+[\w-.][^-.,!?#$]{1,4}$/,
      "Email має бути валідним"
    )
    .required("Це поле обов'язкове"),
  phone: yup
    .string()
    .min(10, "Занадто короткий номер телефону. Телефон має містити 10 символів")
    .max(10, "Занадто довгий номер телефону. Телефон має містити 10 символів")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Телефон має бути валідним"
    )
    .required("Це поле обов'язкове"),
});

export default validationSchema;
