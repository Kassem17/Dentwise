"use client";

import {
  bookAppointment,
  getAppointments,
  getAppointmentTimeSlot,
  getUserAppointments,
  updateAppointmentStatus,
} from "@/lib/actions/appointments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useGetAppointments() {
  const result = useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
  });

  return result;
}

export const useBookedTimeSlot = (dentistId: string, date: string) => {
  const result = useQuery({
    queryKey: ["getAppointmentTimeSlot"],
    queryFn: () => getAppointmentTimeSlot(dentistId, date),
    enabled: !!dentistId && !!date, // only run the query if both are provided
  });

  return result;
};

export const useBookAppointment = () => {
  const queryClient = useQueryClient();

  const booking = useMutation({
    mutationFn: bookAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      queryClient.invalidateQueries({ queryKey: ["getUserAppointments"] });
      toast.success("Appointment booked successfully");
    },
    onError: (error) => {
      console.error("Failed to book appointment", error);
      toast.error("Failed to book an appointment");
    },
  });

  return booking;
};

export const useUserAppointments = () => {
  const result = useQuery({
    queryKey: ["getUserAppointments"],
    queryFn: getUserAppointments,
  });

  return result;
};

export const useUpdateAppointmentStatus = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: updateAppointmentStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
    onError: (error) => {
      console.log("Failed to update status", error);
      toast.error("Failed to update status");
    },
  });
  return result;
};
