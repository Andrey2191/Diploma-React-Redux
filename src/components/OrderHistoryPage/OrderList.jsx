import { useSelector } from "react-redux";

const OrderList = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <ul>
      {orders.map((order) => {
        <li>{order}</li>;
      })}
    </ul>
  );
};

export default OrderList;
