import React from 'react';
import Image from 'next/image';

interface HeroProps {
  onOpenModal: () => void;
}
const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center pt-32 md:pt-40 px-5"
    >
      <div className="relative mb-6">
        <div className="bg-black w-16 h-16 flex items-center justify-center rounded-full shadow-neon">
          <Image
            src="images/Vector.png"
            alt="Lightning Icon"
            width={42}
            height={42}
            unoptimized
          />
        </div>
      </div>
      <br />
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_20px_#5fffea]">
        THE PROMPT <br />
        <span className="text-primary">ALCHEMIST</span>
      </h1>
      <br />
      <p className="mt-4 max-w-xl text-white text-base md:text-lg">
        Rahasia Mengubah Kata-Kata Biasa Menjadi{' '}
        <span className="text-primary-accent font-bold">Emas Digital</span> yang
        Menghasilkan Jutaan Rupiah
      </p>

      <button
        onClick={onOpenModal}
        className="mt-8 px-6 py-3 bg-primary text-black font-bold rounded-full shadow-neon"
      >
        Dapatkan Sekarang
      </button>
    </section>
  );
};

export default Hero;
