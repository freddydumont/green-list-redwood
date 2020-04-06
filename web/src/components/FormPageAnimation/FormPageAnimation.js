import { motion } from 'framer-motion'

/**
 * Animate a transition between form pages using framer-motion.
 * @param {Object} props
 * @param {string} props.motionKey key to pass to framer motion
 */
const FormPageAnimation = ({ children, motionKey }) => {
  return (
    <motion.div
      key={motionKey}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default FormPageAnimation
