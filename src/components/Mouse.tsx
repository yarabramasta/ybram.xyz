import { MotionValue, motion, useMotionValue } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren
} from 'react';
import { useWindowSize } from 'usehooks-ts';

const MouseContext = createContext<{
  mounted: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
  notifier: (val: boolean) => void;
}>({
  mounted: false,
  x: new MotionValue<number>(),
  y: new MotionValue<number>(),
  notifier: () => {
    return;
  }
});

export function useMouseState() {
  return useContext(MouseContext);
}

export function MouseState({ children }: PropsWithChildren) {
  const { width } = useWindowSize();
  const router = useRouter();
  const [mounted, setMounted] = useState(
    width > 768 || router.pathname !== '/'
  );
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  function notifier(val: boolean) {
    setMounted(val);

    const root = document.getElementById('__next') as HTMLDivElement;
    if (!val) {
      root.style.removeProperty('cursor');
    } else {
      root.style.cursor = 'none';
    }
  }

  useEffect(() => {
    if (width < 768) notifier(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MouseContext.Provider value={{ notifier, mounted, x, y }}>
      {children}
    </MouseContext.Provider>
  );
}

export default function Mouse() {
  const { x, y } = useMouseState();

  return (
    <motion.div
      className="pointer-events-none fixed z-50 text-xs leading-none tracking-tighter"
      style={{ x, y }}
      layout
    >
      close x
    </motion.div>
  );
}
