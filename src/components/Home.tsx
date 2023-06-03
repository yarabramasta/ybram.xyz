import { motion, useMotionValue } from 'framer-motion';
import { MouseEventHandler, PropsWithChildren } from 'react';
import useMeasure from 'react-use-measure';
import { useWindowSize } from 'usehooks-ts';

import Content, { ContentProvider } from './Content';
import useContent from './Content/useContent';
import MenuItem from './MenuItem';

function Layout({ children }: PropsWithChildren) {
  const { width } = useWindowSize();
  const {
    current: content,
    mouse: renderMouse,
    setMouse: setRenderMouse
  } = useContent();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const handleMouseMove: MouseEventHandler = evt => {
    if (width > 768) {
      const target = evt.target as HTMLElement;
      const attr = target.getAttribute('data-outside-content');
      const isOutside = parseInt(attr ?? '0') === 1;

      if (target.tagName !== 'a' && isOutside && content !== 'default') {
        setRenderMouse(true);
        mouseX.set(evt.clientX - 8);
        mouseY.set(evt.clientY - 16);
      } else {
        setRenderMouse(false);
      }
    } else {
      setRenderMouse(false);
    }
  };

  return (
    <div
      className="relative flex flex-col-reverse md:flex-row"
      onMouseMove={handleMouseMove}
    >
      {renderMouse && (
        <motion.div
          id="x-cursor"
          className="pointer-events-none absolute inset-0 z-50 text-xs font-medium tracking-tighter"
          style={{ x: mouseX, y: mouseY }}
          layout
        >
          <p>close x</p>
        </motion.div>
      )}
      {children}
    </div>
  );
}

export default function Home() {
  const [menu, { height: menuHeight }] = useMeasure();
  const { height: screenHeight, width } = useWindowSize();

  return (
    <ContentProvider>
      <Layout>
        <div
          ref={menu}
          className="h-fit w-full border-t border-neutral-50/20 px-8 py-4 md:h-screen md:w-60 md:border-t-0 md:py-16"
          data-outside-content="1"
        >
          <ul className="flex h-full w-full flex-row justify-between gap-4 md:flex-col [&_li]:text-xs">
            <MenuItem to="author">Author</MenuItem>
            <MenuItem to="about" max>
              About
            </MenuItem>
            <MenuItem to="contact">Contact</MenuItem>
          </ul>
        </div>
        <div
          id="content"
          data-outside-content="1"
          style={{
            height: width < 768 ? screenHeight - menuHeight : screenHeight
          }}
          className="relative w-full"
        >
          <Content />
        </div>
      </Layout>
    </ContentProvider>
  );
}
