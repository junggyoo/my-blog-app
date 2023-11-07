import { EmailForm } from '@/app/contact/components/ContactForm';

export async function sendContactEmail(form: EmailForm) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패했습니다.');
  }

  return data;
}
