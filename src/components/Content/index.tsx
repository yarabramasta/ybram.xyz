import { AnimatePresence } from 'framer-motion';
import { useState, type PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';

import Hero from '../Hero';
import About from './About';
import Author from './Author';
import Contact from './Contact';
import { ContentContext, type ContentType } from './store';
import useContent from './useContent';

export function ContentProvider({ children }: PropsWithChildren) {
  const { width } = useWindowSize();
  const [mouse, setMouse] = useState(width > 768);
  const [content, setContent] = useState<ContentType>('default');

  function handleCursor(content: ContentType) {
    const rootCursorStyle = (cursorType: 'default' | 'none') => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById('root')!.style.cursor = cursorType;
    };

    if (content !== 'default') {
      rootCursorStyle('none');
    } else {
      setMouse(false);
      rootCursorStyle('default');
    }
  }

  return (
    <ContentContext.Provider
      value={{
        current: content,
        mouse,
        setMouse,
        navigate: val => {
          val !== content ? setContent(val) : {};
          if (width > 768) {
            handleCursor(val);
          }
        }
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

const contents = [
  { content: 'default', node: <Hero /> },
  { content: 'author', node: <Author /> },
  { content: 'about', node: <About /> },
  { content: 'contact', node: <Contact /> }
];

export default function Content() {
  const { current } = useContent();

  return (
    <>
      {contents.map(({ node, content }) => (
        <AnimatePresence mode="wait" key={`content:${content}`}>
          {current === content && node}
        </AnimatePresence>
      ))}
    </>
  );
}
