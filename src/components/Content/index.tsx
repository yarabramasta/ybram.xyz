import { AnimatePresence } from 'framer-motion';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren
} from 'react';
import { useWindowSize } from 'usehooks-ts';

import Hero from '../Hero';
import About from './About';
import Author from './Author';
import Contact from './Contact';
import { ContentContext, type ContentType } from './store';
import useContent from './useContent';

export function ContentProvider({ children }: PropsWithChildren) {
  const url = useMemo(() => new URL(window.location.href), []);
  const q = url.searchParams.get('content') as ContentType | null;
  const [content, setContent] = useState<ContentType>(q ?? 'default');

  const { width } = useWindowSize();
  const [mouse, setMouse] = useState(width > 768);

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

  const handleContentUpdate = useCallback(
    (val: ContentType) => {
      setContent(val);
      url.searchParams.set('content', val);
      window.history.replaceState({}, '', url.toString());
    },
    [url]
  );

  useEffect(() => {
    handleContentUpdate(q ?? 'default');
  }, [q, handleContentUpdate]);

  return (
    <ContentContext.Provider
      value={{
        current: content,
        mouse,
        setMouse,
        navigate: val => {
          if (val !== content) handleContentUpdate(val);
          if (width > 768) handleCursor(val);
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
