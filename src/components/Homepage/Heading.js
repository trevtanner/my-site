import styles from '../../Home.module.css'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'

function Heading() {
  return (
    <>
      <div className={styles.homebg}>
        <div className={styles.imagetext}>
          <motion.div
            transition={{ duration: 1.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="h1">Trevor Tanner</Typography>
            <Typography variant="h3">Full stack developer</Typography>
            <Typography variant="h5">
              Building stellar websites // One line at a time
            </Typography>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Heading
