import { getUserAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";
import React from "react";

const UserManagement = async () => {
  const result = await getUserAction();
  console.log(result);
  return (
    <div className="p-20 w-full">
      <div className="flex justify-between">
        <h1>User management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {result && result.data && result.data.length > 0 ? (
          result.data.map((user, index) => (
            <SingleUserCard user={user} key={index} />
          ))
        ) : (
          <h1>No users found. Please add user</h1>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
