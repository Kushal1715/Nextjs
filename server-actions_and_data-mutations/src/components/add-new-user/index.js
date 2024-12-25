"use client";
import React, { useEffect, useState } from "react";
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
import { addNewUserAction, getUserAction } from "@/actions";

const AddNewUser = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [userFormData, setUserFormData] = useState(addNewUserInitialFormState);

  const handleSaveButtonValid = () => {
    return Object.keys(userFormData).every(
      (key) => userFormData[key].trim() !== ""
    );
  };

  const handleUserFormAction = async () => {
    const result = await addNewUserAction(userFormData, "/user-management");
    setOpenDialog(false);
    setUserFormData(addNewUserInitialFormState);
  };

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
          <form action={handleUserFormAction} className="grid gap-4 py-4">
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
            <DialogFooter>
              <Button type="submit" disabled={!handleSaveButtonValid()}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewUser;
