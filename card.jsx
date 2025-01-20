export const Card = ({ title, image, price }) => {
  return (
    <div className="card">
      <img className="img" src={`${image}`} alt="photo" />
      <p className="title">{title}</p>
      <p className="priceText">Цена</p>
      <p className="price">{price}</p>
    </div>
  );
};
