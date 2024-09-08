"use client";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { FC, ReactNode, useMemo } from "react";

export interface Pagination {
  total: number;
  current: number;
  onPageChange?: (page: number) => void;
}

interface PaginationProps {
  pagination: Pagination;
}

export const Pagination: FC<PaginationProps> = ({
  pagination: { total, current, onPageChange },
}) => {
  const paginationButtons = useMemo(() => {
    const buttons = [];
    const delta = 2; // Number of pages to show around the current page

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        buttons.push(i);
      } else if (i === current - delta - 1 || i === current + delta + 1) {
        buttons.push("...");
      }
    }

    return buttons;
  }, [total, current]);

  return (
    <nav
      className="flex items-center justify-between border-t border-lavender/70 px-4 sm:px-0"
      aria-label="Pagination"
    >
      <div className="-mt-px flex w-0 flex-1">
        <PaginationButton
          page={
            <>
              <ArrowLongLeftIcon aria-hidden="true" className="mr-3 size-5" />
              Previous
            </>
          }
          current={current}
          onPageChange={onPageChange}
          aria-label="Previous page"
          disabled={current === 1}
        />
      </div>
      <div className="hidden md:-mt-px md:flex">
        {paginationButtons.map((page, index) => (
          <PaginationButton
            key={index}
            page={page}
            current={current}
            onPageChange={onPageChange}
            aria-label={`Page ${page}`}
            aria-current={page === current ? "page" : undefined}
          />
        ))}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <PaginationButton
          page={
            <>
              Next
              <ArrowLongRightIcon aria-hidden="true" className="ml-3 size-5" />
            </>
          }
          current={current}
          onPageChange={onPageChange}
          aria-label="Next page"
          disabled={current === total}
        />
      </div>
    </nav>
  );
};

interface PaginationButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  page: number | ReactNode | "...";
  current: number;
  onPageChange?: (page: number) => void;
  disabled?: boolean;
}

const PaginationButton: FC<PaginationButtonProps> = ({
  page,
  current,
  onPageChange,
  disabled,
  ...rest
}) => {
  const isDisabled = disabled ?? page === "..." ?? page === current;
  return (
    <button
      className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50
         ${
           page === current
             ? "border-neon-pink text-neon-pink"
             : "enabled:hover:border-white/70 enabled:hover:text-white/70"
         }`}
      onClick={() => typeof page === "number" && onPageChange?.(page)}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...rest}
    >
      {page}
    </button>
  );
};
