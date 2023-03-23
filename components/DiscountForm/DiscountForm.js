import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDiscount } from "../../redux/clothes/clothes-operations";
import { notifyErrorEmpty } from "../../notify/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DiscountForm = ({ id }) => {
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();
  console.log(discount);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (discount === "") {
      notifyErrorEmpty();
    } else {
      const discountState = { discount };

      dispatch(updateDiscount({ id, discountState }));
    }
  };

  const handleChange = (e) => {
    setDiscount(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cкидка
        <input
          type="number"
          min="0"
          value={discount}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Ok</button>
      <ToastContainer />
    </form>
  );
};

export default DiscountForm;
