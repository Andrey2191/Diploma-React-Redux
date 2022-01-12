import React, { useEffect } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { fetchOrder } from "../../redux/slices/orderSlice";
import OrderList from "./OrderList";

// export default function OrderHistory() {
//   const getOrder = async () => {
//     const q = query(collection(db, "users"));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   };

//   return (
//     <div className="">
//       Ваши заказы
//       <button onClick={getOrder}>+</button>
//     </div>
//   );
// }
// отрисовать на странице данные
// записывать юзеров по id

export default function OrderHistory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  return (
    <div className="">
      Ваши заказы
      <OrderList />
      <button>+</button>
    </div>
  );
}
