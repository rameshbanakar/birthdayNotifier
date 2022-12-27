import React from "react";
import { useSelector } from "react-redux";
export default function Alert() {
  const alert = useSelector((state) => state.alert);
  return (
    <>
      {alert.map((a, indexOf) => (
        <div
          key={indexOf}
          style={{ backgroundColor: `${a.type}`, textAlign:"center" }}
        >
          {a.msg}
        </div>
      ))}
    </>
  );
}
