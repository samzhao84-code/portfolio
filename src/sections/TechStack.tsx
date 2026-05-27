import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiTypescript, SiFastapi, SiPython, SiOpenai,
  SiGithubactions, SiVite, SiAntdesign, SiTailwindcss,
} from 'react-icons/si'
import { FiDatabase, FiLayout, FiServer, FiCpu, FiFile } from 'react-icons/fi'

const categories = [
  {
    name: '前端',
    icon: FiLayout,
    items: [
      { icon: SiReact, name: 'React 19' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiAntdesign, name: 'Ant Design 6' },
      { icon: SiVite, name: 'Vite' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
    ],
  },
  {
    name: '后端',
    icon: FiServer,
    items: [
      { icon: SiFastapi, name: 'FastAPI' },
      { icon: SiPython, name: 'Python' },
      { icon: FiDatabase, name: 'SQLite' },
    ],
  },
  {
    name: 'AI·LLM',
    icon: FiCpu,
    items: [
      { icon: SiOpenai, name: 'OpenAI API' },
      { icon: FiCpu, name: 'SSE 流式推送' },
      { icon: FiCpu, name: '提示词工程' },
    ],
  },
  {
    name: '文档处理',
    icon: FiFile,
    items: [
      { icon: FiFile, name: 'python-docx' },
      { icon: FiFile, name: 'OOXML 原生格式' },
      { icon: FiFile, name: 'PDF 解析' },
    ],
  },
  {
    name: '部署',
    icon: FiServer,
    items: [
      { icon: SiGithubactions, name: 'GitHub Pages' },
      { icon: FiServer, name: 'Uvicorn' },
      { icon: FiServer, name: '静态部署' },
    ],
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tech" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
          style={{ color: 'var(--color-text)' }}
        >
          技术栈
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + ci * 0.12, duration: 0.5 }}
              className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <cat.icon size={24} style={{ color: 'var(--color-accent)' }} />
                <h3 className="text-lg font-bold" style={{ color: 'var(--color-text)' }}>
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors duration-200"
                    style={{ backgroundColor: 'var(--color-gray-light)' }}
                  >
                    <item.icon size={16} style={{ color: 'var(--color-accent)' }} />
                    <span className="text-xs font-medium" style={{ color: 'var(--color-gray)' }}>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
