'use client';
import { FaTimes } from 'react-icons/fa';
import { FaCheck, FaCircle } from 'react-icons/fa6';
import Image from 'next/image';

const About = () => {
  return (
    <section
      className="py-20"
      id="tentang"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Ada Dua Jenis Manusia Sekarang...
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        <div
          className=" rounded-xl p-6 w-full md:w-[420px] text-left shadow-lg"
          style={{
            border: '1px solid rgba(10, 62, 137, 1)',
            background: 'rgba(20, 27, 37, 1)',
          }}
        >
          <h3 className="text-red-400 text-xl font-bold mb-4 text-center">
            The Manual Thinker
          </h3>
          <ul className="space-y-4 text-white text-base">
            <li className="flex gap-3 items-start">
              <FaTimes className="text-red-500 mt-1" />
              Cuma ketik random ke ChatGPT
            </li>
            <li className="flex gap-3 items-start">
              <FaTimes className="text-red-500 mt-1" />
              Buang waktu benerin output yang kurang tepat
            </li>
            <li className="flex gap-3 items-start">
              <FaTimes className="text-red-500 mt-1" />
              Merasa tertinggal saat yang lain melaju cepat
            </li>
          </ul>
        </div>

        <div
          className=" border border-[#0efbff] rounded-xl p-6 w-full md:w-[420px] text-left shadow-neon"
          style={{
            background:
              'linear-gradient(318.17deg, #1E3B87 0.84%, #174D65 98.21%)',
          }}
        >
          <h3 className="text-primary text-xl font-bold mb-4 text-center">
            The Prompt Alchemist
          </h3>
          <ul className="space-y-4 text-white text-base">
            <li className="flex gap-3 items-start">
              <FaCheck className="text-primary mt-1" />
              Tahu cara tanya yang bikin AI kerja maksimal
            </li>
            <li className="flex gap-3 items-start">
              <FaCheck className="text-primary mt-1" />
              Output berkualitas hanya dalam hitungan menit
            </li>
            <li className="flex gap-3 items-start">
              <FaCheck className="text-primary mt-1" />
              Selalu lebih cepat, lebih efisien, dan lebih unggul
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-4">
        <div className="relative w-[280px] md:w-[340px]">
          <div className="absolute inset-0 rounded-2xl blur-2xl opacity-80 bg-primary shadow-neon z-0" />
          <div className="relative rounded-2xl p-4 bg-transparent">
            <Image
              src="/images/book.png"
              width={340}
              height={400}
              alt="E-book Cover"
              className="w-full h-auto "
              unoptimized
            />
          </div>
        </div>

        {/* Isi Fitur */}
        <div className="max-w-xl text-left">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
            The Prompt Alchemist <br />
            <span className="text-white/90 font-normal">
              bukan sekadar e-book biasa
            </span>
          </h3>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <FaCircle size={16} />
              </div>
              <div>
                <p className="text-white font-semibold">
                  Formula Rahasia Prompt
                </p>
                <p className="text-white/80 text-sm">
                  Template yang sudah terbukti menghasilkan output AI
                  berkualitas tinggi
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <FaCircle size={16} />
              </div>
              <div>
                <p className="text-white font-semibold">Case Study Real</p>
                <p className="text-white/80 text-sm">
                  Contoh nyata bagaimana prompt menghasilkan jutaan rupiah
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <FaCircle size={16} />
              </div>
              <div>
                <p className="text-white font-semibold">Strategi Advanced</p>
                <p className="text-white/80 text-sm">
                  Teknik-teknik yang tidak diajarkan di tempat lain
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
