import CartItem from "../../components/cartItem/CartItem";

export default function CartItemContainer({
  id,
  name,
  type,
  size,
  totalPrice,
  totalCount,
  onRemove,
  onMinus,
  onPlus,
  imageUrl,
}) {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <CartItem
      id={id}
      name={name}
      type={type}
      size={size}
      totalPrice={totalPrice}
      totalCount={totalCount}
      onRemove={onRemove}
      onMinus={onMinus}
      onPlus={onPlus}
      imageUrl={imageUrl}
      handleRemoveClick={handleRemoveClick}
      handlePlusItem={handlePlusItem}
      handleMinusItem={handleMinusItem}
    />
  );
}
