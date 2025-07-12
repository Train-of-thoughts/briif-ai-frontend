"use client";

import React, { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  children: ReactNode;
};

const AuthCard: React.FC<AuthCardProps> = ({ title, children }) => {
  return (
    <div className="max-w-md w-full mx-auto relative z-10 bg-neutral-900 bg-opacity-50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg border border-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-linear-[to_right,#8b5cf6_0%,#c4b5fd_100%] bg-clip-text text-transparent">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default AuthCard;
