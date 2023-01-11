import { InlineCode, Intro, Layout, Meta } from '../components';
import { CoreDemo, IntegrationsDemo, UtilitiesDemo } from '../demos';

export default function HomePage() {
  return (
    <Layout>
      <Intro />
      <div className="mt-8 space-y-8 lg:mt-16 lg:space-y-16">
        <section>
          <h2>介绍</h2>
          <p>
            Jotai 受 Recoil 启发的原子模型采用自下而上的方法来进行 React 状态管理。 可以通过组合原子来构建状态，并且渲染基于原子依赖性进行优化。 这解决了 React 上下文的额外重新渲染问题，并消除了对 memoization 技术的需要。
          </p>
        </section>
        <section>
          <h2>核心 API</h2>
          <p>
            Jotai 有一个非常小的 API，并且是面向 TypeScript 的。 它与 React 的集成 <InlineCode>useState</InlineCode> hook 一样简单易用，但所有状态都是全局可访问的，派生状态易于实现，并且自动消除了额外的重新渲染。
          </p>
          <CoreDemo />
        </section>
        <section>
          <h2>额外的 utilities</h2>
          <p>
            Jotai 包还包括一个 <InlineCode>jotai/utils</InlineCode> 包。 这些函数增加了对在 localStorage（或 URL 哈希）中保留原子状态、在服务器端渲染期间混合原子状态、创建具有 set 函数（包括类似 Redux 的 reducers 和 action 类型）的原子等等的支持！
          </p>
          <UtilitiesDemo />
        </section>
        <section>
          <h2>第三方集成</h2>
          <p>
            每个官方第三方集成还有额外的捆绑包。 Immer、Optics、Query、XState、Valtio、Zustand、Redux 和 URQL。
          </p>
          <p>
            一些集成提供了具有备用集合函数的新原子类型，例如  <InlineCode>atomWithImmer</InlineCode>，而其他集成则提供了具有与其他状态管理库的双向数据绑定的新原子类型，例如与 Redux 存储绑定的 <InlineCode>atomWithStore</InlineCode>。
          </p>
          <IntegrationsDemo />
        </section>
        <section>
          <h2>学习更多</h2>
          <p>查看 Jotai 的创建者 Daishi 的免费 Egghead 课程。</p>
          <a
            href="https://egghead.io/courses/manage-application-state-with-jotai-atoms-2c3a29f0"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block"
          >
            <img
              src="https://storage.googleapis.com/candycode/jotai/jotai-course-banner.jpg"
              className="block rounded-md shadow-lg dark:!shadow-none sm:rounded-lg"
              alt="Jotai course"
              title="Jotai course"
            />
          </a>
        </section>
      </div>
    </Layout>
  );
}

export const Head = () => {
  return <Meta />;
};
