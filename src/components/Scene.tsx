import { ReactNode, createContext, useContext, useState } from 'react';

export type SceneType = 'index' | 'about' | 'services' | 'contact';

const SceneContext = createContext<{
  current: SceneType;
  handler: (val: SceneType) => void;
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handler: () => {},
  current: 'index'
});

export function useScene() {
  return useContext(SceneContext);
}

export function SceneProvider({ children }: { children: ReactNode }) {
  const [scene, setScene] = useState<SceneType>('index');

  return (
    <SceneContext.Provider
      value={{ current: scene, handler: (val: SceneType) => setScene(val) }}
    >
      {children}
    </SceneContext.Provider>
  );
}

export default function Scene() {
  const { current } = useScene();

  switch (current) {
    case 'index':
      return <h1>scene: index</h1>;
    case 'about':
      return <h1>scene: about</h1>;
    case 'services':
      return <h1>scene: services</h1>;
    case 'contact':
      return <h1>scene: contact</h1>;
    default:
      return <h1>scene: index</h1>;
  }
}
