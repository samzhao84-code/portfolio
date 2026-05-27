import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiMail } from 'react-icons/fi'

interface HeroProps {
  onNavClick: (id: string) => void
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-2xl"
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
            赵
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ color: 'var(--color-text)' }}
        >
          赵杉
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl mb-10"
          style={{ color: 'var(--color-gray)' }}
        >
          AI 产品 × 能源行业 · 华北电力大学硕士
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => onNavClick('project')}
            className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            <FiArrowDown className="inline mr-2" />
            查看项目
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2"
            style={{ borderColor: 'var(--color-text)', color: 'var(--color-text)' }}
          >
            <FiGithub className="inline mr-2" />
            GitHub
          </a>
          <button
            onClick={() => onNavClick('contact')}
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2"
            style={{ borderColor: 'var(--color-gray)', color: 'var(--color-gray)' }}
          >
            <FiMail className="inline mr-2" />
            联系我
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8"
        style={{ color: 'var(--color-gray)' }}
      >
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  )
}
