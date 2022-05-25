import { motion } from 'framer-motion'

import PreviousWork from './PreviousWork'
import KnowledgeBase from '../Homepage/KnowledgeBase'

function Portfolio() {
  return (
    <>
      <motion.div
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <KnowledgeBase />
      </motion.div>
      <motion.div
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <PreviousWork />
      </motion.div>
    </>
  )
}

export default Portfolio
