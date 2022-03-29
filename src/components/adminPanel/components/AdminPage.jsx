import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../containers/adminSlice";

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
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
