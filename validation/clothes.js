import * as yup from "yup";

const required = "Данне поле обов*язкове";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Не менше 2 символів")
    .matches(
      /^[^ -\s=]([a-zа-яzабвгдеёжзийклмнопрстуфхцчшщьыъэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯіїюґҐІЮЇєЄжЖA-Z0-9@$!_\s,%*\-.#?& ]{1,100})$/,
      "Поле не  може починатися з пробілу або дефісу"
    )
    .max(40, "Не більше 40 символів")
    .required(required),

  allprice: yup
    .object({
      xs: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      s: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      sm: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      m: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      ml: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      l: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      xl: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      xxl: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      xl3: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      xl4: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      xl5: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      xl6: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
      xl7: yup.object({
        price: yup.number().positive().required(required),
        opt: yup.number().positive().required(required),
        active: yup.boolean().required(required),
      }),
    })
    .required(""),
  // code: yup
  //   .string()
  //   .min(9, "Не менше 9 цифр")
  //   .max(9, "Не більше 9 цифр")
  //   .matches(
  //     /^[^-=s]([0-9])/,
  //     "Дане поле не може починатися з цифр 0/3/4/5/6/7/8/9"
  //   )
  //   .required("Данне поле обов*язкове"),
  description: yup.string().required("Данне поле обов*язкове"),
  // pages: yup
  //   .string()
  //   .max(4, "Не більше 4 цифр")
  //   .matches(/^[^-\s=]([0-9])/, "Поле не  може починатися з пробілу або дефісу")
  //   .required(""),
  active: yup.boolean().required("Данне поле обов*язкове"),
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
    .required(required),
});

export default validationSchema;
