import { createContext } from 'react';

export type ContentType = 'default' | 'author' | 'about' | 'contact';

export const ContentContext = createContext<{
  navigate: (val: ContentType) => void;
  current: ContentType;
}>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  navigate: (_val: ContentType) => {},
  current: 'default'
});
