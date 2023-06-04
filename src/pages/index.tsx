import { motion, type Variants } from 'framer-motion';

import Layout from '~/components/Layout';

const copyright_vars: Variants = {
  initial: { opacity: 0, y: -5 },
  animate: {
    opacity: 0.4,
    y: 0,
    transition: {
      opacity: { ease: 'easeOut', duration: 0.15 },
      type: 'spring',
      duration: 0.3,
      delay: 0.3,
      mass: 2,
      bounce: 0,
      damping: 10,
      stiffness: 90
    }
  },
  exit: { y: -5, opacity: 0, transition: { opacity: { delay: 0 } } }
};

export default function Home() {
  return (
    <Layout max>
      <div className="flex h-full w-full items-center justify-center">
        <motion.p
          variants={copyright_vars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-center text-xs font-medium tracking-tighter opacity-40"
        >
          Made with &hearts; by Yara Bramasta.
          <br />
          &copy; 2023.
        </motion.p>
      </div>
    </Layout>
  );
}
