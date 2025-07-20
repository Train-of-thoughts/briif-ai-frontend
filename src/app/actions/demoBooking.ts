'use server';

import { revalidatePath } from 'next/cache';
import { parseDemoBookingFormData } from '@/schema/booking/demo-booking-schema';
import { ZodError } from 'zod';

export async function submitDemoRequest(formData: FormData): Promise<void> {
  try {
    const validatedData = parseDemoBookingFormData(formData, (key, params) => {
      if (key === 'validation.nameRequired') return 'Name is required';
      if (key === 'validation.nameMaxLength') return `Name exceeds maximum length of ${params?.max}`;
      if (key === 'validation.emailRequired') return 'Email is required';
      if (key === 'validation.emailInvalid') return 'Invalid email format';
      if (key === 'validation.companyMaxLength') return `Company name exceeds maximum length of ${params?.max}`;
      if (key === 'validation.messageMaxLength') return `Message exceeds maximum length of ${params?.max}`;
      return key;
    });

    const { name, email, company, message, locale } = validatedData;

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram configuration missing');
      return;
    }

    const telegramMessage = `
📋 *Новий запис на демо*

👤 *Ім'я:* ${name}
📧 *Пошта:* ${email}
🏢 *Компанія:* ${company || 'Not provided'}
💬 *Повідомлення:* ${message || 'Not provided'}
🌐 *Мова:* ${locale}
    `;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      return;
    }

    revalidatePath('/');
  } catch (error) {
    console.error('Error sending demo request:', error);

    if (error instanceof ZodError) {
      throw error;
    }

    throw new Error('Failed to send demo request');
  }
}
