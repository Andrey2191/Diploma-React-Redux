import React, { useEffect } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { fetchOrder } from "../../redux/slices/orderSlice";
import OrderList from "./OrderList";
import { useSelector } from "react-redux";

export default function OrderHistory() {
  return <div className=""></div>;
}
