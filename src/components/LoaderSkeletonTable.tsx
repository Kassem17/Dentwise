import React from "react";

interface LoaderSkeletonTableProps {
  rows?: number;
  columns?: number;
}

const LoaderSkeletonTable = ({
  rows = 5,
  columns = 4,
}: LoaderSkeletonTableProps) => {
  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} className="px-4 py-3">
                <div className="h-4 w-24 animate-pulse rounded bg-gray-300" />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-3">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoaderSkeletonTable;
