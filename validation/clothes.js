import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Не менше 2 символів")
    .matches(
      /^[^ -\s=]([a-zа-яzабвгдеёжзийклмнопрстуфхцчшщьыъэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯіїюґҐІЮЇєЄжЖA-Z0-9@$!_\s,%*\-.#?& ]{1,100})$/,
      "Поле не  може починатися з пробілу або дефісу"
    )
    .max(40, "Не більше 40 символів")
    .required(""),

  allprice: yup.object().required(""),
  code: yup
    .string()
    .min(9, "Не менше 9 цифр")
    .max(9, "Не більше 9 цифр")
    .matches(
      /^[^-=s]([0-9])/,
      "Дане поле не може починатися з цифр 0/3/4/5/6/7/8/9"
    )
    .required(""),
  description: yup.string().required("Данне поле обов*язкове"),
  // pages: yup
  //   .string()
  //   .max(4, "Не більше 4 цифр")
  //   .matches(/^[^-\s=]([0-9])/, "Поле не  може починатися з пробілу або дефісу")
  //   .required(""),
  active: yup.boolean(),
  model: yup
    .string()
    .oneOf([
      "overall",
      "vest",
      "blanket",
      "jacket",
      "suit",
      "skinny",
      "bomber",
      "sweatshirt",
      "trousers",
      "hats",
      "scarves",
      "tShirt",
      "singlet",
      "shirt",
      "embroidery",
      "dress",
      "skirt",
      "briefs",
    ])
    .required(""),
});

export default validationSchema;
