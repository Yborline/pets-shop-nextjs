import { Field, Formik, FormikProps } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addClothes,
  fetchClothes,
} from "../../redux/clothes/clothes-operations";
import {
  Form,
  DivPrice,
  DivTop,
  Label,
  TextArea,
  InputImg,
  DivInputTop,
} from "./ClothesForm.styled";
import LabelInput from "./LabelInput/LabelInput";
import { formDataAppend } from "./auxiliaryForms/formDataAppend";
import { options } from "./auxiliaryForms/options";
import Button from "../Button/Button";
import { DivInput } from "./LabelInput/LabelInput.styled";
import { getClothes } from "../../redux/clothes/clothes-selector";
import { useEffect } from "react";
import validationSchema from "../../validation/clothes";

const CLothesForm = () => {
  const dispatch = useDispatch();
  const clothes = useSelector(getClothes);
  const [img, setImage] = useState(null);

  // useEffect(() => {
  //   dispatch(fetchClothes());
  // }, [dispatch]);

  return (
    <Formik
      initialValues={{
        name: "",
        code: "",
        allprice: {
          xs: { price: "", opt: "", active: false },
          s: { price: "", opt: "", active: false },
          sm: { price: "", opt: "", active: false },
          m: { price: "", opt: "", active: false },
          ml: { price: "", opt: "", active: false },
          l: { price: "", opt: "", active: false },
          xl: { price: "", opt: "", active: false },
          xxl: { price: "", opt: "", active: false },
          xl3: { price: "", opt: "", active: false },
          xl4: { price: "", opt: "", active: false },
          xl5: { price: "", opt: "", active: false },
          xl6: { price: "", opt: "", active: false },
          xl7: { price: "", opt: "", active: false },
        },

        // price: {},
        active: false,
        model: "",
        description: "",
        // image: {},
      }}
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.name) {
      //     errors.name = "Required";
      //   }

      //   if (!values.code) {
      //     errors.code = "Required";
      //   } else if (/^[0-9]{9}$/i.test(values.code))
      //     if (!values.model) {
      //       errors.model = "Required";
      //     }
      //   // if (!values.price) {
      //   //   errors.price = "Required";
      //   // }
      //   if (!values.active) {
      //     errors.active = "Required";
      //   }
      //   if (!values.description) {
      //     errors.description = "Required";
      //   }
      //   if (!values.allprice) {
      //     errors.allprice = "Required";
      //   }
      //   return errors;
      // }}
      alidateOnBlur
      validationSchema={validationSchema}
      onSubmit={(values, formikProps) => {
        console.log(clothes);
        const exit = clothes.find((item) => item.code === values.code);
        if (exit) {
          alert("Такой код уже есть");
          return;
        }
        dispatch(addClothes(formDataAppend(values, img)));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        /* and other goodies */
      }) => (
        <Form
          id="form"
          encType="multipart/form-data"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <DivTop>
            <DivInputTop>
              <Label>image</Label>
              <InputImg
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }}
              />
              {errors.image && touched.image && errors.image}
            </DivInputTop>
            <DivInputTop>
              <Label>name</Label>
              <input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </DivInputTop>
            <DivInputTop>
              <Label>code</Label>
              <input
                type="text"
                name="code"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.code}
              />
              {errors.code && touched.code && errors.code}
            </DivInputTop>
            <DivInputTop>
              <Label>model</Label>
              <Field component="select" name="model">
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              {errors.model && touched.model && errors.model}
            </DivInputTop>
            <DivInputTop>
              <Label>active</Label>
              <input
                type="checkbox"
                name="active"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.active}
              />
              {errors.active && touched.active && errors.active}
            </DivInputTop>
            <DivInputTop>
              <Label>description</Label>
              <TextArea
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && errors.description}
            </DivInputTop>
          </DivTop>
          <DivPrice>
            <LabelInput
              name="xs"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.xs}
              valueError={values}
              // errors={errors.allprice.xs}
              // touched={errors.allprice.xs}
            />
            <LabelInput
              name="s"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.s}
              // errors={errors.allprice.s}
              // touched={errors.allprice.s}
            />
            <LabelInput
              name="sm"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.sm}
              // errors={errors.allprice.sm}
              // touched={errors.allprice.sm}
            />

            <LabelInput
              name="m"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.m}
              // errors={errors.allprice.m}
              // touched={errors.allprice.m}
            />
            <LabelInput
              name="ml"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.ml}
              // errors={errors.allprice.ml}
              // touched={touched.allprice.ml}
            />
            <LabelInput
              name="l"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.l}
              // errors={errors.allprice.l}
              // touched={touched.allprice.l}
            />
            <LabelInput
              name="xl"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.xl}
              // errors={errors.allprice.xl}
              // touched={touched.allprice.xl}
            />
            <LabelInput
              name="xxl"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.xxl}
              // errors={errors.allprice.xxl}
              // touched={touched.allprice.xxl}
            />
            <LabelInput
              name="xl3"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.xl3}
              // errors={errors.allprice.xl3}
              // touched={touched.allprice.xl3}
            />
            <LabelInput
              name="xl4"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.xl4}
              // errors={errors.allprice.xl4}
              // touched={touched.allprice.xl4}
            />
            <LabelInput
              name="xl5"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.xl5}
              // errors={errors.allprice.xl5}
              // touched={touched.allprice.xl5}
            />
            <LabelInput
              name="xl6"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.xl6}
              // errors={errors.allprice.xl6}
              // touched={touched.allprice.xl6}
            />
            <LabelInput
              name="xl7"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.allprice.xl7}
              // errors={errors.allprice.xl7}
              // touched={touched.allprice.xl7}
            />
          </DivPrice>
          {/* <select
            nema="model"
            type="model"
            value={values.model}
            onBlur={handleBlur}
            onChange={handleChange}
          > */}{" "}
          {/* {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))} */}
          {/* </select> */}
          <Button
            marginT="50px;"
            width="100%"
            height="30px"
            type="submit"
            text="Submit"
            // disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

export default CLothesForm;
