import { type PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';

import Mouse, { MouseState, useMouseState } from './Mouse';
import Navigation from './Navigation';

export default function RootLayout({ children }: PropsWithChildren) {
  const { height } = useWindowSize();
  const { mounted, x, y } = useMouseState();

  return (
    <MouseState>
      <div
        className="flex flex-col-reverse md:flex-row"
        style={{ height }}
        onMouseMove={evt => {
          x.set(evt.clientX - 16);
          y.set(evt.clientY - 8);
        }}
      >
        <Navigation />
        {mounted && <Mouse />}
        {children}
      </div>
    </MouseState>
  );
}
