const Deal = (props) => {
  return (
    <div className="deal">
      <h2>{props.name}</h2>
      <img src={props.imageUrl} alt="chicken breast"></img>
      <div className="prices">
        <h3>${props.originalPrice}</h3>
        <h3>${props.discountedPrice}</h3>
      </div>
    </div>
  );
};

export default Deal;
