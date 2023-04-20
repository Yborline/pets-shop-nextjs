const SummaryPrice = ({ cards = [], tag }) => {
  const Tag = tag || "p";
  const price = cards.reduce(
    (totalPrice, card) =>
      totalPrice + Number(card.allprice.price - card.discount) * card.amount,
    0
  );

  return <Tag>{price} грн </Tag>;
};

export default SummaryPrice;
