import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | string)[] = [];
  for (let i = 1; i <= totalPages; i++) {
    // show first, last, current ±1
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center mt-4", className)}
    >
      <ul className="flex items-center gap-1">
        {/* Previous button */}
        <li>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="gap-1 px-2.5"
          >
            <ChevronLeftIcon />
            <span className="hidden sm:block">Previous</span>
          </Button>
        </li>

        {/* Page buttons */}
        {pages.map((page, idx) =>
          page === "..." ? (
            <li key={idx}>
              <span className="flex items-center justify-center px-2">
                <MoreHorizontalIcon className="w-4 h-4" />
              </span>
            </li>
          ) : (
            <li key={idx}>
              <Button
                variant={page === currentPage ? "outline" : "ghost"}
                size="sm"
                onClick={() => onPageChange(Number(page))}
                className="w-8 h-8"
              >
                {page}
              </Button>
            </li>
          ),
        )}

        {/* Next button */}
        <li>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="gap-1 px-2.5"
          >
            <span className="hidden sm:block">Next</span>
            <ChevronRightIcon />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
