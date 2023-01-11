import cx from 'classnames';
import { useAtom } from 'jotai';
import { darkModeAtom } from '../atoms';
import { ClientOnly, Code } from '../components';

export const UtilitiesDemo = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const code = `import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// 设置字符串键和初始值
const darkModeAtom = atomWithStorage('darkMode', false)

const Page = () => {
  // 像任何其他原子一样使用持久化状态
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  return (
    <>
      <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
      <button onClick={toggleDarkMode}>toggle theme</button>
    </>
  )
}`;

  return (
    <>
      <div className="py-8">
        <ClientOnly>
          <div
            className={cx(
              darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900',
              'flex items-center space-x-4 rounded-xl p-4 transition duration-300 ease-in-out lg:space-x-8 lg:p-8',
            )}
          >
            <div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={cx(
                  darkMode ? 'bg-gray-700' : 'bg-gray-300',
                  'dark:focus-teal-700 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-opacity duration-200 ease-in-out focus:outline-none focus:ring focus:ring-blue-400',
                )}
              >
                <span
                  className={cx(
                    darkMode ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                  )}
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="text-sm leading-relaxed lg:text-lg">
              此切换将通过 localStorage 在用户会话之间保留。
            </div>
          </div>
        </ClientOnly>
      </div>
      <Code>{code}</Code>
    </>
  );
};
