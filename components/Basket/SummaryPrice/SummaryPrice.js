const SummaryPrice = ({ cards = [] }) => {
  const price = cards.reduce(
    (totalLikes, card) => totalLikes + Number(card.allprice.price),
    0
  );

  return <p>{price} грн </p>;
};

export default SummaryPrice;
