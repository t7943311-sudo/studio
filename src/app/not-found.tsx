import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
        Page Not Found
      </h2>
      <p className="mt-2 text-muted-foreground">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button asChild className="mt-6">
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  );
}
