"use client";

import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { initialRegFormValues, userRegistrationFormControls } from "../utils";
import CommonFormInput from "@/components/common-form-input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [regFormValues, setRegFormValues] = useState(initialRegFormValues);
  console.log(regFormValues);
  return (
    <div>
      <h1>Registration</h1>
      <form>
        {userRegistrationFormControls.map((controlItem, index) => (
          <div key={index}>
            <Label>{controlItem.label} </Label>
            <CommonFormInput
              currentItem={controlItem}
              value={regFormValues[controlItem.name]}
              onChange={(e) =>
                setRegFormValues({
                  ...regFormValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
        ))}
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
