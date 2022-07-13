import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./Cart";

const Home = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios 
      .get("https://62cc1f268042b16aa7c956e2.mockapi.io/items")
      .then((e) => setItem(e.data));
  }, []);
  console.log(item);
  return (
    <section className="products">
      <div className="products__shops">
        <div className="products__shops-title">
          shops:
          <div className="products__shops-box">
            <ul className="products__list">
              <li className="products__list-item">Mc Donny</li>
              <li className="products__list-item">KFC</li>
              <li className="products__list-item">KFC</li>
              <li className="products__list-item">KFC</li>
              <li className="products__list-item">KFC</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="products__goods">
        {item.map(item =>
          <Cart {...item}/>
        )}
      </div>
    </section>
  );
};
export default Home;
