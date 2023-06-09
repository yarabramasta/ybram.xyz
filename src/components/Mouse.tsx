import {
  MotionValue,
  motion,
  useMotionValue,
  useWillChange
} from 'framer-motion';
import { useRouter } from 'next/router';
import {
  createContext,
  useCallback,
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

  const notifier = useCallback((val: boolean) => {
    setMounted(val);
    const root = document.getElementById('__next') as HTMLDivElement;
    if (!val) {
      root.style.removeProperty('cursor');
    } else {
      root.style.cursor = 'none';
    }
  }, []);

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
  const willChange = useWillChange();

  return (
    <motion.div
      className="pointer-events-none fixed z-50 text-xs font-medium leading-none tracking-tighter opacity-80"
      style={{ x, y, willChange }}
      layout
    >
      close x
    </motion.div>
  );
}
