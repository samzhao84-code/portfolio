import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiGithub, FiArrowUp } from 'react-icons/fi'

interface ContactProps {
  onScrollToTop: () => void
}

export default function Contact({ onScrollToTop }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 px-4" style={{ backgroundColor: 'var(--color-gray-light)' }}>
      <div className="max-w-md mx-auto text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
          style={{ color: 'var(--color-text)' }}
        >
          联系我
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-8"
          style={{ color: 'var(--color-gray)' }}
        >
          期待与您交流，欢迎通过以下方式联系
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <a
            href="mailto:ncepudlgh@163.com"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <FiMail size={20} style={{ color: 'var(--color-accent)' }} />
            <span style={{ color: 'var(--color-text)' }}>ncepudlgh@163.com</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <FiGithub size={20} style={{ color: 'var(--color-accent)' }} />
            <span style={{ color: 'var(--color-text)' }}>GitHub</span>
          </a>
        </motion.div>

        {/* Back to top */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          onClick={onScrollToTop}
          className="mt-12 w-12 h-12 rounded-full shadow-md flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
          aria-label="回到顶部"
        >
          <FiArrowUp size={20} />
        </motion.button>
      </div>
    </section>
  )
}
