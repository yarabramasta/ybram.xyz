import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import Loader from './Loader';

export type SceneType = 'index' | 'about' | 'services' | 'contact';

const SceneContext = createContext<{
  current: SceneType;
  loading: boolean;
  sceneHandler: (val: SceneType) => void;
  loadingHandler: (val: boolean) => void;
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sceneHandler: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  loadingHandler: () => {},
  loading: true,
  current: 'index'
});

// eslint-disable-next-line react-refresh/only-export-components
export function useScene() {
  return useContext(SceneContext);
}

export function SceneProvider({ children }: { children: ReactNode }) {
  const [scene, setScene] = useState<SceneType>('index');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <SceneContext.Provider
      value={{
        current: scene,
        loading,
        sceneHandler: (val: SceneType) => {
          setLoading(true);
          setTimeout(() => setLoading(false), 500);
          setScene(val);
        },
        loadingHandler: (val: boolean) => setLoading(val)
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}

export default function Scene() {
  const { current, loading } = useScene();

  if (loading) return <Loader />;

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
