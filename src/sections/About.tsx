import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const internships = [
  {
    company: '科大讯飞',
    role: '产品运营',
    highlight: '320 万 GMV',
    desc: '负责 AI 产品运营，通过数据驱动增长策略实现业务突破',
  },
  {
    company: 'PPtutor',
    role: '运营',
    highlight: 'CVR 提升 45%',
    desc: '优化用户转化漏斗，通过 A/B 测试和精细化运营大幅提升转化率',
  },
  {
    company: '晶优采购',
    role: '采购运营',
    highlight: '准确率 98%',
    desc: '优化采购流程与数据管理，将采购准确率优化至行业领先水平',
  },
]

const skills = [
  'AI 产品', '数据分析', '提示词工程', 'FastAPI', 'React',
  '招投标', '能源行业', '用户增长', 'LLM 应用',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-4" style={{ backgroundColor: 'var(--color-gray-light)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
          style={{ color: 'var(--color-text)' }}
        >
          关于我
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-gray)' }}>
              华北电力大学工业工程硕士在读，本科毕业于成都大学工程造价专业，获评
              <span className="font-semibold" style={{ color: 'var(--color-accent)' }}> 四川省优秀毕业生</span>。
              专注 AI 产品方向，具备能源行业招投标 AI 化落地的完整经验。
              擅长从 0 到 1 搭建 AI 产品工作流，将大模型能力与垂直行业场景深度结合。
            </p>

            {/* Internship cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {internships.map((item, i) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--color-text)' }}>
                    {item.company}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: 'var(--color-gray)' }}>
                    {item.role}
                  </p>
                  <p className="text-xl font-bold mb-1" style={{ color: 'var(--color-accent)' }}>
                    {item.highlight}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-gray)' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skill tags */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 flex flex-wrap gap-3 content-start"
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default"
                style={{
                  backgroundColor: `${isInView ? 'var(--color-accent)' : 'var(--color-gray-light)'}`,
                  color: isInView ? '#fff' : 'var(--color-gray)',
                  transform: `rotate(${(i - 4) * 2}deg)`,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
