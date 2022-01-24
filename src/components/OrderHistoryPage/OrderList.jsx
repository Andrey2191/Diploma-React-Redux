import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchOrder } from "../../redux/slices/orderSlice";
import { useEffect } from "react";
import classNames from "classnames";

const OrderList = (userName, userEmail, userAddress, userTelephone) => {
  return (
    <div className={classNames("orderCard")}>
      <ul>
        <li>{userName}</li>
        <li>{userEmail}</li>
        <li>{userAddress}</li>
        <li>{userTelephone}</li>
      </ul>
    </div>
  );
};

export default OrderList;
