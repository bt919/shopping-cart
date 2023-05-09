import ShopHeader from "./shopHeader";
import ShopItem from "./shopItem";
import { useState } from "react";

const Shop = () => {
  const [nItems, setNItems] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCartHandler = (quantity, price) => {
    setTotal(total + quantity * price);
    setNItems(nItems + quantity);
  };

  return (
    <div className="shop">
      <ShopHeader numberOfItems={nItems} total={total}></ShopHeader>
      <div className="shopItems">
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
        <ShopItem onAddClick={addToCartHandler}></ShopItem>
      </div>
    </div>
  );
};

export default Shop;
