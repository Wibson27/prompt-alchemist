'use client';

interface HargaProps {
  onOpenModal: () => void;
}
const Harga: React.FC<HargaProps> = ({ onOpenModal }) => {
  return (
    <section
      className="flex justify-center items-center px-4 py-24"
      id="harga"
    >
      <div
        className="relative w-full max-w-xl rounded-2xl text-white text-center overflow-hidden px-8 py-14 space-y-6"
        style={{
          border: '1px solid #00F0FF',
          background: '#12151E',
          boxShadow:
            '0px 0px 41.4px rgba(89, 252, 233, 1), 0px 0px 124.9px rgba(89, 252, 233, 1)',
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient bg-clip-text text-transparent">
          Penawaran Terbatas
        </h2>

        <div>
          <p className="text-sm text-white/80">Harga Normal:</p>
          <p className="text-2xl font-bold line-through text-white/60">
            Rp299.000
          </p>
        </div>

        <div>
          <p className="text-base text-[#00FFBF]">Harga Hari Ini</p>
          <p className="text-5xl font-bold text-white">
            Rp <span className="text-6xl">99</span>
            <span className="text-2xl align-top">.000</span>
          </p>
        </div>

        <div className="text-base bg-red-500 text-white px-6 py-2 rounded-full w-fit mx-auto font-semibold tracking-wide">
          Diskon 67% – Berakhir dalam{' '}
          <span className="font-mono">23:32:30</span>
        </div>

        <button
          onClick={onOpenModal}
          className="bg-[#00FFD1] text-black font-bold px-8 py-3 text-lg rounded-full hover:scale-105 transition shadow-neon"
        >
          Dapatkan Akses Sekarang
        </button>
      </div>
    </section>
  );
};

export default Harga;
