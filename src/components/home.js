import Deal from "./deal";
import chicken from "../images/chicken.png";

const Home = () => {
  const deals = [
    {
      name: "Chicken Breast (2kg)",
      originalPrice: 7.99,
      discountedPrice: 5.99,
      imageUrl: chicken,
    },
    {
      name: "Chicken Breast (2kg)",
      originalPrice: 7.99,
      discountedPrice: 5.99,
      imageUrl: chicken,
    },
    {
      name: "Chicken Breast (2kg)",
      originalPrice: 7.99,
      discountedPrice: 5.99,
      imageUrl: chicken,
    },
    {
      name: "Chicken Breast (2kg)",
      originalPrice: 7.99,
      discountedPrice: 5.99,
      imageUrl: chicken,
    },
  ];

  return (
    <div className="home">
      <h2>Check out this week's deals!</h2>
      <div className="deals">
        {deals.map((deal, index) => {
          return (
            <Deal
              key={index}
              name={deal.name}
              originalPrice={deal.originalPrice}
              discountedPrice={deal.discountedPrice}
              imageUrl={deal.imageUrl}
            ></Deal>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
