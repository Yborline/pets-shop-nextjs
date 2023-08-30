import { Input, DivInput } from "./LabelInput.styled";

const LabelInput = ({
  name,
  handleChange,
  handleBlur,
  value,
  errors = "",
  touched = "",
}) => {
  return (
    <div>
      <DivInput>
        <p>{`${name} price`}</p>
        <label>price</label>
        <Input
          type="number"
          min="1"
          name={`allprice.${name}.price`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value.price}
        />

        {errors.price && touched.price && errors.price}
      </DivInput>
      <DivInput>
        <label>opt</label>
        <Input
          type="number"
          min="1"
          name={`allprice.${name}.opt`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value.opt}
        />
        {errors.opt && touched.opt && errors.opt}
      </DivInput>
      <DivInput>
        <label>active</label>
        <Input
          type="checkbox"
          min="1"
          name={`allprice.${name}.active`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value.active}
        />
        {errors.active && touched.active && errors.active}
      </DivInput>
    </div>
  );
};

export default LabelInput;
