'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { signIn, user } = useAuth();
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const result = await signIn(email, password);

    if (result.success) {
      router.push('/dashboard');
    } else {
      setError(result.error || 'Login failed');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-accent/5"></div>

      <div className="relative w-full max-w-md">
        {/* Main login card */}
        <div
          className="bg-[#0F1419] rounded-2xl p-8 shadow-2xl border border-primary/20"
          style={{
            boxShadow: '0 8px 32px rgba(2, 208, 210, 0.1), 0 0 0 1px rgba(2, 208, 210, 0.1)'
          }}
        >
          {/* Logo/Brand section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 border border-primary/20">
              <Image
                src="/images/Vector.png"
                alt="Lightning Icon"
                width={32}
                height={32}
                unoptimized
                className="opacity-80"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Admin Access
            </h1>
            <p className="text-foreground-accent/60 text-sm">
              The Prompt Alchemist Dashboard
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all disabled:opacity-50"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all disabled:opacity-50"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                boxShadow: isLoading ? 'none' : '0 4px 14px rgba(2, 208, 210, 0.3)'
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-xs">
              Secure access to your dashboard
            </p>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-accent/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default LoginPage;