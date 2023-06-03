import type { PropsWithChildren } from 'react';
import useMeasure from 'react-use-measure';
import { useWindowSize } from 'usehooks-ts';

import Content, { ContentProvider } from './Content';
import MenuItem from './MenuItem';

function Layout({ children }: PropsWithChildren) {
  return <div className="flex flex-col-reverse md:flex-row">{children}</div>;
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
            <MenuItem to="author">Author +</MenuItem>
            <MenuItem to="about" max>
              About +
            </MenuItem>
            <MenuItem to="contact">Contact +</MenuItem>
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
