import React from "react";

export default function AdminWidget({ title, amount }) {
  return (
    <div className="admin__widget">
      <div className="admin__widget-top">{title}</div>
      <div className="admin__widget-bottom">{amount}</div>
    </div>
  );
}
