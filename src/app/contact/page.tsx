import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import ContactForm from './components/ContactForm';

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: 'https://github.com/junggyoo',
  },
  {
    icon: <AiFillLinkedin />,
    url: 'https://www.linkedin.com/in/%EC%A0%95%EA%B7%9C-%EB%B0%B0-529644251',
  },
  {
    icon: <AiFillInstagram />,
    url: 'https://www.instagram.com/juuuuungq',
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>junggyoo.1@gamil.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map(({ icon, url }) => (
          <a
            className="text-3xl hover:text-yellow-400"
            key={url}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {icon}
          </a>
        ))}
      </ul>
      <h2 className="text-2xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </main>
  );
}
