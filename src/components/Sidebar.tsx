import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full w-64 border-r-2 border-gray-500 p-4">
      <Link className="block py-2 px-4 rounded " href="/users">
        Users
      </Link>
    </div>
  );
};

export default Sidebar;
