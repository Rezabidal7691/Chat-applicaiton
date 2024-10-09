import React from "react";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";
export default function LogoutButton() {
  const { isLoading, logout } = useLogout();
  return (
    <div className="sticky z-[10000] text-xl text-slate-400 bg-base-100 p-1 rounded-full  cursor-pointer bottom-0 right-2">
      {isLoading ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        <CiLogout onClick={logout} />
      )}
    </div>
  );
}
