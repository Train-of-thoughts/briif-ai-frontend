import React, { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ParticleBackground from "@/components/ParticleBackground";

type AuthLayoutProps = {
  children: ReactNode;
  className?: string;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <main className="pt-16 sm:pt-20 md:pt-24">
      <Header />
      <section className={`container-section flex flex-col items-center justify-center min-h-[80vh] text-center relative overflow-hidden ${className}`}>
        <ParticleBackground />
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default AuthLayout;
