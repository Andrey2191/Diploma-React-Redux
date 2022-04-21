import React, { useEffect } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../containers/adminSlice";
import UserCard from "./UserCard";
import AdminSidebar from "./AdminSidebar";
import AdminWidget from "./AdminWidget";
import { fetchOrder } from "../../OrderHistoryComponents/containers/orderSlice";

function AdminPage({}) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.users);
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  return (
    <div className="admin__page">
      <AdminSidebar />
      <div className="admin__main">
        <AdminWidget title="Всего пользователей" amount={users.length} />
        <AdminWidget title="Всего заказов" amount={orders.length} />
      </div>
    </div>
  );
}

export default AdminPage;
