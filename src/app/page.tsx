'use client';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Container from '@/components/Container';
import About from '@/components/Tentang/About';
import IsiKitSection from '@/components/IsiKit';
import Harga from '@/components/Harga';
import { useState } from 'react';
import PromptFormModal from '@/components/PromptFormSection';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Logos />
      <Container>
        <About />
        <IsiKitSection />
        <Harga onOpenModal={() => setIsModalOpen(true)} />
      </Container>
      <PromptFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HomePage;
