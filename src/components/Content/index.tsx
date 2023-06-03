import { AnimatePresence } from 'framer-motion';
import { useState, type PropsWithChildren } from 'react';

import Hero from '../Hero';
import About from './About';
import Author from './Author';
import Contact from './Contact';
import { ContentContext, type ContentType } from './store';
import useContent from './useContent';

export function ContentProvider({ children }: PropsWithChildren) {
  const [content, setContent] = useState<ContentType>('default');

  return (
    <ContentContext.Provider
      value={{
        current: content,
        navigate: val => (val !== content ? setContent(val) : {})
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
