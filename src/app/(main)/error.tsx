'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 text-center shadow-sm h-full">
      <h1 className="text-6xl font-bold text-destructive">500</h1>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
        Something went wrong!
      </h2>
      <p className="mt-2 text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>
      <Button
        onClick={() => reset()}
        className="mt-6"
      >
        Try again
      </Button>
    </div>
  );
}
