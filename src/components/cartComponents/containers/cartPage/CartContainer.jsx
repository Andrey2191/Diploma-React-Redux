import { useDispatch } from "react-redux";
import Cart from "../../components/cartPage/Cart";
import CartSaucesItem from "../../components/cartSaucesItem/cartSaucesItem";
import {
  plusCartItem,
  minusCartItem,
  removeCartItem,
  clearCart,
  addSaucesToCart,
  plusCartSaucesItem,
  minusCartSaucesItem,
  removeCartSaucesItem,
} from "../cartReducer/cartReducer";

export default function CartContainer() {
  const dispatch = useDispatch();

  const onClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (item) => {
    if (window.confirm("Вы действительно хотите удалить?")) {
      dispatch(removeCartItem(item));
    }
  };
  const onRemoveSaucesItem = (item) => {
    if (window.confirm("Вы действительно хотите удалить?")) {
      dispatch(removeCartSaucesItem(item));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };
  const onPlusSaucesItem = (id) => {
    dispatch(plusCartSaucesItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };
  const onMinusSaucesItem = (id) => {
    dispatch(minusCartSaucesItem(id));
  };

  const handleAddSaucesToCart = (id) => {
    dispatch(addSaucesToCart(id));
  };
  console.log(onPlusItem);
  return (
    <Cart
      onClearCart={onClearCart}
      onRemoveItem={onRemoveItem}
      onRemoveSaucesItem={onRemoveSaucesItem}
      onPlusItem={onPlusItem}
      onPlusSaucesItem={onPlusSaucesItem}
      onMinusItem={onMinusItem}
      onMinusSaucesItem={onMinusSaucesItem}
      handleAddSaucesToCart={handleAddSaucesToCart}
    />
  );
}
