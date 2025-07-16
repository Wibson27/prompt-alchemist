'use client';

import { isiKit } from '@/data/isiKit';
import { FaBookOpen } from 'react-icons/fa';
const IsiKitSection = () => {
  return (
    <section
      id="isikit"
      className="py-20 px-4 text-center text-white max-w-5xl mx-auto"
    >
      <div></div>
      <h2
        className="text-white text-4xl font-bold "
        style={{
          textShadow: `
      0 0 70px rgba(2,208,210,1),
      0 0 33.3px  rgba(2,208,210,0.8),
      0 2px 80px rgba(2,208,210,0.6)
    `,
        }}
      >
        Isi Brankas Digitalmu:
      </h2>

      <p className="text-base md:text-lg text-foreground-accent mb-12">
        Senilai lebih dari Rp 500.000 – Kamu dapatkan semuanya hari ini
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isiKit.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 text-left p-6 rounded-xl hover:shadow-lg transition"
            style={{
              background: 'rgba(20, 27, 37, 1)',
              border: '1px rgba(10, 62, 137, 1)',
            }}
          >
            <div className="text-secondary text-2xl">
              <FaBookOpen />
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-white">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IsiKitSection;
