import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function OrderHistory() {
  //   useEffect(() => {
  //     db.collection("users")
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           console.log(doc.id, "=>", doc.data());
  //         });
  //       })
  //       .catch((error) => {
  //         console.log("ERRRRRRROOOR", error);
  //       });
  //   }, []);

  const getOrder = () => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
        });
      })
      .catch((error) => {
        console.log("ERRRRRRROOOR", error);
      });
  };
  //   const getOrder = async () => {
  //     const querySnapshot = await getDocs(collection(db, "users"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc} => ${doc.data}`);
  //     });
  //   };
  return (
    <div className="">
      Ваши заказы
      <button onClick={getOrder}>+</button>
    </div>
  );
}
