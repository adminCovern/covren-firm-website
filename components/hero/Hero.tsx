'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-white"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          You don’t use it.<br className="hidden md:block" />
          <span className="text-red-600">It uses you.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
          Welcome to COVREN. Home of SOVREN AI — the only sovereign execution platform with zero dependency, zero permission, and zero competition.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-10 px-6 py-3 text-lg font-semibold border border-white rounded-xl hover:bg-white hover:text-black transition-colors"
          onClick={() => window.location.href = '/command-core'}
        >
          ENTER THE COMMAND CORE 
        </motion.button>
      </motion.div>
    </div>
  );
}
