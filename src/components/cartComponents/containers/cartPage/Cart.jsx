// // import { useSelector, useDispatch } from "react-redux";
// // import {
// //   plusCartItem,
// //   minusCartItem,
// //   removeCartItem,
// //   clearCart,
// //   addSaucesToCart,
// //   plusCartSaucesItem,
// //   minusCartSaucesItem,
// //   removeCartSaucesItem,
// // } from "../../cartReducer/cartReducer";

// import { useDispatch } from "react-redux";

// // export const OnClearCart = () => {
// //   if (window.confirm("Вы действительно хотите очистить корзину?")) {
// //     dispatch(clearCart());
// //   }
// // };

// // export const OnRemoveItem = (item) => {
// //   if (window.confirm("Вы действительно хотите удалить?")) {
// //     dispatch(removeCartItem(item));
// //   }
// // };
// // export const OnRemoveSaucesItem = (item) => {
// //   if (window.confirm("Вы действительно хотите удалить?")) {
// //     dispatch(removeCartSaucesItem(item));
// //   }
// // };

// export const onPlusItem = (id) => {
//   const dispatch = useDispatch();
//   dispatch(plusCartItem(id));
// };
// export const onPlusSaucesItem = (id) => {
//   const dispatch = useDispatch();
//   dispatch(plusCartSaucesItem(id));
// };

// export const onMinusItem = (id) => {
//   const dispatch = useDispatch();
//   dispatch(minusCartItem(id));
// };
// export const onMinusSaucesItem = (id) => {
//   const dispatch = useDispatch();
//   dispatch(minusCartSaucesItem(id));
// };

// export const handleAddSaucesToCart = (id) => {
//   const dispatch = useDispatch();
//   dispatch(addSaucesToCart(id));
// };

// export default function CartContainer() {
//   const dispatch = useDispatch();

//   const onPlusItem = (id) => {
//     dispatch(plusCartItem(id));
//   };
//   const onPlusSaucesItem = (id) => {
//     dispatch(plusCartSaucesItem(id));
//   };

//   const onMinusItem = (id) => {
//     const dispatch = useDispatch();
//     dispatch(minusCartItem(id));
//   };
//   const onMinusSaucesItem = (id) => {
//     dispatch(minusCartSaucesItem(id));
//   };

//   const handleAddSaucesToCart = (id) => {
//     dispatch(addSaucesToCart(id));
//   };
// }
