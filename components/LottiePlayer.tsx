"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
    () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
    { ssr: false }
);

interface LottiePlayerProps {
    src: string;
    className?: string;
}

const LottiePlayer = ({ src, className }: LottiePlayerProps) => {
    return (
        <div className={className}>
            <Suspense fallback={<div className="h-full w-full animate-pulse bg-muted rounded-full" />}>
                <DotLottieReact
                    src={src}
                    loop
                    autoplay
                />
            </Suspense>
        </div>
    );
};

export default LottiePlayer;
