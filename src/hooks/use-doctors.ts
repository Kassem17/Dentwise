"use client";

import {
  createDoctor,
  getAvailableDoctors,
  getDoctors,
  updateDoctor,
} from "@/lib/actions/doctors";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetDoctors() {
  const result = useQuery({
    queryKey: ["doctors"],
    queryFn: getDoctors,
  });

  return result;
}

export const useCreateDoctor = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: createDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      console.log("Doctor created successfully");
    },
    onError: (error) => console.error("Error creating doctor:", error),
  });
  return result;
};

export const useUpdateDoctor = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: updateDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      queryClient.invalidateQueries({ queryKey: ["availableDoctors"] });
      console.log("Doctor updated successfully");
    },
    onError: (error) => console.error("Error updating doctor:", error),
  });

  return result;
};

export const useAvailableDoctor = () => {
  const result = useQuery({
    queryKey: ["availableDoctors"],
    queryFn: getAvailableDoctors,
  });

  return result;
};
