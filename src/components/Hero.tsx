import { motion, type Variants } from 'framer-motion';

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

export default function Hero() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-8 md:py-16">
      <motion.p
        className="text-center text-xs opacity-40"
        variants={copyright_vars}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Made with &hearts; by Yara Bramasta.
        <br />
        &copy; {new Date().getFullYear()}.
      </motion.p>
    </div>
  );
}
