import Image from 'next/image';

export default function IntroduceSection() {
  return (
    <section className="flex flex-col items-center justify-center mt-5">
      <Image
        className="rounded-full"
        src="/images/profile.jpeg"
        alt="profile"
        priority
        width={200}
        height={200}
      />
      <h1 className="text-2xl mt-2">Hi, I'm Seize</h1>
      <p className="text-lg font-extralight">Front-end engineer</p>
      <p className="text-lg font-extralight">
        꿈을 코딩하는 사람, 드림코더 씨즈
      </p>
    </section>
  );
}
