import Chicken from "../images/chicken.png";
import { useState } from "react";

const ShopItem = (props) => {
  const price = 5.99;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);

  const minusHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotal(total - price);
    }
  };

  const plusHandler = () => {
    setQuantity(quantity + 1);
    setTotal(total + price);
  };

  const addHandler = () => {
    props.onAddClick(quantity, price);
    setQuantity(1);
    setTotal(price);
  };

  return (
    <div className="shopItem">
      <h4>Chicken Breast (2kg)</h4>
      <div className="pictureDescription">
        <img src={Chicken} alt="chicken breast in package"></img>
        <p>Sourced locally from canadian farms. GMO free.</p>
      </div>
      <div className="purchaseMenu">
        <button onClick={minusHandler}>-</button>
        <p>{quantity}</p>
        <button onClick={plusHandler}>+</button>
        <h4>${total.toFixed(2)}</h4>
        <button onClick={addHandler}>Add to cart</button>
      </div>
    </div>
  );
};

export default ShopItem;
