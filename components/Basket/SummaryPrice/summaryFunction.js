const summaryFunction = (cards) =>
  cards.reduce(
    (totalPrice, card) =>
      totalPrice + Number(card.allprice.price - card.discount) * card.amount,
    0
  );

export default summaryFunction;
