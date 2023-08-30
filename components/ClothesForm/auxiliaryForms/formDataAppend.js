import { useSelector } from "react-redux";

export const formDataAppend = (values, img) => {
  const data = new FormData();

  data.append("name", values.name);
  data.append("model", values.model);
  data.append("active", values.active);
  data.append("allprice[xs][price]", values.allprice.xs.price);
  data.append("allprice[xs][opt]", values.allprice.xs.opt);
  data.append("allprice[xs][active]", values.allprice.xs.active);
  data.append("allprice[s][price]", values.allprice.s.price);
  data.append("allprice[s][opt]", values.allprice.s.opt);
  data.append("allprice[s][active]", values.allprice.s.active);
  data.append("allprice[sm][price]", values.allprice.sm.price);
  data.append("allprice[sm][opt]", values.allprice.sm.opt);
  data.append("allprice[sm][active]", values.allprice.sm.active);
  data.append("allprice[m][price]", values.allprice.m.price);
  data.append("allprice[m][opt]", values.allprice.m.opt);
  data.append("allprice[m][active]", values.allprice.m.active);
  data.append("allprice[ml][price]", values.allprice.ml.price);
  data.append("allprice[ml][opt]", values.allprice.ml.opt);
  data.append("allprice[ml][active]", values.allprice.ml.active);
  data.append("allprice[l][price]", values.allprice.l.price);
  data.append("allprice[l][opt]", values.allprice.l.opt);
  data.append("allprice[l][active]", values.allprice.l.active);
  data.append("allprice[xl][price]", values.allprice.xl.price);
  data.append("allprice[xl][opt]", values.allprice.xl.opt);
  data.append("allprice[xl][active]", values.allprice.xl.active);
  data.append("allprice[xxl][price]", values.allprice.xxl.price);
  data.append("allprice[xxl][opt]", values.allprice.xxl.opt);
  data.append("allprice[xxl][active]", values.allprice.xxl.active);
  data.append("allprice[xl3][price]", values.allprice.xl3.price);
  data.append("allprice[xl3][opt]", values.allprice.xl3.opt);
  data.append("allprice[xl3][active]", values.allprice.xl3.active);
  data.append("allprice[xl4][price]", values.allprice.xl4.price);
  data.append("allprice[xl4][opt]", values.allprice.xl4.opt);
  data.append("allprice[xl4][active]", values.allprice.xl4.active);
  data.append("allprice[xl5][price]", values.allprice.xl5.price);
  data.append("allprice[xl5][opt]", values.allprice.xl5.opt);
  data.append("allprice[xl5][active]", values.allprice.xl5.active);
  data.append("allprice[xl6][price]", values.allprice.xl6.price);
  data.append("allprice[xl6][opt]", values.allprice.xl6.opt);
  data.append("allprice[xl6][active]", values.allprice.xl6.active);
  data.append("allprice[xl7][price]", values.allprice.xl7.price);
  data.append("allprice[xl7][opt]", values.allprice.xl7.opt);
  data.append("allprice[xl7][active]", values.allprice.xl7.active);
  data.append("description", values.description);
  // data.append("image", img);
  for (let file of img) {
    data.append("image", file);
  }

  return data;
};
