import React from "react";
import SwitchLabels from "./SwitchLabel";

export default function UserCard({ id, email, banned, role }) {
  return (
    <div className="user__card">
      <span>id: {id}</span>
      <span>email: {email}</span>
      <span>role: {role}</span>
      <span>banned: {banned}</span>
      <SwitchLabels />
    </div>
  );
}
