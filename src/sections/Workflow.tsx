import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUpload, FiSearch, FiEdit3, FiFileText, FiChevronRight } from 'react-icons/fi'

const steps = [
  {
    icon: FiUpload,
    title: '上传招标文件',
    desc: '支持 .docx / .pdf / .txt 格式，自动识别文件结构并解析内容',
  },
  {
    icon: FiSearch,
    title: 'AI 提取技术要求',
    desc: 'LLM 精准提取 100+ 条技术需求，标注每条需求对应的来源章节',
  },
  {
    icon: FiEdit3,
    title: '四步法扩充方案',
    desc: '设计概要 → 技术实现 → 安全保障 → 验收标准，条条超 2000 字',
  },
  {
    icon: FiFileText,
    title: '一键生成 Word',
    desc: '黑体标题 + 宋体正文，首行缩进、固定行距，符合央企格式规范',
  },
]

export default function Workflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="workflow" className="py-24 px-4" style={{ backgroundColor: 'var(--color-gray-light)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
          style={{ color: 'var(--color-text)' }}
        >
          工作流程
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {i + 1}
                </div>
                <div className="hidden lg:flex items-center" style={{ color: 'var(--color-gray)' }}>
                  {i < steps.length - 1 && <FiChevronRight size={20} />}
                </div>
              </div>

              <step.icon size={32} className="mb-3" style={{ color: 'var(--color-accent)' }} />
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-gray)' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
