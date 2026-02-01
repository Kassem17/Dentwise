import { useAvailableDoctor } from "@/hooks/use-doctors";
import Image from "next/image";
import React from "react";

const DoctorInfo = ({
  doctorId,
  onBack,
}: {
  doctorId: string;
  onBack: () => void;
}) => {
  const { data: doctors = [] } = useAvailableDoctor();

  const doctor = doctors.find((doc) => doc.id === doctorId);

  if (!doctor)
    return (
      <div className="flex max-h-[40vh] flex-col items-center justify-center text-center px-4">
        <div className="bg-black/90 border border-orange-500/30 rounded-2xl p-6 shadow-lg max-w-md w-full">
          <div className="text-orange-500">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 w-11 mx-auto -mt-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-white mb-2">
            No Doctor Found
          </h2>

          <p className="text-sm text-gray-400 mb-6">
            We couldn’t find any doctor matching your criteria. Try adjusting
            your filters or search again.
          </p>

          <button
            onClick={onBack}
            className="bg-orange-500 hover:bg-orange-600 text-black font-medium px-6 py-2 rounded-xl transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );

  return (
    <div className="flex items-center gap-4">
      <Image
        src={doctor.imageUrl!}
        alt={doctor.name}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium">{doctor.name}</h3>
        <p className="text-sm text-muted-foreground">
          {doctor.specialty || "General Dentistry"}
        </p>
      </div>
    </div>
  );
};

export default DoctorInfo;
