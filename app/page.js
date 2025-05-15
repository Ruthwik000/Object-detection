"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the ObjectDetection component with no SSR
const ObjectDetection = dynamic(
  () => import('@/components/object-detection'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        Thief Detection Alarm
      </h1>
      <Suspense fallback={<div className="gradient-text mt-8">Loading Object Detection...</div>}>
        <ObjectDetection />
      </Suspense>
    </main>
  );
}
