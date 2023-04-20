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
      <h1 className="text-xl mt-2">Hi, I'm Jungq</h1>
      <p className="text-md font-extralight">Front-end engineer</p>
      <p className="text-md font-extralight">
        꿈을 코딩하는 사람, 드림코더 정큐
      </p>
      <button className="text-sm rounded-full bg-blue-300 p-1 text-white">
        Contact Me
      </button>
    </section>
  );
}
