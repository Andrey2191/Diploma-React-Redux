import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../containers/adminSlice";
import UserCard from "./UserCard";

function AdminPage({}) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.users);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log(users);
  return (
    <div className={classNames("container ")}>
      <div className={classNames("cart")}>
        <h1>Список пользователей</h1>
        <div className="admin__content">
          {users.map((user) => {
            return (
              <UserCard id={user._id} email={user.email} banned={user.banned} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
