const SummaryPrice = ({ cards = [] }) => {
  const price = cards.reduce(
    (totalPrice, card) =>
      totalPrice + Number(card.allprice.price - card.discount) * card.amount,
    0
  );

  return <p>{price} грн </p>;
};

export default SummaryPrice;
