'use client';

import React, { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { EmailService } from '@/lib/email-service';
import { useAuth } from '@/lib/auth-context';
import { EmailRecord } from '@/lib/supabase';
import Image from 'next/image';
import { HiOutlineLogout, HiOutlineMail, HiOutlineUsers, HiOutlineCalendar } from 'react-icons/hi';

const DashboardPage: React.FC = () => {
  const [emails, setEmails] = useState<EmailRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const emailData = await EmailService.getAllEmails();
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

  const totalEmails = emails.length;
  const todayEmails = emails.filter(email => {
    const emailDate = new Date(email.created_at);
    const today = new Date();
    return emailDate.toDateString() === today.toDateString();
  }).length;

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        {/* Subtle background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary-accent/3"></div>

        <div className="relative">
          {/* Top Navigation */}
          <nav className="border-b border-white/10 bg-[#0F1419]/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Brand */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Image
                      src="/images/Vector.png"
                      alt="Lightning Icon"
                      width={20}
                      height={20}
                      unoptimized
                      className="opacity-80"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-white">
                      The Prompt Alchemist
                    </h1>
                    <p className="text-sm text-white/60">Admin Dashboard</p>
                  </div>
                </div>

                {/* User info and logout */}
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-white/80">Welcome back</p>
                    <p className="text-xs text-white/60">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-white/80 hover:text-white"
                  >
                    <HiOutlineLogout className="w-4 h-4" />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#0F1419]/60 border border-primary/20 rounded-xl p-6 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <HiOutlineMail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{totalEmails}</p>
                    <p className="text-sm text-white/60">Total Subscribers</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1419]/60 border border-primary/20 rounded-xl p-6 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <HiOutlineCalendar className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{todayEmails}</p>
                    <p className="text-sm text-white/60">Today&#39;s Signups</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1419]/60 border border-primary/20 rounded-xl p-6 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <HiOutlineUsers className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {Math.round((todayEmails / Math.max(totalEmails, 1)) * 100)}%
                    </p>
                    <p className="text-sm text-white/60">Today&#39;s Growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email List */}
            <div className="bg-[#0F1419]/60 border border-primary/20 rounded-xl backdrop-blur-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-white/10">
                <h2 className="text-lg font-semibold text-white">Subscriber List</h2>
                <p className="text-sm text-white/60 mt-1">
                  All registered subscribers for The Prompt Alchemist
                </p>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    <p className="text-white/60">Loading subscribers...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <p className="text-red-400 mb-2">{error}</p>
                    <button
                      onClick={() => window.location.reload()}
                      className="text-primary hover:text-primary/80 text-sm"
                    >
                      Try again
                    </button>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-6 text-sm font-medium text-white/80">#</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-white/80">Email</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-white/80">Date</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-white/80">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {emails.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="text-center py-12">
                            <div className="text-white/40">
                              <HiOutlineMail className="w-12 h-12 mx-auto mb-3 opacity-50" />
                              <p>No subscribers yet</p>
                              <p className="text-sm mt-1">Subscribers will appear here when they sign up</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        emails.map((emailRecord, idx) => (
                          <tr
                            key={emailRecord.id}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                          >
                            <td className="py-4 px-6 text-white/60 text-sm">{idx + 1}</td>
                            <td className="py-4 px-6">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                  <HiOutlineMail className="w-4 h-4 text-primary/60" />
                                </div>
                                <span className="text-white font-mono text-sm">{emailRecord.email}</span>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-white/60 text-sm">
                              {formatDate(emailRecord.created_at)}
                            </td>
                            <td className="py-4 px-6">
                              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                                {emailRecord.source}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;