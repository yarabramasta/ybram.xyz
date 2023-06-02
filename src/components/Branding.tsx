import { motion } from 'framer-motion';

import Logo from './Logo';

export default function Branding() {
  return (
    <a href="" onClick={evt => evt.preventDefault()}>
      <motion.div className="mb-2 flex flex-row gap-2 overflow-hidden">
        <Logo />
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            damping: 10,
            stiffness: 40,
            bounce: 0,
            type: 'spring',
            delay: 0.9
          }}
          className="font-serif"
        >
          Yara Bramasta
        </motion.h3>
      </motion.div>
    </a>
  );
}
