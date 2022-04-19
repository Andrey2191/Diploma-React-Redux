import React from "react";

export default function UserCard({ id, email, banned }) {
  return (
    <div className="user__card">
      <span>id: {id}</span>
      <span>email: {email}</span>
      <span>banned: {banned}</span>
    </div>
  );
}
