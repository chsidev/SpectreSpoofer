"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export const dynamic = "force-dynamic";
export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Processing your subscription...</div>}>
      <SuccessClient />
    </Suspense>
  );
}
