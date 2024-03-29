import { DivPrice, Price, P, PNormal } from "./OnSale.styled";
import makeDiscount from "../../calculation/makeDiscount";

const OnSale = ({
  price,
  discount,

}) => {
  const currentPrice = makeDiscount(price, discount);
  return (
    <>
      {discount === 0 ? (
        <PNormal>{price} грн.</PNormal>
      ) : (
        <DivPrice>
          <Price>{price} грн.</Price>
          <P>{currentPrice} грн.</P>
        </DivPrice>
      )}
    </>
  );
};

export default OnSale;
