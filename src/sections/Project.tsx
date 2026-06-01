import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiX, FiMail } from 'react-icons/fi'

const screenshots = [
  'screenshots/0e812849ec6024fb8f6144bd78062c0a.png',
  'screenshots/12537f55bcdb183b7ef2546d213c4dd4.png',
  'screenshots/c07ce46a79cad851c1760a488eeac2bf.png',
  'screenshots/ceb0efba76f5e80f09266e62ceb333af.png',
  'screenshots/dd3f1440d6325e88f318d83b7d4b5f69.png',
  'screenshots/ea58cb87c74c0da7d377b7017286b6ee.png',
]

const painPoints = [
  { text: '投标文件人工撰写耗时 3-5 天/份，效率极低', color: 'var(--color-danger)' },
  { text: '技术方案质量参差不齐，缺乏标准化扩充流程', color: 'var(--color-danger)' },
  { text: '招标要求提取遗漏率高，人工核对易出错', color: 'var(--color-danger)' },
]

const solutions = [
  { text: 'LLM 自动提取 100+ 条技术要求，标注来源章节', color: 'var(--color-success)' },
  { text: '四步法深度扩充：设计→实现→安全→验收，条条 2000+ 字', color: 'var(--color-success)' },
  { text: '一键生成 Word，黑体+宋体格式，符合央企规范', color: 'var(--color-success)' },
]

const techTags = [
  'React 19', 'FastAPI', 'SSE 流式', 'LLM 提示词工程', 'python-docx', 'Ant Design 6',
]

function DemoModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          style={{ color: 'var(--color-gray)' }}
        >
          <FiX size={18} />
        </button>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
          style={{ backgroundColor: 'rgba(37,99,235,0.1)' }}
        >
          <FiExternalLink size={26} style={{ color: 'var(--color-accent)' }} />
        </div>

        <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
          在线 Demo 演示
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-gray)' }}>
          该系统目前运行于本地环境，支持真实招标文件上传、LLM 智能解析与 Word 文档一键生成全流程体验。
          <br /><br />
          如需安排远程演示或了解更多项目细节，欢迎通过邮件联系我。
        </p>

        {/* Contact CTA */}
        <a
          href="mailto:ncepudlgh@163.com?subject=申请招投标工作台 Demo 演示"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] mb-3 text-sm"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          <FiMail size={16} />
          发送演示申请邮件
        </a>
        <a
          href="https://github.com/samzhao84-code/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium border transition-all duration-300 hover:bg-gray-50 text-sm"
          style={{ borderColor: 'var(--color-gray-light)', color: 'var(--color-text)' }}
        >
          <FiGithub size={16} />
          查看 GitHub 源码
        </a>
      </motion.div>
    </motion.div>
  )
}

export default function Project() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showDemoModal, setShowDemoModal] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % screenshots.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + screenshots.length) % screenshots.length)
  }, [])

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000)
    return () => clearInterval(timer)
  }, [nextSlide])

  // Build base path from import.meta.env
  const base = import.meta.env.BASE_URL  // '/portfolio/' in prod, '/' in dev

  return (
    <section id="project" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
          style={{ color: 'var(--color-text)' }}
        >
          核心项目
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Screenshot carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={`${base}${screenshots[currentSlide]}`}
                  alt={`截图 ${currentSlide + 1}`}
                  className="w-full aspect-[16/10] object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors"
            >
              <FiChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === currentSlide ? 'var(--color-accent)' : 'var(--color-gray)',
                    opacity: i === currentSlide ? 1 : 0.4,
                    transform: i === currentSlide ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Project details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              投标文件智能生成工作台
            </h3>

            {/* Pain points */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-danger)' }}>
                用户痛点
              </h4>
              <ul className="space-y-2">
                {painPoints.map((p) => (
                  <li key={p.text} className="flex items-start gap-2">
                    <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                    <span className="text-sm" style={{ color: 'var(--color-gray)' }}>{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-success)' }}>
                解决方案
              </h4>
              <ul className="space-y-2">
                {solutions.map((s) => (
                  <li key={s.text} className="flex items-start gap-2">
                    <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                    <span className="text-sm" style={{ color: 'var(--color-gray)' }}>{s.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{ backgroundColor: 'var(--color-gray-light)', color: 'var(--color-gray)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowDemoModal(true)}
                className="px-6 py-2.5 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:opacity-90 text-sm flex items-center gap-1.5"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                <FiExternalLink size={14} />
                在线 Demo
              </button>
              <a
                href="https://github.com/samzhao84-code/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 border text-sm flex items-center gap-1.5"
                style={{ borderColor: 'var(--color-text)', color: 'var(--color-text)' }}
              >
                <FiGithub size={14} />
                GitHub 源码
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {showDemoModal && <DemoModal onClose={() => setShowDemoModal(false)} />}
      </AnimatePresence>
    </section>
  )
}
