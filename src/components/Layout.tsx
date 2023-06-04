import { type PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';

export default function Layout({ children }: PropsWithChildren) {
  const { height, width } = useWindowSize();

  return (
    <div
      className="flex-1 overflow-y-scroll"
      style={{ height: width > 768 ? height : height - 2.5 * 16 }}
    >
      {children}
    </div>
  );
}
