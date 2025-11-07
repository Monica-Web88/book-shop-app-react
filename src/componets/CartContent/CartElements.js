import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <div id={product.id}>
      <div className='cartContent' key={product.id} >
        <img src={product.img} alt='product-card' />
        <div className='name'>{product.name}</div>
        <CartItemCounter product={product} />
        <div className='price'>{product.price * product.quanty}$</div>
        <div className='cart-delete-button' onClick={() => deleteProduct(product.id)}>
          ❌
        </div>
      </div>
       <div className="dash"></div>
       </div>
    );
  });
};

export default CartElements;
