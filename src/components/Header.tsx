import { useState } from "react";

function Header() {
  const [count, setCount] = useState(0);
  const MAX_CART_ITEMS = 15;

  function increaseCart() {
    if (count < MAX_CART_ITEMS) {
      setCount((prev) => prev + 1);
    }
  }

  function decreaseCart() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }
  return (
    <>
      <h1>Welcome to Sushi Restaurant</h1>
      <p>Items in cart: {count}</p>
      {count === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <p>Your have items in cart.</p>
      )}

      {count >= MAX_CART_ITEMS && <p>Your cart reached the max items</p>}

      <button onClick={increaseCart}>Add to cart</button>
      <button onClick={decreaseCart}>Delete from Cart</button>
    </>
  );
}

export default Header;
