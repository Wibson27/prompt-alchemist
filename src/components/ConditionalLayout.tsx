'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ConditionalLayoutProps {
  children: ReactNode;
}

const ConditionalLayout: React.FC<ConditionalLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  // Define admin routes that shouldn't show header/footer
  const adminRoutes = ['/login', '/dashboard'];
  const isAdminRoute = adminRoutes.includes(pathname);

  if (isAdminRoute) {
    // For admin routes, render children without header/footer
    return <>{children}</>;
  }

  // For regular routes, render with header and footer
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ConditionalLayout;