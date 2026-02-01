"use client";
import { syncUser } from "@/lib/actions/users";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

const UserSync = () => {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const handleUserSync = async () => {
      if (isLoaded && isSignedIn) {
        try {
          await syncUser();
        } catch (error) {
          console.error("Failed to sync User: ", error);
        }
      }
    };
    handleUserSync();
  }, [isLoaded, isSignedIn]);

  return null;
};

export default UserSync;
