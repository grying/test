import BasketCart from "./BasketCart";
import { useSelector } from "react-redux";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Basket = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  console.log(totalPrice);
  const onSubmit = (data) => {
    const push = { data,items };
    console.log(push
      )
    alert(JSON.stringify(push))
    reset();
  };
  return (
    <>
      {totalPrice ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="basket">
            <div className="basket__form">
              <label className="basket__label">
                Name:
                <input
                  {...register("Name", {
                    required: true,
                    minLength: 2,
                  })}
                  className="basket__input"
                />
                {errors?.Name && <div>error</div>}
              </label>
              <label className="basket__label">
                Email:
                <input
                  {...register("Email", {
                    required: true,
                    minLength: 5,
                  })}
                  type="text"
                  className="basket__input"
                />
                {errors?.Email && <div>error</div>}
              </label>
              <label className="basket__label">
                Phone
                <input
                  {...register("Phone", {
                    required: true,
                    minLength: 9,
                    pattern: /[^0-9]/g,
                  })}
                  type="text"
                  className="basket__input"
                />
                {errors?.Phone && <div>error</div>}
              </label>
              <label className="basket__label">
                Address:
                <input
                  {...register("Address", {
                    required: true,
                    minLength: 5,
                  })}
                  type="text"
                  className="basket__input"
                />
                {errors?.Address && <div>error</div>}
              </label>
            </div>
            <div className="basket__goods">
              {items.map((item) => (
                <BasketCart {...item} />
              ))}
            </div>
          </div>
          <div className="basket__push">
            <div className="basket__total">Total price : {totalPrice} </div>

            <input type="submit" className="basket__submmit" value="Submit" />
          </div>
        </form>
      ) : (
        <div className="empty">
          <span>shopping cart is empty</span>

          <Link className="empty__back" to="/">
            back to shopping
          </Link>
        </div>
      )}
    </>
  );
};
export default Basket;
