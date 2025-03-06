"use client";
import { useSelector } from "react-redux";
import { notFound } from "next/navigation";

export default function AdminLayout({ children }) {
  const { auth, role } = useSelector((state) => state.user);
  if (!auth || (role !== "admin" && role !== "Admin")) return notFound();
  return <>{children}</>;
}