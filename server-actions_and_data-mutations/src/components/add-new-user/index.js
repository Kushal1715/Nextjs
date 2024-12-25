"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserInitialFormState, userFormInput } from "@/utils";

const AddNewUser = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [userFormData, setUserFormData] = useState(addNewUserInitialFormState);

  const handleSaveButtonValid = () => {
    return Object.keys(userFormData).every(
      (key) => userFormData[key].trim() !== ""
    );
  };
  console.log(userFormData);
  return (
    <>
      <div>
        <Button onClick={() => setOpenDialog(true)}>Add New User</Button>
      </div>
      <Dialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(false);
          setUserFormData(addNewUserInitialFormState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {userFormInput.map((input, index) => (
              <div key={index} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={input.name} className="text-right">
                  {input.label}
                </Label>
                <Input
                  id={input.name}
                  name={input.name}
                  placeholder={input.placeholder}
                  className="col-span-3"
                  type={input.type}
                  value={userFormData[input.name]}
                  onChange={(event) => {
                    setUserFormData({
                      ...userFormData,
                      [input.name]: event.target.value,
                    });
                  }}
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={!handleSaveButtonValid()}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewUser;
