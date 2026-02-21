'use client';

import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';

// ── Animation config ──────────────────────────────────────
// Modifier ces valeurs pour ajuster l'animation
const TRANSITION_DURATION = 0.7;        // durée en secondes
const TRANSITION_EASING: [number, number, number, number] = [0.32, 0.72, 0, 1]; // cubic-bezier (style iOS)
const SCROLL_THRESHOLD = 30;            // pixels de scroll pour déclencher

export default function Home() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hasTriggered = useRef(false);
  const touchStartY = useRef(0);

  const triggerTransition = useCallback(() => {
    if (hasTriggered.current) return;
    hasTriggered.current = true;
    setIsTransitioning(true);

    // Naviguer vers /works après la fin de l'animation
    setTimeout(() => {
      router.push('/works');
    }, TRANSITION_DURATION * 1000);
  }, [router]);

  useEffect(() => {
    // ── Scroll (desktop) ──
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > SCROLL_THRESHOLD) {
        triggerTransition();
      }
    };

    // ── Touch (mobile) ──
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.touches[0].clientY;
      if (deltaY > SCROLL_THRESHOLD) {
        triggerTransition();
      }
    };

    // ── Clic (desktop + mobile) ──
    const handleClick = () => {
      triggerTransition();
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
    };
  }, [triggerTransition]);

  return (
    <div className="relative h-screen w-full overflow-hidden cursor-pointer select-none">
      {/* Fond de la page d'accueil */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-white"
        animate={isTransitioning ? { opacity: 0, scale: 0.97 } : { opacity: 1, scale: 1 }}
        transition={{ duration: TRANSITION_DURATION, ease: TRANSITION_EASING }}
      >
        <h1 className="text-2xl md:text-3xl font-normal tracking-wide px-4 text-center">
          SIMONE ROODSELAAR | SIEMART
        </h1>
      </motion.div>

      {/* Overlay /works qui monte depuis le bas */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 bg-white z-50"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: TRANSITION_DURATION,
              ease: TRANSITION_EASING,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
