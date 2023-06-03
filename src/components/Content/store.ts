import { createContext } from 'react';

export type ContentType = 'default' | 'author' | 'about' | 'contact';

export const ContentContext = createContext<{
  navigate: (val: ContentType) => void;
  mouse: boolean;
  current: ContentType;
  setMouse: (val: boolean) => void;
}>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  navigate: (_val: ContentType) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setMouse: (_val: boolean) => {},
  current: 'default',
  mouse: false
});
