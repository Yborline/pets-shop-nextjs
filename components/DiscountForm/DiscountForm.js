import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDiscount } from "../../redux/clothes/clothes-operations";
import { notifyErrorEmpty, notifySuccessOrder } from "../../notify/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const DiscountForm = ({ id }) => {
  const { t } = useTranslation();
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();
  console.log(discount);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(discount);
    if (discount === "" || discount === 0) {
      notifyErrorEmpty();
    } else {
      notifySuccessOrder("Знижка змінена/добавлена");
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
        {t("Discount")}
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
