import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="text-9xl font-bold text-primary"> 404 </div>
        <h1 className="text-4xl font-bold"> Page not found </h1>
        <p className="text-lg text-gray-500">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>

        <Button className="mt-4 uppercase">
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
}