"use client";

import { Label } from "@/components/ui/label";
import React from "react";
import { userRegistrationFormControls } from "../utils";

const SignUp = () => {
  return (
    <div>
      <h1>Registration</h1>
      <form>
        {userRegistrationFormControls.map((controlItem) => (
          <div>
            <Label>{controlItem.label}</Label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SignUp;
