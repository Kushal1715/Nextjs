import { getUserAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";
import React from "react";

const UserManagement = async () => {
  const result = await getUserAction();
  console.log(result);
  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User management</h1>
        <AddNewUser />
      </div>
      {result && result.data && result.data.length > 0 ? (
        result.data.map((user, index) => (
          <SingleUserCard user={user} key={index} />
        ))
      ) : (
        <h1>No users found. Please add user</h1>
      )}
    </div>
  );
};

export default UserManagement;
