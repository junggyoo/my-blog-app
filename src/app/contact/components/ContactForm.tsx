'use client';

import { useState } from 'react';

import Banner, { BannerData } from '@/app/posts/components/Banner';
import { sendContactEmail } from '@/services/contact';

export type EmailForm = {
  from: string;
  subject: string;
  message: string;
};

const defaultForm: EmailForm = {
  from: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<EmailForm>(defaultForm);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        setBanner({
          message: '메일을 성공적으로 보냈습니다.',
          status: 'success',
        });
        setForm(defaultForm);
      })
      .catch(() => {
        setBanner({
          message: '메일을 보내는데 실패했습니다. 다시 시도해 주세요.',
          status: 'error',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
        onSubmit={handleSubmit}
      >
        <label className="font-semibold" htmlFor="from">
          Your Email
        </label>
        <input
          className="text-black"
          type="email"
          id="from"
          name="from"
          value={form.from}
          onChange={handleInputChange}
          required
          autoFocus
        />
        <label className="font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          className="text-black"
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleInputChange}
          required
        />
        <label className="font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          className="font-semibold text-black"
          id="message"
          name="message"
          value={form.message}
          onChange={handleInputChange}
          required
          rows={10}
        />
        <button
          className="bg-yellow-300 text-black font-bold hover:bg-yellow-400"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
