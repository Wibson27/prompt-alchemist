'use client';

import React, { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { EmailService } from '@/lib/email-service'; // ← Fixed import
import { useAuth } from '@/lib/auth-context';
import { EmailRecord } from '@/lib/supabase';

const DashboardPage: React.FC = () => {
  const [emails, setEmails] = useState<EmailRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const emailData = await EmailService.getAllEmails(); // ← Fixed usage
        setEmails(emailData);
      } catch (err) {
        setError('Failed to load emails');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  const handleSignOut = async () => {
    await signOut();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background text-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto bg-[#181C2A] rounded-2xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-primary">Dashboard Email</h1>
              <p className="text-sm text-white/60 mt-1">
                Welcome, {user?.email}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-white/60">
                Total: {emails.length} email{emails.length !== 1 ? 's' : ''}
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>

          <p className="mb-8 text-white/80">
            Daftar email yang telah mendaftar untuk akses The Prompt Alchemist:
          </p>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="mt-2 text-white/60">Loading...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-400">
              {error}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-[#23263A] rounded-lg">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left text-primary-accent">No</th>
                    <th className="py-3 px-4 text-left text-primary-accent">Email</th>
                    <th className="py-3 px-4 text-left text-primary-accent">Tanggal</th>
                    <th className="py-3 px-4 text-left text-primary-accent">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {emails.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-8 px-4 text-center text-white/60">
                        Belum ada email yang masuk.
                      </td>
                    </tr>
                  ) : (
                    emails.map((emailRecord, idx) => (
                      <tr key={emailRecord.id} className="border-b border-[#2A2E47] last:border-none hover:bg-[#2A2E47]/50">
                        <td className="py-3 px-4 text-white/80">{idx + 1}</td>
                        <td className="py-3 px-4 text-white font-mono">{emailRecord.email}</td>
                        <td className="py-3 px-4 text-white/60 text-sm">{formatDate(emailRecord.created_at)}</td>
                        <td className="py-3 px-4 text-white/60 text-sm">{emailRecord.source}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;