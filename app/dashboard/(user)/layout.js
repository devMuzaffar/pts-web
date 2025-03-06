"use client";
import { useSelector } from "react-redux";
import { notFound } from "next/navigation";

export default function UserLayout({ children }) {
  const { auth, role } = useSelector((state) => state.user);
  if (!auth || (role !== "user" && role !== "User")) return notFound();
  return <>{children}</>;
}