"use client";

import React from "react";
import {Link} from "@/i18n/navigation";

type AuthFooterProps = {
  text: string;
  linkText: string;
  linkHref: string;
};

const AuthFooter: React.FC<AuthFooterProps> = ({
  text,
  linkText,
  linkHref,
}) => {
  return (
    <p className="text-sm text-gray-400 mt-4">
      {text}{" "}
      <Link href={linkHref} className="text-primary-400 hover:text-primary-300">
        {linkText}
      </Link>
    </p>
  );
};

export default AuthFooter;
