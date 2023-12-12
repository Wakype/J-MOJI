"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarClient = () => {
  return (
    <div className="relative z-[9999]">
      <ProgressBar
        height="3px"
        color="#ED7D31"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </div>
  );
};

export default ProgressBarClient;
