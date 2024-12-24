import AddNewUser from "@/components/add-new-user";
import React from "react";

const UserManagement = () => {
  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User management</h1>
        <AddNewUser />
      </div>
    </div>
  );
};

export default UserManagement;
