import { MotionValue, motion, useMotionValue } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  createContext,
  useCallback,
  useContext,
  useState,
  type MouseEventHandler,
  type PropsWithChildren
} from 'react';
import { useWindowSize } from 'usehooks-ts';

type XCursorContext = {
  render: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
  notifier: (val: boolean) => void;
  onMouseMove: MouseEventHandler<HTMLDivElement>;
};

const store = createContext<XCursorContext>({
  render: true,
  x: new MotionValue<number>(),
  y: new MotionValue<number>(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  notifier: (_val: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onMouseMove: () => {}
});

export function XCursorState({ children }: PropsWithChildren) {
  const { width } = useWindowSize();
  const [render, setRender] = useState(width > 768);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const router = useRouter();

  const notifier = useCallback((val: boolean): void => {
    setRender(val);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('__next')!.style.cursor = val ? 'none' : 'default';
  }, []);

  const onMouseMove: MouseEventHandler<HTMLDivElement> = evt => {
    if (router.pathname !== '/') {
      x.set(evt.clientX - 16);
      y.set(evt.clientY - 8);

      const target = evt.target as HTMLElement;
      notifier(target.id !== 'content:layout' && target.id !== 'nav:item');
    } else {
      notifier(false);
    }
  };

  return (
    <store.Provider value={{ render, x, y, notifier, onMouseMove }}>
      {children}
    </store.Provider>
  );
}

export function useXCursor() {
  return useContext(store);
}

export default function XCursor() {
  const { x, y } = useXCursor();

  return (
    <motion.span
      className="pointer-events-none absolute z-10 block text-xs leading-none tracking-tighter"
      style={{ x, y }}
      layout
    >
      close x
    </motion.span>
  );
}
