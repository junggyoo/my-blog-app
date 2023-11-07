import Image from 'next/image';
import Link from 'next/link';
import profileImage from 'public/images/profile.jpeg';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center mt-5">
      <Image
        className="rounded-full"
        src={profileImage}
        alt="profile"
        width={200}
        height={200}
        priority
      />
      <h2 className="text-xl mt-2">Hi, I'm Jungq</h2>
      <h3 className="text-md font-extralight">Front-end engineer</h3>
      <p className="text-md font-extralight">
        꿈을 코딩하는 사람, 드림코더 정큐
      </p>
      <Link href="/contact">
        <button className="text-sm rounded-xl bg-blue-300 mt-2 px-2 py-1 text-white">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
