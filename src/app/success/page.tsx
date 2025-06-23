"use client";

import { useEffect, useState } from 'react';
import { Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import SuccessClient from "./SuccessClient";
import Link from 'next/link';

export const dynamic = "force-dynamic";
export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Processing your subscription...</div>}>
      <SuccessClient />
    </Suspense>
  );
}
