"use server";

import connectToDB from "@/database";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

// export async function fetchProducts() {
//   const response = await fetch('https://dummyjson.com/products')
//   const data = await response.json()
//   return data?.products;
// }

export async function addNewUserAction(userFormData, pathToRevalidate) {
  try {
    await connectToDB();
    const newlyCreatedUser = await User.create(userFormData);
    if (newlyCreatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "New user added successfully",
      };
    } else {
      return {
        success: false,
        message: "An error occurred while adding a new user",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while adding a new user",
    };
  }
}

export async function getUserAction() {
  try {
    await connectToDB();
    const users = await User.find({});
    if (users) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(users)),
      };
    } else {
      return {
        success: false,
        message: "An error occurred while getting users",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while fetching users",
    };
  }
}

export async function deleteUserAction(currentUserId, pathToRevalidate) {
  await connectToDB();
  try {
    const deletedUser = await User.findByIdAndDelete(currentUserId);

    if (deletedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User deleted successfully",
      };
    } else {
      return {
        success: false,
        message: "An error occurred while deleting user",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while fetching users",
    };
  }
}
