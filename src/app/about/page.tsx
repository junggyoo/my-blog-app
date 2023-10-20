import Hero from '../home/components/Hero';

export default function AboutPage() {
  return (
    <main className="pb-10">
      <Hero />
      <section className="flex flex-col items-center mt-10 p-5 bg-slate-50 rounded-md shadow-md">
        <h2 className={TITLE_STYLE}>Who Am i ?</h2>
        <p className={DESCRIPTION_STYLE}>
          개발을 사랑하는 3년차 프론트엔드 개발자, 배정규입니다.
          <br />
          사용자가 편리하게 사용할 수 있는 서비스를 만들고 있습니다.
        </p>
        <h2 className={TITLE_STYLE}>Career</h2>
        <p className={DESCRIPTION_STYLE}>
          피나클 (2023.04 ~ 2023.10) <br />
          메쉬코리아 (2022.01 ~ 2022.10) <br />
          라이앤캐처스 (2020.11 ~ 2022.01) <br />
        </p>
        <h2 className={TITLE_STYLE}>Skills</h2>
        <p className={DESCRIPTION_STYLE}>
          React, Nextjs, TypeScript <br />
          Styled-components, Emotion, Tailwind, SCSS
          <br />
          React-query, Mobx, Recoil, Zustand <br />
          Storybook, React-hook-form, Git, Jira <br />
        </p>
      </section>
    </main>
  );
}

const TITLE_STYLE = 'text-lg font-bold';
const DESCRIPTION_STYLE = 'text-sm text-center mb-3';
