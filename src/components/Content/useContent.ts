import { useContext } from 'react';
import { ContentContext } from './store';

export default function useContent() {
  return useContext(ContentContext);
}
