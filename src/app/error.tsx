"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex items-center justify-center">
      <div className="w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 mt-8 mb-8 border border-accent p-8">
        <h2 className="text-[32px] text-accent font-bold leading-[36px] tracking-wide">
          Sorry, something went wrong!
        </h2>
        <p className="mb-8 text-[15px] text-gray-400 font-medium leading-[25px]">
          {error.message}
        </p>
        <button
          className="w-full mt-8 py-4 uppercase text-white text-[13px] font-bold tracking-[1px] bg-accent hover:bg-accentHover
                    disabled:bg-gray-400"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
        <button
          className="w-full mt-8 py-4 uppercase text-white text-[13px] font-bold tracking-[1px] bg-accent hover:bg-accentHover
                    disabled:bg-gray-400"
          onClick={() => {
            router.push("/");
          }}
        >
          Back to home
        </button>
      </div>
    </main>
  );
}
