const ShopHeader = (props) => {
  return (
    <div className="shopHeader">
      <h4>{props.numberOfItems} items in cart</h4>
      <h4>Total: ${props.total.toFixed(2)}</h4>
      <button>Checkout</button>
    </div>
  );
};

export default ShopHeader;
