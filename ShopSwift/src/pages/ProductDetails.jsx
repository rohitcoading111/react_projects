import { FaStar, FaShoppingCart, FaCheck } from "react-icons/fa"; 
import { useParams } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { useEffect } from "react"; 
import { fetchProducts } from "../redux/productSlice"; 
import { useState } from "react";
import { addToCart } from "../redux/cartSlice"; 

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1); 
  const { id } = useParams(); 
  const dispatch = useDispatch(); 

  const { products, loading, error } = useSelector((state) => state.products); 
  const cartItems = useSelector((state) => state.cart.cartItems || state.cart.items || state.cart);

  useEffect(() => { 
    if (products.length === 0) { 
      dispatch(fetchProducts()); 
    } 
  }, [dispatch, products.length]); 

  if (loading) { 
    return <h1 className="text-center py-20 text-3xl">Loading...</h1>; 
  } 

  if (error) { 
    return <h1 className="text-center py-20 text-red-600">{error}</h1>; 
  } 

  const product = products.find((item) => item.id === Number(id)); 

  if (!product) { 
    return <h1 className="text-center py-20 text-3xl">Product Not Found</h1>; 
  } 

  const isAlreadyInCart = Array.isArray(cartItems) && cartItems.some((item) => item.id === product.id);

  return ( 
    <section className="min-h-screen bg-gray-50 py-16"> 
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="grid lg:grid-cols-2 gap-16 bg-white rounded-3xl shadow-lg p-10"> 
          <div className="flex justify-center items-center bg-gray-100 rounded-2xl p-10"> 
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="w-96 h-96 object-contain hover:scale-105 transition duration-300" 
            /> 
          </div> 
          <div> 
            <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-medium capitalize"> 
              {product.category} 
            </span> 
            <h1 className="text-4xl font-bold mt-5"> 
              {product.title} 
            </h1> 
            <div className="flex items-center gap-2 mt-4"> 
              <FaStar className="text-yellow-400" /> 
              <span className="font-semibold"> 
                {product.rating} 
              </span> 
             <span className="text-gray-500">
           ({product.reviews?.length || 0} Reviews)
          </span>
            </div> 
            <h2 className="text-5xl font-bold text-violet-600 mt-8"> 
              ${product.price} 
            </h2> 
            <p className="text-gray-600 mt-8 leading-8"> 
              {product.description} 
            </p> 
            <div className="flex items-center gap-5 mt-10">
  <button
    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
    className="w-12 h-12 rounded-xl bg-gray-200 text-xl hover:bg-gray-300"
  >
    -
  </button>

  <span className="text-2xl font-semibold">{quantity}</span>

  <button
    onClick={() => setQuantity(quantity + 1)}
    className="w-12 h-12 rounded-xl bg-gray-200 text-xl hover:bg-gray-300"
  >
    +
  </button>
</div>
            <div className="flex gap-5 mt-10"> 
              <button 
                onClick={() => !isAlreadyInCart && dispatch(
  addToCart({
    ...product,
    quantity,
  })
)} 
                disabled={isAlreadyInCart}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl transition font-medium ${
                  isAlreadyInCart 
                    ? "bg-green-600 text-white cursor-not-allowed" 
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              > 
                {isAlreadyInCart ? (
                  <>
                    <FaCheck /> Added
                  </>
                ) : (
                  <>
                    <FaShoppingCart /> Add To Cart
                  </>
                )}
              </button> 

              <button className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-xl hover:bg-violet-600 hover:text-white transition"> 
                Buy Now 
              </button> 
            </div> 
          </div> 
        </div> 
        <div className="mt-24"> 
          <h2 className="text-3xl font-bold mb-10"> Related Products </h2> 
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"> 
            {products 
              .filter( 
                (item) => item.category === product.category && item.id !== product.id 
              ) 
              .slice(0, 4) 
              .map((item) => ( 
                <div key={item.id} className="bg-white rounded-2xl shadow-md p-5"> 
                  <img src={item.thumbnail} alt={item.title} className="h-40 mx-auto object-contain" /> 
                  <h3 className="mt-4 font-semibold line-clamp-2"> 
                    {item.title} 
                  </h3> 
                  <p className="text-violet-600 font-bold mt-2"> 
                    ${item.price} 
                  </p> 
                </div> 
              ))} 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default ProductDetails;
