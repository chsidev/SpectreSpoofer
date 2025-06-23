"use client";

import { Suspense } from "react";
import SuccessClient from "./SuccessClient";

export const dynamic = "force-dynamic";
export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Processing your subscription...</div>}>
      <SuccessClient />
    </Suspense>
  );
}
