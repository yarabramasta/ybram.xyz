import { useWindowSize } from 'usehooks-ts';

import Branding from '../components/Branding';
import Logo from '../components/Logo';
import MenuItem from '../components/MenuItem';

export default function Home() {
  const { width } = useWindowSize();

  return (
    <div className="safe-h-screen flex flex-col-reverse md:flex-row">
      <aside className="w-full border-t border-neutral-50/10 px-8 py-8 md:h-full  md:w-60 md:border-t-0 md:py-16">
        <ul className="flex h-fit w-full flex-row justify-between gap-4 md:h-full md:flex-col [&_li]:text-xs">
          {width > 768 && <Branding />}
          {width < 768 && <Logo />}
          <MenuItem>About +</MenuItem>
          <MenuItem max>Services +</MenuItem>
          <MenuItem>Contact +</MenuItem>
        </ul>
      </aside>
      <div id="content" className="h-full flex-1 overflow-y-scroll p-8"></div>
    </div>
  );
}
