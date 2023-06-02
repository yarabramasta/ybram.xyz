import { motion } from 'framer-motion';

import { useScene } from './Scene';

export default function Logo() {
  const { sceneHandler: handler } = useScene();

  return (
    <a
      href=""
      onClick={evt => {
        evt.preventDefault();
        handler('index');
      }}
    >
      <motion.svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="aspect-square w-6 overflow-hidden fill-none"
        transition={{ delayChildren: 0.3, staggerChildren: 0.6 }}
      >
        <motion.path
          id="rect-r"
          d="M27 5C21.4771 5 17 9.47715 17 15V25C22.5229 25 27 20.5229 27 15V5Z"
          fill="#E2E8F0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 1,
            type: 'spring'
          }}
        />
        <motion.path
          id="rect-l"
          d="M5 5C10.5229 5 15 9.47715 15 15V25C9.47715 25 5 20.5229 5 15V5Z"
          fill="#E2E8F0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 1,
            type: 'spring'
          }}
        />
        <motion.path
          id="circ"
          d="M16 27C18.2091 27 20 25.2091 20 23C20 20.7909 18.2091 19 16 19C13.7909 19 12 20.7909 12 23C12 25.2091 13.7909 27 16 27Z"
          fill="#F8FAFC"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9 }}
        />
      </motion.svg>
    </a>
  );
}
