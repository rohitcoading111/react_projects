const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <img src={product.image} alt="" />
    </div>
  );
};

export default ProductCard;