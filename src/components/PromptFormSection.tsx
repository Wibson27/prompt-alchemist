'use client';

import { useState, FormEvent, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

interface PromptFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromptFormModal: React.FC<PromptFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    onClose();
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
      <div className="relative bg-[#111827] text-white px-6 sm:px-10 py-10 sm:py-12 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-[90%] sm:max-w-2xl text-center animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white"
        >
          <IoClose size={28} />
        </button>

        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          style={{
            textShadow: `
            0 0 70px rgba(2,208,210,1),
            0 0 33.3px  rgba(2,208,210,0.8),
            0 2px 80px rgba(2,208,210,0.6)
          `,
          }}
        >
          Buka Brankas
          <br />
          Prompt-Mu
        </h2>

        <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          Terima kasih atas ketertarikanmu!
          <br />
          Kirim ke mana akses eksklusif ini?
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-4 rounded-full text-black placeholder-gray-500 text-lg focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-4 rounded-xl bg-primary-accent shadow-neon font-bold text-black text-base sm:text-lg transition mx-auto "
          >
            Dapatkan Akses Pertama
          </button>
        </form>
      </div>
    </div>
  );
};

export default PromptFormModal;
