import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../containers/adminSlice";
import AdminSidebar from "./AdminSidebar";
import UserCard from "./UserCard";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="admin__page">
      <AdminSidebar />
      <div className="admin__main-users">
        {users.map((user) => {
          return user.roles.map((role) => {
            return (
              <UserCard
                key={user._id}
                id={user._id}
                email={user.email}
                banned={""}
                role={role}
              />
            );
          });
        })}
      </div>
    </div>
  );
}
