import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="admin__sidebar">
      <div className="admin__sidebar-logo">
        <Link to="/admin">
          <span className="admin-logo">Admin Panel</span>
        </Link>

        <hr />
      </div>

      <div className="admin__sidebar-content">
        <ul>
          <Link to="adminusers">
            <li>
              <AccountCircleOutlinedIcon />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/adminorders">
            <li>
              <ShoppingBagOutlinedIcon />
              <span>All orders</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
