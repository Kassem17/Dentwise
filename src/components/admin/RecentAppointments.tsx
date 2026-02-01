import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  useGetAppointments,
  useUpdateAppointmentStatus,
} from "@/hooks/use-appointments";
import LoaderSkeletonTable from "../LoaderSkeletonTable";
import ErrorUI from "../ErrorUI";
import Image from "next/image";
import { Pagination } from "../ui/pagination";

const PAGE_SIZE = 5;

const RecentAppointments = () => {
  const { data: appointments = [], isLoading, isError } = useGetAppointments();
  const updateStatusMutation = useUpdateAppointmentStatus();

  const [currentPage, setCurrentPage] = useState(1);

  const handleToggleAppointmentStatus = (appointmentId: string) => {
    const appointment = appointments.find((app) => app.id === appointmentId);
    const newStatus =
      appointment?.status === "CONFIRMED" ? "COMPLETED" : "CONFIRMED";

    updateStatusMutation.mutate({ id: appointmentId, status: newStatus });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return (
          <Badge className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
            Confirmed
          </Badge>
        );
      case "COMPLETED":
        return (
          <Badge className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
            Completed
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">
            {status}
          </Badge>
        );
    }
  };

  if (isLoading) return <LoaderSkeletonTable rows={6} columns={6} />;
  if (isError) return <ErrorUI />;

  const totalPages = Math.ceil(appointments.length / PAGE_SIZE);
  const paginatedAppointments = appointments.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <Card className="shadow-lg rounded-xl overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Calendar className="h-5 w-5 text-primary" />
          Recent Appointments
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Monitor and manage all patient appointments
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedAppointments.map((appointment) => (
                <TableRow
                  key={appointment.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {appointment.patientName}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {appointment.patientEmail}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="flex items-center gap-2 font-medium">
                    <Image
                      src={appointment.doctorImageUrl}
                      width={28}
                      height={28}
                      alt="doctor-image"
                      className="rounded-full"
                    />
                    {appointment.doctorName}
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {new Date(appointment.date).toLocaleDateString()}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {appointment.time}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell>{appointment.reason}</TableCell>

                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleToggleAppointmentStatus(appointment.id)
                      }
                      className="h-8 px-3"
                    >
                      {getStatusBadge(appointment.status)}
                    </Button>
                  </TableCell>

                  <TableCell className="text-right text-xs text-muted-foreground">
                    Click status to toggle
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentAppointments;
