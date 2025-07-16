import Link from 'next/link';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
  return (
    <footer
      className="text-foreground py-12 text-center"
      style={{
        background: 'rgba(20, 27, 37, 1)',
      }}
    >
      <div className="flex justify-center items-center gap-3 mb-6">
        <h3 className="manrope text-2xl font-semibold bg-gradient bg-clip-text text-transparent ">
          {siteDetails.siteName}
        </h3>
      </div>

      {/* Link Besar */}
      <div className="flex justify-center gap-6 text-lg font-medium text-white mb-10">
        <Link
          href="/privacy"
          className="hover:text-primary transition"
        >
          {footerDetails.privacy}
        </Link>
        <Link
          href="/terms"
          className="hover:text-primary transition"
        >
          {footerDetails.term}
        </Link>
        <Link
          href="/contact"
          className="hover:text-primary transition"
        >
          {footerDetails.contact}
        </Link>
      </div>

      <div className="text-sm text-foreground-accent px-6">
        <p>
          &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
