import { NextApiRequest, NextApiResponse } from 'next';
import { object, string } from 'yup';

import { EmailForm } from '@/app/contact/components/ContactForm';

const nodemailer = require('nodemailer');

const bodySchema = object().shape({
  from: string().email().required(),
  subject: string().required(),
  message: string().required(),
});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function POST(req: Request, res: Response) {
  if (!bodySchema.isValidSync(req.body)) {
    return new Response('Invalid body', { status: 400 });
  }

  const { from, subject, message } = req.body as EmailForm;
  const mailOptions = {
    from,
    to: process.env.AUTH_USER,
    subject,
    text: message,
    html: `
      <h1>${subject}</h1>
      <p>${message}</p>
      <br/>
      <p>보낸사람: ${from}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: '메일 전송 성공' });
  }
}
