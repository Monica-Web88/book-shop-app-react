import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(dataContext);

  const decrese = () => {
    const productrepeat = cart.find((item) => item.id === product.id);

    productrepeat.quanty !== 1 &&
      setCart(cart.map((item) => (item.id === product.id ? { ...product, quanty: productrepeat.quanty - 1 } : item)));
  };
  return (
    <>
    <div className="counter-container">
      <div><button className='counter-button' onClick={decrese}>
        -
      </button></div>
      <div className='product-quantity'>{product.quanty}</div>
      <div><button className='counter-button' onClick={() => buyProducts(product)}>
        +
      </button></div>
      </div>
    </>
  );
};

export default CartItemCounter;
