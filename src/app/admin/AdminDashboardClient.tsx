"use client";

import AdminStats from "@/components/admin/AdminStats";
import Navbar from "@/components/Navbar";
import { useGetAppointments } from "@/hooks/use-appointments";
import { useGetDoctors } from "@/hooks/use-doctors";
import { useUser } from "@clerk/nextjs";
import { SettingsIcon } from "lucide-react";
import React from "react";
import DoctorsManagement from "./DoctorsManagement";
import Loader from "@/components/Loader";
import ErrorUI from "@/components/ErrorUI";
import RecentAppointments from "@/components/admin/RecentAppointments";

const AdminDashboardClient = () => {
  const { user } = useUser();
  const {
    data: doctors = [],
    isLoading: doctorLoading,
    error: doctorError,
    refetch: fetchDoctorData,
  } = useGetDoctors();
  const {
    data: appointments = [],
    isLoading: appointmentsLoading,
    error: appointmentsError,
    refetch: fetchAppointmentsData,
  } = useGetAppointments();

  // calculate stats from real data
  const stats = {
    totalDoctors: doctors.length,
    activeDoctors: doctors.filter((doc) => doc.isActive).length,
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter(
      (app) => app.status === "COMPLETED",
    ).length,
  };

  if (doctorLoading || appointmentsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (doctorError || appointmentsError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorUI
          message="Failed to load data!"
          onRetry={() => {
            fetchDoctorData();
            fetchAppointmentsData();
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-8 pt-24">
        {/* ADMIN WELCOME SECTION */}

        <div className="mb-12 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                Admin Dashboard
              </span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, {user?.firstName || "Admin"}!
              </h1>
              <p className="text-muted-foreground">
                Manage doctors, oversee appointments, and monitor your dental
                practice performance.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
              <SettingsIcon className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>

        <AdminStats
          totalDoctors={stats.totalDoctors}
          activeDoctors={stats.activeDoctors}
          totalAppointments={stats.totalAppointments}
          completedAppointments={stats.completedAppointments}
        />

        <DoctorsManagement />

        <RecentAppointments />
      </div>
    </div>
  );
};

export default AdminDashboardClient;
