import { useDispatch } from "react-redux";

import { addItem, minusItem } from "../redux/slices/cartSlice";
const BasketCart = ({ id,img, name, price, count }) => {
    const dispatch = useDispatch();
  const onClickMinus = () => {
    dispatch(minusItem({ id }));
  };

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  return (
    <div className="basket__good">
      <img className="basket__img" src={img} alt="basket-img" />
      <div className="basket__box">
        <div className="basket__title">{name}</div>
        <div className="basket__price">price: {price}</div>
        <div className="basket__plus-minus">
          <div onClick={onClickPlus} className="basket__plus">
            +
          </div>
          <button
            disabled={count === 1}
            onClick={onClickMinus}
            className="basket__minus"
          >
            -
          </button>
        </div>

        <div className="basket__number" />
        {count}
      </div>
    </div>
  );
};
export default BasketCart;
