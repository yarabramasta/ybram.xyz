import MenuItem from './MenuItem';

export default function Home() {
  return (
    <div className="safe-h-screen flex flex-col-reverse md:flex-row">
      <aside className="w-full border-t border-neutral-50/10 px-8 py-8 md:h-full  md:w-60 md:border-t-0 md:py-16">
        <ul className="flex h-fit w-full flex-row justify-between gap-4 md:h-full md:flex-col [&_li]:text-xs">
          <MenuItem max>
            About +
          </MenuItem>
          <MenuItem>Contact +</MenuItem>
        </ul>
      </aside>
      <div
        id="content"
        className="relative h-full flex-1 overflow-y-scroll p-8"
      ></div>
    </div>
  );
}
