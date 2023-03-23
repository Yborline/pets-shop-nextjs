import { DivPrice, Price } from "./OnSale.styled";
import makeDiscount from "../../calculation/makeDiscount";

const OnSale = ({
  price,
  discount,
  // changePrice
}) => {
  const currentPrice = makeDiscount(price, discount);
  //   changePrice(currentPrice);
  return (
    <>
      {discount === 0 ? (
        <p>{price} грн.</p>
      ) : (
        <DivPrice>
          <Price>{price} грн.</Price>
          <p>{currentPrice} грн.</p>
        </DivPrice>
      )}
    </>
  );
};

export default OnSale;
