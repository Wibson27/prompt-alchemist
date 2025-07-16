import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Dummy data untuk email yang masuk
const initialEmails = [
  'user1@email.com',
  'user2@email.com',
  'user3@email.com',
];

const DashboardPage: React.FC = () => {
  const [emails, setEmails] = useState<string[]>(initialEmails);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground py-16 px-4">
        <div className="max-w-2xl mx-auto bg-[#181C2A] rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-primary">Dashboard Email Akses Pertama</h1>
          <p className="mb-8 text-white/80">Berikut adalah daftar email yang telah mendaftar akses pertama:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#23263A] rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-primary-accent">No</th>
                  <th className="py-3 px-4 text-left text-primary-accent">Email</th>
                </tr>
              </thead>
              <tbody>
                {emails.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="py-4 px-4 text-center text-white/60">Belum ada email yang masuk.</td>
                  </tr>
                ) : (
                  emails.map((email, idx) => (
                    <tr key={email} className="border-b border-[#2A2E47] last:border-none">
                      <td className="py-3 px-4 text-white/80">{idx + 1}</td>
                      <td className="py-3 px-4 text-white">{email}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DashboardPage; 