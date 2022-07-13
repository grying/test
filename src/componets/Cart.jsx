import {  useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const Cart = ({ img, name, id,price }) => {
 const  dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      img,
      name,
      price,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="good">
      <img src={img} alt="good" className="good__img" />
      <div className="good__title">{name}</div>
      <div onClick={onClickAdd} className="button">
        Add to Cart
      </div>
    </div>
  );
};
export default Cart;
