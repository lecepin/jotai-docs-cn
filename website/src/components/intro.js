import { Jotai } from '../components';

export const Intro = () => {
  return (
    <header>
      <Jotai className="max-w-xs lg:hidden" />
      <div className="mt-8 flex items-center space-x-4 sm:space-x-8 sm:px-16 lg:mt-0 lg:px-0">
        <img
          src="https://storage.googleapis.com/candycode/jotai/jotai-mascot.png"
          className="w-1/3 max-w-[215px] lg:w-1/4"
          title="Jotai mascot"
          alt="Jotai mascot"
        />
        <div className="speech-bubble relative w-2/3 space-y-4 rounded-xl bg-gray-100 p-4 text-sm leading-snug text-gray-700 dark:bg-gray-900 dark:text-gray-300 sm:text-base md:text-lg lg:w-3/4 lg:p-8 lg:leading-normal">
          <div>
            没有额外的重新渲染，状态驻留在 React 中，您可以从 Suspense 和并发功能中获得全部好处。
          </div>
          <div>
            它可以从简单的 React.useState 替代品扩展到具有复杂需求的大型应用程序。
          </div>
        </div>
      </div>
    </header>
  );
};
