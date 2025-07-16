import { useEffect, useState } from 'react';

const sectionIds = ['home', 'tentang', 'isikit', 'harga'];

export default function useActiveSection() {
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let currentSection = 'home';

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const offsetTop = el.offsetTop - 100;
                    if (scrollY >= offsetTop) {
                        currentSection = `#${id}`;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return activeSection;
}
