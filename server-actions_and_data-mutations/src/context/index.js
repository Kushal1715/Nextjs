"use client";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserState({ children }) {
  const [currendEditedId, setCurrentEditedId] = useState(null);
  return (
    <UserContext.Provider value={{ currendEditedId, setCurrentEditedId }}>
      {children}
    </UserContext.Provider>
  );
}
