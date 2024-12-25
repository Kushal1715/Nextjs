"use server";

import connectToDB from "@/database";
import User from "@/models/user";

// export async function fetchProducts() {
//   const response = await fetch('https://dummyjson.com/products')
//   const data = await response.json()
//   return data?.products;
// }

export async function addNewUserAction(userFormData) {
  try {
    await connectToDB();
    const newlyCreatedUser = await User.create(userFormData);
    if (newlyCreatedUser) {
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
