"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";

const SingleUserCard = ({ user }) => {
  async function handleDeleteUser(userId) {
    const result = await deleteUserAction(userId, "/user-management");
    console.log(result);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {user.firstName} {user.lastName}
        </CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Edit</Button>
        <Button onClick={() => handleDeleteUser(user?._id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default SingleUserCard;
